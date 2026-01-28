import { motion } from "motion/react";
import { Award, Users, Lightbulb, Code, Trophy, ArrowRight, Medal, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { studentsAPI } from "../../services/api";

export function Students() {
  const [projects, setProjects] = useState<any[]>([]);
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, orgsData, achievementsData] = await Promise.all([
          studentsAPI.getProjects(),
          studentsAPI.getOrganizations(),
          studentsAPI.getAchievements(),
        ]);
        setProjects(projectsData || []);
        setOrganizations(orgsData || []);
        setAchievements(achievementsData || []);
      } catch (error) {
        console.error("Error fetching student data:", error);
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
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F172A] via-slate-900 to-[#0F172A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Students collaborating"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Life</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Empowering the next generation of innovators through excellence, collaboration, and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Student Overview</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Our students are the heart of the Computer Applications Department. From groundbreaking research to innovative projects,
              they continuously push the boundaries of technology and make meaningful contributions to society.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-2xl border border-slate-100 text-center"
            >
              <Users className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-slate-600 font-medium">Active Students</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-slate-100 text-center"
            >
              <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">95%</div>
              <div className="text-slate-600 font-medium">Employment Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-slate-100 text-center"
            >
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">{projects.length}+</div>
              <div className="text-slate-600 font-medium">Research Projects</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-slate-100 text-center"
            >
              <Star className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">1000+</div>
              <div className="text-slate-600 font-medium">Global Alumni</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Showcased Projects */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Student Projects</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Innovative capstone projects and research showcasing the talent and creativity of our students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div
                key={project.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="h-48 overflow-hidden bg-gray-200">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <Code className="w-12 h-12" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#4CC9BF]/10 text-[#33AAA1] text-xs font-semibold rounded-full">
                      Project
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                      {project.year_completed}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-slate-500 mb-2">MEMBERS:</div>
                    <div className="text-sm text-slate-700">
                      {project.students_involved}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* See All Projects Link */}
          <div className="text-center mt-12">
            <Link
              to="/students/projects"
              className="inline-flex items-center px-8 py-4 bg-[#4CC9BF] hover:bg-[#33AAA1] text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              See All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Academic Excellence</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Celebrating our outstanding students who have achieved academic distinction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={achievement.id || idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border-2 border-yellow-200 shadow-lg"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3 shrink-0">
                    <Medal className="w-5 h-5 text-yellow-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{achievement.title}</h3>
                    <p className="text-xs text-yellow-700 font-semibold">{achievement.date}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-2">{achievement.description}</p>
                <div className="text-sm font-semibold text-slate-900">
                  Recipient: {achievement.recipient}
                </div>
              </motion.div>
            ))}
            {achievements.length === 0 && (
              <div className="col-span-full text-center text-slate-500 italic">
                No achievements listed yet.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Student Organizations */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Student Organizations</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Join one of our vibrant student organizations to enhance your skills, build networks, and create lasting memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizations.map((org, idx) => (
              <motion.div
                key={org.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  {org.logo ? <img src={org.logo} alt={org.name} className="w-8 h-8" /> : <Users className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{org.name}</h3>
                <p className="text-sm text-slate-600 mb-2 line-clamp-3">{org.description}</p>
                <p className="text-xs text-slate-500">President: {org.president}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section Link */}
      <section className="py-16 bg-gradient-to-br from-[#0F172A] to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-[#4CC9BF] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Meet Our Accomplished Alumni</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Discover the success stories of our graduates who are making their mark in the tech industry worldwide.
            </p>
            <Link
              to="/students/alumni"
              className="inline-flex items-center px-8 py-4 bg-[#4CC9BF] hover:bg-[#33AAA1] text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              View Alumni Directory
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}