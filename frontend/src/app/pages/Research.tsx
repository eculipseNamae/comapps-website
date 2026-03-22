import { FlaskConical, FileText, Award, Users, Lightbulb, Cpu, PenTool, Monitor } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { fetchStudentProjects, fetchFacultyResearch, fetchFaculty, fetchResearchSettings, fetchCollaborators } from '@/app/data/api';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Research() {
  const [studentProjects, setStudentProjects] = useState<any[]>([]);
  const [recentPublications, setRecentPublications] = useState<any[]>([]);
  const [collaborators, setCollaborators] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({ papers: 0, awards: 0, active: 0 });

  const labData = [
    { title: "IoT Lab", icon: <Lightbulb className="w-8 h-8 text-[#4CC9BF]" /> },
    { title: "Embedded Lab", icon: <Cpu className="w-8 h-8 text-[#4CC9BF]" /> },
    { title: "Grad Lab", icon: <Users className="w-8 h-8 text-[#4CC9BF]" /> },
    { title: "The Toolroom", icon: <PenTool className="w-8 h-8 text-[#4CC9BF]" /> },
    { title: "Digital Dreamscape", icon: <Monitor className="w-8 h-8 text-[#4CC9BF]" /> },
  ];

  const formatStat = (num: number) => {
    if (num === 0) return "0";
    if (num < 10) return num.toString();
    const rounded = Math.floor(num / 10) * 10;
    return num > rounded ? `${rounded}+` : rounded.toString();
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const [studentsRes, facultyRes, facultyMembersRes, settingsRes, collabsRes, unifiedPubsRes] = await Promise.all([
          fetchStudentProjects(),
          fetchFacultyResearch(),
          fetchFaculty(),
          fetchResearchSettings().catch(() => null),
          fetchCollaborators().catch(() => []),
          import('@/app/data/api').then(m => m.fetchAllUnifiedPublications()).catch(() => [])
        ]);

        const students = Array.isArray(studentsRes) ? studentsRes : (studentsRes.results || []);
        const faculty = Array.isArray(facultyRes) ? facultyRes : (facultyRes.results || []);
        const facultyMembers = Array.isArray(facultyMembersRes) ? facultyMembersRes : (facultyMembersRes.results || []);
        const offset = settingsRes || { base_publications: 0, base_awards: 0, base_active_projects: 0 };

        const shuffledStudents = [...students].sort(() => 0.5 - Math.random());
        setStudentProjects(shuffledStudents);

        let papers = offset.base_publications || 0;
        let awards = offset.base_awards || 0;
        let active = offset.base_active_projects || 0;

        active += students.filter((p: any) => p.status === 'In Progress').length;
        active += faculty.filter((p: any) => p.status === 'Ongoing').length;

        papers += Array.isArray(unifiedPubsRes) ? unifiedPubsRes.length : 0;

        students.forEach((p: any) => {
          if (p.awards && Array.isArray(p.awards)) {
            awards += p.awards.length;
          }
        });

        const allPublications: any[] = [];
        facultyMembers.forEach((member: any) => {
          if (member.publications && Array.isArray(member.publications)) {
            member.publications.forEach((pub: any) => {
              allPublications.push({
                ...pub,
                author_name: member.name
              });
            });
          }
        });
        
        // Randomize publications instead of sorting by year
        allPublications.sort(() => 0.5 - Math.random());
        setRecentPublications(allPublications);

        setCollaborators(Array.isArray(collabsRes) ? collabsRes : (collabsRes?.results || []));
        setStats({ papers, awards, active });
      } catch (error) {
        console.error("Failed to fetch research data", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const studentResearch = studentProjects.filter((p: any) => p.type === 'Research').slice(0, 4);
  const studentBuilt = studentProjects.filter((p: any) => p.type === 'Project').slice(0, 4);

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
          <p className="text-xl text-slate-100 max-w-3xl">
            Explore cutting-edge research and innovative student projects in IoT and Embedded Systems.
          </p>
        </div>
      </section>

      {/* Student Research Section (Thesis) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Student Research</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 text-center">
            Discover the rigorous academic theses and research papers authored by our aspiring scholars.
          </p>

          {loading ? (
            <div className="text-center text-slate-500 italic">Loading research papers...</div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {studentResearch.map((project, idx) => (
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
                    <div className="text-[#4CC9BF] font-semibold mb-4 text-sm">
                      {project.students && Array.isArray(project.students) ? project.students.join(', ') : (project.team_members || '')}
                    </div>
                    <p className="text-slate-600 mb-4 text-sm line-clamp-3">{project.description}</p>

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

              <div className="text-center mt-8">
                <Link
                  to="/research/student-research"
                  className="inline-flex items-center px-6 py-3 bg-[#4CC9BF]/10 text-[#4CC9BF] rounded-full font-semibold hover:bg-[#4CC9BF] hover:text-white transition-all shadow-sm"
                >
                  Explore All Student Research
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Faculty Research Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Faculty Research</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 text-center">
            Explore the latest publications and ongoing academic pursuits driven by our dedicated faculty members and researchers.
          </p>

          {loading ? (
            <div className="text-center text-slate-500 italic">Loading faculty research...</div>
          ) : (
            <>
              <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
                <div className="space-y-6">
                  {Array.isArray(recentPublications) && recentPublications.slice(0, 3).map((pub, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex flex-col h-full"
                    >
                      <h3 className="text-lg font-bold text-slate-900 mb-3">{pub.title}</h3>
                      <p className="text-sm font-semibold text-[#4CC9BF] mb-2">{pub.author_name}</p>
                      <p className="text-slate-600 text-sm mt-auto">Published: <span className="font-semibold">{pub.venue}</span> {pub.year && `(${pub.year})`}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {Array.isArray(recentPublications) && recentPublications.slice(3, 6).map((pub, idx) => (
                    <motion.div
                      key={idx + 3}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (idx + 3) * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex flex-col h-full"
                    >
                      <h3 className="text-lg font-bold text-slate-900 mb-3">{pub.title}</h3>
                      <p className="text-sm font-semibold text-[#4CC9BF] mb-2">{pub.author_name}</p>
                      <p className="text-slate-600 text-sm mt-auto">Published: <span className="font-semibold">{pub.venue}</span> {pub.year && `(${pub.year})`}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-8">
                  <Link
                    to="/research/faculty-profiles"
                    className="inline-flex items-center px-6 py-3 bg-[#4CC9BF]/10 text-[#4CC9BF] rounded-full font-semibold hover:bg-[#4CC9BF] hover:text-white transition-all shadow-sm"
                  >
                    Explore All Faculty Profiles
                  </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Publications & Achievements (Stats) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Publications & Achievements</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 text-center">
            A snapshot of our collective academic impact, highlighting recognized papers, global awards, and active research initiatives.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl text-center">
              <FileText className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">{formatStat(stats.papers)}</div>
              <div className="text-slate-600">Published Papers</div>
              <p className="text-sm text-slate-500 mt-2">In international journals</p>
            </div>
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl text-center">
              <Award className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">{formatStat(stats.awards)}</div>
              <div className="text-slate-600">Awards Won</div>
              <p className="text-sm text-slate-500 mt-2">National and international competitions</p>
            </div>
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl text-center">
              <Users className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">{formatStat(stats.active)}</div>
              <div className="text-slate-600">Active Research Projects</div>
              <p className="text-sm text-slate-500 mt-2">Ongoing research initiatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Projects Section (Capstone) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Student Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 text-center">
            Discover the innovative hands-on projects our students are building to solve real-world problems through Embedded Systems and IoT.
          </p>

          {loading ? (
            <div className="text-center text-slate-500 italic">Loading student projects...</div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {studentBuilt.map((project, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={idx}
                    className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 relative items-start flex-col"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <Cpu className="w-10 h-10 text-[#4CC9BF]" />
                      <StatusBadge status={project.status} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <div className="text-[#4CC9BF] font-semibold mb-4 text-sm">
                      {project.students && Array.isArray(project.students) ? project.students.join(', ') : (project.team_members || '')}
                    </div>
                    <p className="text-slate-600 mb-4 text-sm line-clamp-3">{project.description}</p>

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

              <div className="text-center mt-8">
                <Link
                  to="/studentprojects"
                  className="inline-flex items-center px-6 py-3 bg-[#4CC9BF]/10 text-[#4CC9BF] rounded-full font-semibold hover:bg-[#4CC9BF] hover:text-white transition-all shadow-sm"
                >
                  Explore More Student Projects
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Labs & Facilities</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Our state-of-the-art laboratories provide students and faculty with the tools they need to push the boundaries of Embedded Systems and IoT.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {labData.map((lab, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-[#4CC9BF]/10 p-4 rounded-full mb-4">
                  {lab.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-sm">{lab.title}</h3>
              </div>
            ))}
          </div>

          <Link
            to="/research/labs"
            className="inline-flex items-center px-8 py-4 bg-[#4CC9BF] text-white rounded-full font-bold hover:bg-[#33AAA1] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Explore Our Labs
          </Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Collaborations</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch opacity-90 max-w-6xl mx-auto pb-8">
            <div className="md:col-span-3 min-w-0">
              {collaborators && collaborators.length > 0 ? (
                <Slider 
                  dots={false} 
                  infinite={true} 
                  speed={500}
                  autoplay={true}
                  autoplaySpeed={3000}
                  slidesToShow={3} 
                  slidesToScroll={1}
                  responsive={[
                    { breakpoint: 1024, settings: { slidesToShow: 3 } },
                    { breakpoint: 768, settings: { slidesToShow: 2 } },
                    { breakpoint: 480, settings: { slidesToShow: 1 } }
                  ]}
                >
                  {collaborators.map((partner: any) => (
                    <div key={partner.id} className="p-3 focus:outline-none">
                      <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-xl flex flex-col items-center justify-center min-h-[160px] hover:shadow-md transition group h-full">
                        {partner.logo ? (
                          <ImageWithFallback src={partner.logo} alt={partner.name} className="h-16 object-contain mb-3 group-hover:scale-105 transition-transform" />
                        ) : (
                          <div className="h-16 w-16 bg-slate-100 rounded-full mb-3 flex items-center justify-center text-slate-400 font-bold text-2xl mx-auto">{partner.name.charAt(0)}</div>
                        )}
                        <span className="font-bold text-slate-700 text-sm text-center block w-full">{partner.name}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="flex justify-center items-center h-full min-h-[160px] text-slate-400 italic py-8 border border-dashed border-slate-200 rounded-xl m-3">
                  Loading external connections...
                </div>
              )}
            </div>

            <div className="md:col-span-1 p-3 flex">
              <Link to="/research/collaborations" className="p-6 bg-gradient-to-br from-[#4CC9BF]/10 to-[#33AAA1]/10 rounded-xl flex flex-col items-center justify-center min-h-[160px] border border-[#4CC9BF]/30 hover:shadow-md transition cursor-pointer hover:-translate-y-1 w-full h-full">
                <span className="font-bold text-[#33AAA1] text-lg flex items-center justify-center gap-2 text-center">And More...</span>
              </Link>
            </div>
          </div>
          <p className="text-slate-500 mt-12 max-w-2xl mx-auto text-lg">
            We actively partner with industry leaders, government agencies, and international research institutions to transition our academic prototypes into real-world applications.
          </p>
        </div>
      </section>
    </div>
  );
}