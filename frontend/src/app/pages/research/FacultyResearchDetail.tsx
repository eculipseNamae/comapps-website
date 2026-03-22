import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchFacultyMember } from '@/app/data/api';
import { motion } from 'motion/react';
import { ChevronLeft, User, BookOpen, Microscope, ExternalLink } from 'lucide-react';

export function FacultyResearchDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [faculty, setFaculty] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchFacultyMember(id)
        .then(setFaculty)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-[#4CC9BF] animate-spin"></div></div>;
  }

  if (!faculty) {
    return <div className="min-h-screen flex items-center justify-center text-slate-500">Faculty profile not found.</div>;
  }

  const ongoingResearch = faculty.research_projects?.filter((r: any) => r.status === 'Ongoing') || [];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/research/faculty-profiles" className="inline-flex items-center text-slate-500 hover:text-[#4CC9BF] mb-8 font-medium transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" /> Back to Faculty Profiles
        </Link>

        {/* Header Profile */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200 mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="w-40 h-40 flex-shrink-0 rounded-full border-4 border-slate-50 shadow-md overflow-hidden bg-white">
            {faculty.profile_image ? (
              <img src={faculty.profile_image} alt={faculty.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                <User className="w-16 h-16 text-slate-300" />
              </div>
            )}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{faculty.name}</h1>
            <p className="text-xl text-[#4CC9BF] font-semibold mb-6">{faculty.position}</p>
            {faculty.bio && <p className="text-slate-600 leading-relaxed max-w-2xl">{faculty.bio}</p>}
          </div>
        </motion.div>

        {/* Scholarly Articles */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-[#4CC9BF]" /> Scholarly Articles & Publications
          </h2>
          {(!faculty.publications || faculty.publications.length === 0) ? (
            <p className="text-slate-500 italic bg-white p-6 rounded-2xl border border-slate-200">No publications listed yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {faculty.publications.map((pub: any, idx: number) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#4CC9BF]/40 transition-all flex flex-col hover:-translate-y-1">
                  <div className="mb-4 flex-grow">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">{pub.title}</h3>
                    <p className="text-sm font-medium text-[#4CC9BF]">
                      {pub.venue} <span className="text-slate-400 ml-1">({pub.year})</span>
                    </p>
                  </div>
                  {pub.link && (
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex w-full justify-center items-center px-4 py-2 bg-slate-50 text-slate-700 font-semibold rounded-lg hover:bg-[#4CC9BF] hover:text-white transition-colors border border-slate-200 hover:border-[#4CC9BF]">
                        <ExternalLink className="w-4 h-4 mr-2" /> View Paper
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.section>

        {/* Ongoing Research */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Microscope className="w-6 h-6 mr-3 text-[#33AAA1]" /> Ongoing Research
          </h2>
          {ongoingResearch.length === 0 ? (
            <p className="text-slate-500 italic bg-white p-6 rounded-2xl border border-slate-200">No ongoing research projects listed.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {ongoingResearch.map((project: any, idx: number) => (
                <Link to={`/research/projects/${project.id}`} key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white shadow-xl flex flex-col group hover:-translate-y-1 transition-all hover:shadow-2xl border border-transparent hover:border-[#4CC9BF]/50">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-[#4CC9BF]/20 text-[#4CC9BF] text-xs font-bold uppercase tracking-wider rounded-md border border-[#4CC9BF]/30">
                      {project.research_category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#4CC9BF] transition-colors">{project.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 flex-grow line-clamp-3">{project.description}</p>
                </Link>
              ))}
            </div>
          )}
        </motion.section>

      </div>
    </div>
  );
}
