import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, ArrowLeft, FlaskConical, Code } from 'lucide-react';
import { fetchStudentProjects } from '@/app/data/api';

export function FocusAreaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Map slug back to title cleanly
  const domainTitle = slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Focus Area';

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchStudentProjects();
        const arr = Array.isArray(res) ? res : res.results || [];
        // Filter strictly to items containing this exact focus area slug
        const matched = arr.filter((p: any) => 
          p.focus_areas && p.focus_areas.some((f: any) => f.slug === slug)
        );
        setProjects(matched);
      } catch (error) {
        console.error("Failed to fetch student projects", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [slug]);

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
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-[#0F172A] via-slate-900 to-[#0F172A] text-white py-20 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/research/focus-areas" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Focus Areas
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {domainTitle}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Browse all associated student research mapping specifically to this fundamental technological domain.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center">
          <Search className="text-slate-400 w-6 h-6 mr-4" />
          <input
            type="text"
            placeholder="Search within this domain (e.g., algorithms, Python, student name)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-lg outline-none text-slate-700 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Code className="w-16 h-16 text-slate-300 animate-pulse" />
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all relative flex flex-col group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <FlaskConical className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex gap-2">
                    {project.is_masters && (
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                        Master's
                      </span>
                    )}
                    <StatusBadge status={project.status} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">{project.title}</h3>
                <div className="text-purple-600 font-semibold mb-4 text-sm flex-grow-0 uppercase tracking-wide">
                  {project.students && Array.isArray(project.students) ? project.students.join(', ') : (project.team_members || '')}
                </div>
                
                <p className="text-slate-600 text-sm line-clamp-4 leading-relaxed flex-grow mb-6">
                  {project.abstract || project.description}
                </p>

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
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <FlaskConical className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No matching research found</h3>
            <p className="text-slate-600">Try adjusting your search keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
}
