import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { fetchStudentProjects } from '@/app/data/api';
import { FlaskConical, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StudentResearchPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchStudentProjects();
        const arr = Array.isArray(res) ? res : res.results || [];
        setProjects(arr.filter((p: any) => p.type === 'Research'));
      } catch (error) {
        console.error("Failed to fetch student projects", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const StatusBadge = ({ status }: { status: string }) => {
    const isCompleted = status === 'Completed';
    return (
      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${isCompleted
        ? 'bg-green-100 text-green-700 border border-green-200'
        : 'bg-blue-100 text-blue-700 border border-blue-200'
        }`}>
        {status}
      </span>
    );
  };

  const filteredProjects = projects.filter(p => {
    const query = searchQuery.toLowerCase();
    const students = Array.isArray(p.students) ? p.students.join(' ') : (p.team_members || '');
    const techs = Array.isArray(p.technologies) ? p.technologies.join(' ') : (p.technologies || '');
    return (
      (p.title && p.title.toLowerCase().includes(query)) ||
      (p.description && p.description.toLowerCase().includes(query)) ||
      (p.abstract && p.abstract.toLowerCase().includes(query)) ||
      students.toLowerCase().includes(query) ||
      techs.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#4CC9BF] mb-6">Student Research Hub</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive collection of innovative student research and theses in IoT and Embedded Systems.
          </p>
          
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-[#4CC9BF] rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-white rounded-full">
              <Search className="absolute left-6 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by title, student, technology, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full border border-slate-200 focus:border-transparent focus:ring-2 focus:ring-[#4CC9BF] outline-none transition-all text-lg shadow-sm"
              />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 rounded-full border-4 border-slate-200 border-t-[#4CC9BF] animate-spin"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={idx}
                  className="group bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-[#4CC9BF]/40 transition-all relative flex flex-col hover:-translate-y-1"
                >
                  <Link to={`/research/student-research/${project.id}`} className="absolute inset-0 z-10 rounded-2xl" aria-label={`View details for ${project.title}`}>
                    <span className="sr-only">View Details</span>
                  </Link>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-[#4CC9BF]/10 rounded-xl">
                      <FlaskConical className="w-8 h-8 text-[#4CC9BF]" />
                    </div>
                    <StatusBadge status={project.status} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">{project.title}</h3>
                  <div className="text-[#33AAA1] font-semibold mb-4 text-sm flex-grow-0 uppercase tracking-wide">
                    {project.students && Array.isArray(project.students) ? project.students.join(', ') : (project.team_members || '')}
                  </div>
                  
                  {project.abstract && (
                    <div className="mb-4 flex-grow">
                      <h4 className="text-sm font-bold text-slate-700 mb-1">Abstract</h4>
                      <p className="text-slate-600 text-sm line-clamp-4 leading-relaxed">{project.abstract}</p>
                    </div>
                  )}

                  {project.status === 'Completed' && (project.paper_presented || project.publish_journals) && (
                    <div className="mb-4 space-y-2 bg-slate-50 p-3 rounded-lg border border-slate-100 flex-grow-0">
                      {project.paper_presented && (
                        <div className="text-sm text-slate-700">
                          <span className="font-semibold text-slate-900">Presented in:</span> {project.paper_presented}
                        </div>
                      )}
                      {project.publish_journals && (
                        <div className="text-sm text-slate-700">
                          <span className="font-semibold text-slate-900">Published in:</span> {project.publish_journals}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex gap-2 mb-2 flex-grow-0 relative z-20">
                    {project.status === 'Completed' && project.pdf_upload && (
                      <a href={`http://localhost:8000${project.pdf_upload}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 bg-[#4CC9BF] text-white text-xs font-bold rounded-lg hover:bg-[#33AAA1] transition-colors shadow-sm truncate">
                        Download Full Paper
                      </a>
                    )}
                  </div>

                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100">
                      {(Array.isArray(project.technologies) ? project.technologies : (typeof project.technologies === 'string' ? project.technologies.split(',') : [])).map((tech: string, i: number) => (
                        <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-700 font-medium text-xs rounded-lg">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="inline-flex justify-center items-center w-24 h-24 bg-slate-100 rounded-full mb-6">
                  <FlaskConical className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-700 mb-3">No research found</h3>
                <p className="text-slate-500 max-w-md mx-auto">We couldn't find any student research or theses matching "{searchQuery}". Try using different keywords or clearing your search.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
