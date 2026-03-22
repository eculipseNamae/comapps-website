import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchFacultyProject } from '@/app/data/api';
import { motion } from 'motion/react';
import { ChevronLeft, Microscope, User, LayoutGrid, FileText } from 'lucide-react';

export function FacultyProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchFacultyProject(id)
        .then(setProject)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-[#4CC9BF] animate-spin"></div></div>;
  }

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-slate-500">Research project not found.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {project.lead_researcher ? (
          <Link to={`/research/faculty-profiles/${project.lead_researcher}`} className="inline-flex items-center text-slate-500 hover:text-[#4CC9BF] transition-colors mb-8 font-medium">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to {project.lead_researcher_name}'s Profile
          </Link>
        ) : (
          <Link to="/research/faculty-profiles" className="inline-flex items-center text-slate-500 hover:text-[#4CC9BF] transition-colors mb-8 font-medium">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Faculty Profiles
          </Link>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200 mb-8"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="p-3 bg-[#4CC9BF]/10 rounded-2xl">
              <Microscope className="w-8 h-8 text-[#4CC9BF]" />
            </div>
            <span className="px-4 py-1.5 text-sm font-bold rounded-full bg-blue-100 text-blue-700 border border-blue-200">
              {project.status}
            </span>
            {project.research_category && (
              <span className="px-4 py-1.5 text-sm font-bold uppercase tracking-wider rounded-full bg-slate-100 text-slate-700">
                {project.research_category}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {project.title}
          </h1>

          {project.description && (
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              {project.description}
            </p>
          )}

          {project.technologies_list && project.technologies_list.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies_list.map((tech: string, i: number) => (
                <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
            <div className="flex items-start">
              <User className="w-5 h-5 text-slate-400 mr-3 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Lead Researcher</h4>
                <p className="text-slate-800 font-medium">
                  {project.lead_researcher_name ? `Dr. ${project.lead_researcher_name}` : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {project.abstract && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-[#4CC9BF]" />
              Abstract
            </h3>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-slate-700 leading-relaxed text-lg italic">
              {project.abstract}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
