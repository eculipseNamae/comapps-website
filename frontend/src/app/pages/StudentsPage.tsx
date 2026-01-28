import { motion } from "motion/react";
import { Award, Users, Lightbulb, Code, Trophy, ArrowRight, Medal, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Students() {
  const [activeListTab, setActiveListTab] = useState("1st-year");

  // Student Projects
  const projects = [
    {
      title: "Smart Agriculture Monitoring System",
      students: ["Juan Dela Cruz", "Maria Santos"],
      track: "IoT",
      year: "4th Year",
      description: "An IoT-based system for real-time monitoring of soil moisture, temperature, and crop health using wireless sensors and cloud analytics.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Arduino", "MQTT", "Firebase", "React"]
    },
    {
      title: "Automated Home Security with Facial Recognition",
      students: ["Carlos Reyes", "Anna Lim"],
      track: "Embedded Systems",
      year: "4th Year",
      description: "A security system utilizing embedded cameras and machine learning for facial recognition to control access and monitor home security.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Raspberry Pi", "OpenCV", "Python", "TensorFlow"]
    },
    {
      title: "Traffic Flow Optimization using Edge Computing",
      students: ["Rafael Gomez", "Sofia Tan"],
      track: "IoT",
      year: "3rd Year",
      description: "An intelligent traffic management system that uses edge computing to process real-time traffic data and optimize signal timing.",
      image: "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Edge AI", "Computer Vision", "MQTT", "Node-RED"]
    }
  ];

  // Academic Listers by Year Level
  const listers = {
    "1st-year": {
      rizal: [
        { name: "John Michael Cruz", gwa: "1.00" },
        { name: "Angela Mae Santos", gwa: "1.05" }
      ],
      chancellor: [
        { name: "Patricia Reyes", gwa: "1.18" },
        { name: "Mark Anthony Dela Cruz", gwa: "1.22" },
        { name: "Clarissa Joy Gonzales", gwa: "1.25" }
      ],
      dean: [
        { name: "Joshua David Ramos", gwa: "1.35" },
        { name: "Maria Isabelle Lopez", gwa: "1.38" },
        { name: "Kenneth Paul Torres", gwa: "1.42" },
        { name: "Stephanie Ann Garcia", gwa: "1.45" }
      ]
    },
    "2nd-year": {
      rizal: [
        { name: "Alexandra Grace Lim", gwa: "1.02" }
      ],
      chancellor: [
        { name: "Francis Miguel Tan", gwa: "1.15" },
        { name: "Isabella Marie Cruz", gwa: "1.20" },
        { name: "Daniel Joseph Aquino", gwa: "1.28" }
      ],
      dean: [
        { name: "Samantha Rose Rivera", gwa: "1.32" },
        { name: "Gabriel Antonio Santos", gwa: "1.36" },
        { name: "Christine Mae Villanueva", gwa: "1.40" },
        { name: "Bryan Miguel Flores", gwa: "1.48" }
      ]
    },
    "3rd-year": {
      rizal: [
        { name: "Nicole Patricia Fernandez", gwa: "1.00" }
      ],
      chancellor: [
        { name: "Christian James Mendoza", gwa: "1.12" },
        { name: "Angelica Joy Bautista", gwa: "1.25" }
      ],
      dean: [
        { name: "Marcus Julius Santiago", gwa: "1.30" },
        { name: "Diana Rose Manalo", gwa: "1.38" },
        { name: "Rafael James Reyes", gwa: "1.45" },
        { name: "Kathleen Marie Castro", gwa: "1.50" }
      ]
    },
    "4th-year": {
      rizal: [],
      chancellor: [
        { name: "Vincent Carl Rodriguez", gwa: "1.15" },
        { name: "Michelle Anne Gomez", gwa: "1.22" }
      ],
      dean: [
        { name: "Adrian Miguel Torres", gwa: "1.32" },
        { name: "Jasmine Claire Navarro", gwa: "1.40" },
        { name: "Patrick James Diaz", gwa: "1.48" }
      ]
    }
  };

  // Student Organizations
  const organizations = [
    {
      name: "Computer Applications Society (CAS)",
      description: "The official student organization fostering academic excellence and camaraderie.",
      icon: Users,
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "MSU-IIT Developers' Guild",
      description: "A community of developers building innovative projects and competing in hackathons.",
      icon: Code,
      color: "bg-teal-100 text-teal-600"
    },
    {
      name: "Embedded Systems Club",
      description: "Focused on hardware-software integration and embedded systems innovation.",
      icon: Lightbulb,
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "IoT Innovation Lab",
      description: "Exploring the Internet of Things and smart device technologies.",
      icon: Award,
      color: "bg-green-100 text-green-600"
    }
  ];

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
              <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
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
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#4CC9BF]/10 text-[#33AAA1] text-xs font-semibold rounded-full">
                      {project.track}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-slate-500 mb-2">TEAM MEMBERS:</div>
                    <div className="text-sm text-slate-700">
                      {project.students.join(", ")}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
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

      {/* Academic Excellence - Listers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Academic Excellence</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Celebrating our outstanding students who have achieved academic distinction across all year levels.
            </p>
          </div>

          {/* Year Level Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["1st-year", "2nd-year", "3rd-year", "4th-year"].map((year) => (
              <button
                key={year}
                onClick={() => setActiveListTab(year)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeListTab === year
                    ? "bg-[#4CC9BF] text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {year.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </button>
            ))}
          </div>

          {/* Lists Display */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Rizal's List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border-2 border-yellow-200 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <Medal className="w-6 h-6 text-yellow-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Rizal's List</h3>
                  <p className="text-sm text-slate-600">GWA: 1.00 - 1.10</p>
                </div>
              </div>
              <div className="space-y-3">
                {listers[activeListTab as keyof typeof listers].rizal.length > 0 ? (
                  listers[activeListTab as keyof typeof listers].rizal.map((student, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-white rounded-lg border border-yellow-100">
                      <span className="font-semibold text-slate-900">{student.name}</span>
                      <span className="text-yellow-700 font-bold">{student.gwa}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-slate-500 py-4 italic">No listers this year</div>
                )}
              </div>
            </motion.div>

            {/* Chancellor's List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border-2 border-blue-200 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Chancellor's List</h3>
                  <p className="text-sm text-slate-600">GWA: 1.11 - 1.30</p>
                </div>
              </div>
              <div className="space-y-3">
                {listers[activeListTab as keyof typeof listers].chancellor.length > 0 ? (
                  listers[activeListTab as keyof typeof listers].chancellor.map((student, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-white rounded-lg border border-blue-100">
                      <span className="font-semibold text-slate-900">{student.name}</span>
                      <span className="text-blue-700 font-bold">{student.gwa}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-slate-500 py-4 italic">No listers this year</div>
                )}
              </div>
            </motion.div>

            {/* Dean's List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 border-2 border-teal-200 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Dean's List</h3>
                  <p className="text-sm text-slate-600">GWA: 1.31 - 1.50</p>
                </div>
              </div>
              <div className="space-y-3">
                {listers[activeListTab as keyof typeof listers].dean.length > 0 ? (
                  listers[activeListTab as keyof typeof listers].dean.map((student, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-white rounded-lg border border-teal-100">
                      <span className="font-semibold text-slate-900">{student.name}</span>
                      <span className="text-teal-700 font-bold">{student.gwa}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-slate-500 py-4 italic">No listers this year</div>
                )}
              </div>
            </motion.div>
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
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 ${org.color} rounded-lg flex items-center justify-center mb-4`}>
                  <org.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{org.name}</h3>
                <p className="text-sm text-slate-600">{org.description}</p>
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
              Explore their achievements, research publications, and career paths.
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