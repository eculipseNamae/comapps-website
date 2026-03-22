import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, BookOpen, GraduationCap, Banknote, Target, FlaskConical, Code } from 'lucide-react';
import { fetchResearchSettings, fetchAllUnifiedPublications, fetchFaculty, fetchStudentProjects } from '@/app/data/api';

export function MetricsPage() {
  const [loading, setLoading] = useState(true);

  // Settings mapping
  const [hIndex, setHIndex] = useState(0);
  const [funding, setFunding] = useState(0);
  const [fundedProjects, setFundedProjects] = useState(0);
  const [pubCurrent, setPubCurrent] = useState(0);
  const [pubTarget, setPubTarget] = useState(0);
  const [basePubs, setBasePubs] = useState(0);

  // Dynamic Array Returns
  const [totalPubsLength, setTotalPubsLength] = useState(0);
  const [facultyLength, setFacultyLength] = useState(0);
  const [actualPubsPerFaculty, setActualPubsPerFaculty] = useState(0);
  const [completedStudentTheses, setCompletedStudentTheses] = useState(0);

  useEffect(() => {
    const compileMetrics = async () => {
      try {
        const [settings, unifiedPubs, facultyList, studentList] = await Promise.all([
          fetchResearchSettings(),
          fetchAllUnifiedPublications(),
          fetchFaculty(),
          fetchStudentProjects()
        ]);

        if (settings) {
          setHIndex(settings.h_index_department || 0);
          setFunding(settings.research_funding || 0);
          setFundedProjects(settings.funded_projects || 0);
          setPubCurrent(Number(settings.publications_per_faculty_current) || 0);
          setPubTarget(Number(settings.publications_per_faculty_target) || 0);
          setBasePubs(settings.base_publications || 0);
        }

        setTotalPubsLength(unifiedPubs.length || 0);
        
        const facArr = Array.isArray(facultyList) ? facultyList : facultyList.results || [];
        setFacultyLength(facArr.length);

        let totalFacPubs = 0;
        facArr.forEach((fac: any) => {
          if (fac.publications && Array.isArray(fac.publications)) {
            totalFacPubs += fac.publications.length;
          }
        });
        setActualPubsPerFaculty(facArr.length > 0 ? (totalFacPubs / facArr.length) : 0);

        const stuArr = Array.isArray(studentList) ? studentList : studentList.results || [];
        const completedTheses = stuArr.filter((p: any) => p.type === 'Research' && p.status === 'Completed');
        setCompletedStudentTheses(completedTheses.length);

      } catch (err) {
        console.error("Failed to compile metrics analytics payload", err);
      } finally {
        setLoading(false);
      }
    };
    
    compileMetrics();
  }, []);

  const formatFunding = (amount: number) => {
    if (amount >= 1000000) {
      const millions = amount / 1000000;
      return `₱${Number.isInteger(millions) ? millions : millions.toFixed(1)}M+`;
    }
    if (amount >= 1000) {
      const thousands = amount / 1000;
      return `₱${Number.isInteger(thousands) ? thousands : thousands.toFixed(1)}K+`;
    }
    if (amount === 0) return '₱0';
    return `₱${amount.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Dynamic Header */}
      <div className="bg-[#0F172A] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Metrics & Impact</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive analytical showcase dynamically highlighting our department's performance, funding milestones, and thesis track records.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10 pb-20">
        {loading ? (
             <div className="flex justify-center bg-white rounded-2xl shadow-xl py-32 border border-slate-100">
                <Code className="w-16 h-16 text-slate-300 animate-pulse" />
             </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* Core Academics */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-blue-100 rounded-xl">
                   <TrendingUp className="w-6 h-6 text-blue-600" />
                 </div>
              </div>
              <h3 className="text-5xl font-bold text-slate-900 mb-2">{hIndex}</h3>
              <div className="text-slate-500 font-semibold uppercase tracking-wider text-sm mb-2">H-Index System</div>
              <p className="text-slate-500 text-sm leading-relaxed">Official aggregate metric representing the productivity and citation impact of the Computer Applications department.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-[#4CC9BF]/10 rounded-xl">
                   <BookOpen className="w-6 h-6 text-[#33AAA1]" />
                 </div>
              </div>
              <h3 className="text-5xl font-bold text-slate-900 mb-2">{totalPubsLength + basePubs}</h3>
              <div className="text-slate-500 font-semibold uppercase tracking-wider text-sm mb-2">Total Publications</div>
              <p className="text-slate-500 text-sm leading-relaxed">Dynamic volume representing all tracked journals, conference appearances, and recognized literature.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-purple-100 rounded-xl">
                   <Users className="w-6 h-6 text-purple-600" />
                 </div>
              </div>
              <h3 className="text-5xl font-bold text-slate-900 mb-2">{facultyLength}</h3>
              <div className="text-slate-500 font-semibold uppercase tracking-wider text-sm mb-2">Research Faculty</div>
              <p className="text-slate-500 text-sm leading-relaxed">Actively advising teams, writing core literature, and pushing boundaries alongside graduate candidates.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-emerald-100 rounded-xl">
                   <Banknote className="w-6 h-6 text-emerald-600" />
                 </div>
              </div>
              <h3 className="text-5xl font-bold text-slate-900 mb-2">{formatFunding(funding)}</h3>
              <div className="text-emerald-700 font-bold uppercase tracking-wider text-sm mb-2">Research Funding</div>
              <p className="text-slate-600 text-sm leading-relaxed">Secured financial sponsorship dedicated toward technological breakthroughs and academic excellence.</p>
            </motion.div>

            {/* Target Ratios */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-orange-100 rounded-xl shadow-sm">
                   <Target className="w-6 h-6 text-orange-500" />
                 </div>
              </div>
              <div className="flex items-end gap-2 mb-2">
                 <h3 className="text-5xl font-bold text-slate-900 leading-none">{(actualPubsPerFaculty + pubCurrent).toFixed(1)}</h3>
                 <span className="text-xl text-slate-400 font-bold mb-1">/ {pubTarget.toFixed(1)}</span>
              </div>
              <div className="text-slate-500 font-semibold uppercase tracking-wider text-sm mb-2 mt-2">Publications per Faculty</div>
              <p className="text-slate-500 text-sm leading-relaxed">Our active progress index tracking average literature throughput against optimal operational efficiency.</p>
              
              {/* Optional Progress Bar matching ratios if applicable */}
              <div className="w-full bg-slate-100 rounded-full h-2 mt-4 overflow-hidden">
                <div className="bg-[#4CC9BF] h-2 rounded-full" style={{ width: `${Math.min(((actualPubsPerFaculty + pubCurrent) / (pubTarget || 1)) * 100, 100)}%` }}></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-rose-100 rounded-xl">
                   <FlaskConical className="w-6 h-6 text-rose-600" />
                 </div>
              </div>
              <h3 className="text-5xl font-bold text-slate-900 mb-2">{fundedProjects}</h3>
              <div className="text-slate-500 font-semibold uppercase tracking-wider text-sm mb-2">Sponsored Projects</div>
              <p className="text-slate-500 text-sm leading-relaxed">Discrete research nodes independently backed by official funding channels or university grants.</p>
            </motion.div>

            {/* Completed Theses */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="bg-white xl:col-span-2 p-8 rounded-2xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                 <div className="p-6 bg-orange-100 rounded-full shadow-inner">
                   <GraduationCap className="w-12 h-12 text-orange-600" />
                 </div>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-slate-900 mb-2">{completedStudentTheses}</h3>
                <div className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-2">Student Research Papers</div>
                <p className="text-slate-600 text-sm leading-relaxed max-w-lg">
                  The cumulative volume of successfully completed thesis projects developed by our student researchers, contributing to the broader academic ecosystem.
                </p>
              </div>
            </motion.div>

          </div>
        )}
      </div>
    </div>
  );
}
