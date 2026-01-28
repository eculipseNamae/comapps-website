import { FlaskConical, FileText, Award, Users, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState, useEffect } from "react";
import { researchAPI } from "../../services/api";

export function Research() {
  const [projects, setProjects] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, achievementsData] = await Promise.all([
          researchAPI.getProjects(),
          researchAPI.getAchievements(),
        ]);
        setProjects(projectsData || []);
        setAchievements(achievementsData || []);
      } catch (error) {
        console.error("Error fetching research data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Research and Projects</h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            Explore cutting-edge research and innovative student projects in IoT and Embedded Systems.
          </p>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Research Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={project.id || idx} className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg border border-slate-100">
                <FlaskConical className="w-10 h-10 text-[#4CC9BF] mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
                  {project.status && (
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${project.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                      {project.status}
                    </span>
                  )}
                  {project.funding_source && (
                    <span className="text-slate-500">Funded by: {project.funding_source}</span>
                  )}
                </div>
                <p className="text-slate-600 mb-4">{project.description}</p>
                {project.collaborators && (
                  <div className="text-sm text-slate-500">
                    <span className="font-semibold">Collaborators:</span> {project.collaborators}
                  </div>
                )}
              </div>
            ))}
            {projects.length === 0 && (
              <div className="col-span-full text-center text-slate-500 italic">No research projects found.</div>
            )}
          </div>
        </div>
      </section>

      {/* Faculty Research / Achievements split or combined? */}
      {/* I'll use Achievements for the "Publications & Achievements" numeric section, but better listed if possible. */}
      {/* The original design had detailed "Faculty Research" cards. I used 'projects' generally above. */}

      {/* Achievements List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Research Achievements</h2>
              <div className="space-y-6">
                {achievements.map((achievement, idx) => (
                  <div key={achievement.id || idx} className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{achievement.title}</h3>
                    <p className="text-sm text-[#4CC9BF] mb-3">{achievement.date}</p>
                    <p className="text-slate-600 text-sm mb-3">{achievement.description}</p>
                    {achievement.publication_link && (
                      <a href={achievement.publication_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#33AAA1] hover:underline text-sm font-semibold">
                        View Publication <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                ))}
                {achievements.length === 0 && (
                  <p className="text-slate-500 italic">No achievements listed yet.</p>
                )}
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl sticky top-24">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763372278600-fd0b0997a7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJlZGRlZCUyMHN5c3RlbXMlMjBjaXJjdWl0c3xlbnwxfHx8fDE3NjkwNjQ5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Research"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Static or derived) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Impact & Output</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl text-center">
              <FileText className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">{achievements.length}+</div>
              <div className="text-slate-600">Publications & Awards</div>
            </div>
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl text-center">
              <Award className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">{achievements.filter(a => a.type === 'Award').length || '5+'}</div>
              <div className="text-slate-600">Awards Won</div>
            </div>
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl text-center">
              <Users className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">{projects.length}+</div>
              <div className="text-slate-600">Active Research Projects</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Capstone Project Requirements</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Two-Semester Capstone Program</h3>
                <p className="text-[#77D6CE]">All students must complete a comprehensive capstone project demonstrating their skills in IoT or Embedded Systems.</p>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">First Semester (Capstone I)</h4>
                  <ul className="space-y-2">
                    {[
                      'Project proposal and design documentation',
                      'Literature review and feasibility study',
                      'System architecture and design',
                      'Preliminary implementation and testing',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-bold text-slate-900 mb-3">Second Semester (Capstone II)</h4>
                  <ul className="space-y-2">
                    {[
                      'Complete system implementation',
                      'Comprehensive testing and validation',
                      'Technical documentation and user manual',
                      'Final presentation and demonstration',
                      'Research paper submission',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}