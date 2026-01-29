import { FlaskConical, FileText, Award, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { fetchStudentProjects, fetchFacultyResearch } from '@/app/data/api';
import { motion } from 'motion/react';

export function Research() {
  const [studentProjects, setStudentProjects] = useState<any[]>([]);
  const [facultyResearch, setFacultyResearch] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [showAllStudent, setShowAllStudent] = useState(false);
  const [showAllFaculty, setShowAllFaculty] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [studentsRes, facultyRes] = await Promise.all([
          fetchStudentProjects(),
          fetchFacultyResearch()
        ]);

        // Handle potential pagination (results array) or direct array
        const students = Array.isArray(studentsRes) ? studentsRes : (studentsRes.results || []);
        const faculty = Array.isArray(facultyRes) ? facultyRes : (facultyRes.results || []);

        console.log("Students:", students);
        console.log("Faculty:", faculty);

        // Filter students for 'Research' type if mixed, or just take all returned
        // Assuming API returns all, we might want to filter or just use them.
        // For now, sorting by id desc to get newest? Or random?
        // Let's just use the fetched list.
        setStudentProjects(students);
        setFacultyResearch(faculty);
      } catch (error) {
        console.error("Failed to fetch research data", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const displayedStudentProjects = showAllStudent ? studentProjects.slice(0, 10) : studentProjects.slice(0, 4);
  const displayedFacultyResearch = showAllFaculty ? facultyResearch.slice(0, 10) : facultyResearch.slice(0, 3);

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

      {/* Student Research Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Student Research</h2>

          {loading ? (
            <div className="text-center text-slate-500 italic">Loading research projects...</div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {Array.isArray(displayedStudentProjects) && displayedStudentProjects.map((project, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={idx}
                    className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg border border-slate-100 relative"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <FlaskConical className="w-10 h-10 text-[#4CC9BF]" />
                      <StatusBadge status={project.status} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    {/* Serializer returns 'students' array, not 'team_members' string. Adapted. */}
                    <div className="text-[#4CC9BF] font-semibold mb-4 text-sm">
                      {project.students && Array.isArray(project.students) ? project.students.join(', ') : (project.team_members || '')}
                    </div>
                    <p className="text-slate-600 mb-4 text-sm line-clamp-3">{project.description}</p>

                    {/* Backend Serializer returns array for technologies, but just in case check type */}
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {(Array.isArray(project.technologies) ? project.technologies : (typeof project.technologies === 'string' ? project.technologies.split(',') : [])).map((tech: string, i: number) => (
                          <span key={i} className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {studentProjects.length > 4 && (
                <div className="text-center">
                  <button
                    onClick={() => setShowAllStudent(!showAllStudent)}
                    className="inline-flex items-center text-[#4CC9BF] font-semibold hover:text-[#33AAA1] transition-colors"
                  >
                    {showAllStudent ? (
                      <>Show Less <ChevronUp className="ml-1 w-4 h-4" /></>
                    ) : (
                      <>See More <ChevronDown className="ml-1 w-4 h-4" /></>
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Faculty Research Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Faculty Research</h2>

              {loading ? (
                <div className="text-slate-500 italic">Loading faculty research...</div>
              ) : (
                <div className="space-y-6">
                  {Array.isArray(displayedFacultyResearch) && displayedFacultyResearch.map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-xl shadow-lg border border-slate-100"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-slate-900 pr-4">{project.title}</h3>
                        <StatusBadge status={project.status} />
                      </div>
                      <p className="text-sm text-[#4CC9BF] mb-3">{project.lead_researcher_name ? `Dr. ${project.lead_researcher_name}` : 'Faculty Lead'}, Lead Researcher</p>
                      <p className="text-slate-600 text-sm">{project.description}</p>
                    </motion.div>
                  ))}

                  {facultyResearch.length > 3 && (
                    <div className="pt-2">
                      <button
                        onClick={() => setShowAllFaculty(!showAllFaculty)}
                        className="inline-flex items-center text-[#4CC9BF] font-semibold hover:text-[#33AAA1] transition-colors"
                      >
                        {showAllFaculty ? (
                          <>Show Less <ChevronUp className="ml-1 w-4 h-4" /></>
                        ) : (
                          <>See More <ChevronDown className="ml-1 w-4 h-4" /></>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl lg:sticky lg:top-24">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763372278600-fd0b0997a7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJlZGRlZCUyMHN5c3RlbXMlMjBjaXJjdWl0c3xlbnwxfHx8fDE3NjkwNjQ5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Research"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Publications & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl text-center">
              <FileText className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">25+</div>
              <div className="text-slate-600">Published Papers</div>
              <p className="text-sm text-slate-500 mt-2">In international journals</p>
            </div>
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl text-center">
              <Award className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">10+</div>
              <div className="text-slate-600">Awards Won</div>
              <p className="text-sm text-slate-500 mt-2">National and international competitions</p>
            </div>
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl text-center">
              <Users className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-slate-600">Active Research Projects</div>
              <p className="text-sm text-slate-500 mt-2">Ongoing research initiatives</p>
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