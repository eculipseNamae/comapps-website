import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchStudentProject } from '@/app/data/api';
import { ChevronLeft, FlaskConical, ExternalLink, Download, Users, Tag, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function StudentResearchDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        if (!id) return;
        const res = await fetchStudentProject(id);
        setProject(res);
      } catch (err) {
        console.error("Failed to fetch project details", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 py-32 flex justify-center items-start">
        <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-[#4CC9BF] animate-spin"></div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-slate-50 py-32 px-4 text-center">
        <FlaskConical className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Research Not Found</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">We couldn't load the details for this research. It may have been removed or the link is invalid.</p>
        <Link to="/research/student-research" className="inline-flex items-center text-[#4CC9BF] hover:underline font-semibold">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Student Research
        </Link>
      </div>
    );
  }

  const isCompleted = project.status === 'Completed';

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/research/student-research" className="inline-flex items-center text-slate-500 hover:text-[#4CC9BF] transition-colors mb-8 font-medium">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to all research
        </Link>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200 mb-8"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="p-3 bg-[#4CC9BF]/10 rounded-2xl">
              <FlaskConical className="w-8 h-8 text-[#4CC9BF]" />
            </div>
            <span className={`px-4 py-1.5 text-sm font-bold rounded-full ${isCompleted
              ? 'bg-green-100 text-green-700'
              : 'bg-blue-100 text-blue-700'
              }`}>
              {project.status}
            </span>
            {project.track && (
              <span className="px-4 py-1.5 text-sm font-bold rounded-full bg-slate-100 text-slate-700">
                {project.track}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {project.title}
          </h1>

          {project.description && (
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          )}

          <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
            <div className="flex items-start">
              <Users className="w-5 h-5 text-slate-400 mr-3 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Research Team & Adviser</h4>
                <p className="text-slate-800 font-medium">
                  {project.students && Array.isArray(project.students) ? project.students.join(', ') : (project.team_members || 'N/A')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-slate-400 mr-3 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Academic Period</h4>
                <p className="text-slate-800 font-medium">
                  {project.semester} • {project.year}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons if available */}
        {((project.pdf_upload && isCompleted)) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {project.pdf_upload && isCompleted && (
              <a 
                href={`http://localhost:8000${project.pdf_upload}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-[#4CC9BF] text-white font-bold rounded-xl hover:bg-[#33AAA1] shadow-lg shadow-[#4CC9BF]/30 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Full Paper
              </a>
            )}
          </motion.div>
        )}

        {/* Content Sections */}
        <div className="space-y-8">
          {project.abstract && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-[#4CC9BF]" />
                Abstract
              </h3>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-slate-700 leading-relaxed text-lg">
                {project.abstract}
              </div>
            </motion.section>
          )}



          {/* Publication/Presentation details */}
          {isCompleted && ((project.presentations && project.presentations.length > 0) || (project.publications && project.publications.length > 0)) && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                <Award className="w-6 h-6 mr-2 text-[#4CC9BF]" />
                Publication & Presentation Records
              </h3>
              <div className="space-y-6">
                {project.presentations && project.presentations.length > 0 && (
                  <div className="border-b border-slate-700 pb-6 mb-6">
                    <h4 className="text-[#4CC9BF] text-sm font-bold uppercase tracking-wider mb-4">Presented At</h4>
                    <ul className="list-disc list-inside space-y-2 text-lg font-medium">
                      {project.presentations.map((pres: string, idx: number) => (
                        <li key={idx} className="text-slate-200">{pres}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.publications && project.publications.length > 0 && (
                  <div>
                    <h4 className="text-[#4CC9BF] text-sm font-bold uppercase tracking-wider mb-4">Published Journals</h4>
                    <div className="space-y-4">
                      {project.publications.map((pub: any, idx: number) => (
                        <div key={idx} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex flex-wrap items-center justify-between gap-4">
                          <p className="text-lg font-medium">{pub.journal_name}</p>
                          {pub.link && (
                            <a 
                              href={pub.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center px-4 py-2 bg-slate-700 text-white text-sm font-bold rounded-lg hover:bg-slate-600 transition-colors shadow-sm"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Publication
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.section>
          )}

          {/* Technologies applied */}
          {project.technologies && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Tag className="w-6 h-6 mr-2 text-[#4CC9BF]" />
                Technologies Applied
              </h3>
              <div className="flex flex-wrap gap-3">
                {(Array.isArray(project.technologies) ? project.technologies : (typeof project.technologies === 'string' ? project.technologies.split(',') : [])).map((tech: string, i: number) => (
                  <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-xl border border-slate-200">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  );
}

// Add imports used inside component that were missing at top
import { FileText, Award } from 'lucide-react';
