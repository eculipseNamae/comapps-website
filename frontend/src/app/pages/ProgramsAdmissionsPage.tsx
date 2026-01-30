import { motion } from "motion/react";
import { BookOpen, Cpu, GraduationCap, CheckCircle, ArrowRight, AlertCircle, Calendar, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export function ProgramsAdmissions() {
  const programs = [
    {
      title: "BS Computer Applications",
      degree: "Bachelor of Science",
      description: "A comprehensive undergraduate program focused on Embedded Systems and Internet of Things (IoT) technologies.",
      image: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      active: true,
      features: ["Embedded Systems Track", "Internet of Things (IoT) Track", "Software Development"],
      link: "/programs/bsca",
      admissionsLink: "/admissions/bsca"
    },
    {
      title: "MS Computer Applications",
      degree: "Master of Science",
      description: "An advanced degree program designed for professionals seeking to deepen their technical expertise and research capabilities.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      active: true,
      features: ["Advanced Algorithms", "Research Methodology", "Technology Management"],
      link: "/programs/msca",
      admissionsLink: "/admissions/msca"
    },
    {
      title: "BS Electronics in Computer Technology",
      degree: "Bachelor of Science",
      description: "A legacy program that pioneered the integration of hardware and software, producing graduates who shaped the regional tech landscape.",
      image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      active: false,
      features: ["Circuit Design", "Embedded Systems", "Hardware Troubleshooting"],
      link: "/programs/bsect"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-[#0F172A] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-slate-900/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              Programs & Admissions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-6">
              Discover our cutting-edge programs designed to equip you with the skills needed for the rapidly evolving digital world.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#admissions" className="px-6 py-3 bg-[#4CC9BF] text-white font-semibold rounded-lg hover:bg-[#33AAA1] transition-colors">
                Join Us
              </a>
              <a href="#programs" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-colors">
                View Programs
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Programs Section */}
      <section id="programs" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#33AAA1] font-semibold tracking-wider text-sm uppercase">Our Offerings</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Academic Programs</h2>
          </div>

          <div className="space-y-24">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-12 bg-white rounded-3xl p-4 lg:p-0 overflow-hidden shadow-lg border border-slate-100`}
              >
                <div className="lg:w-1/2 min-h-[300px] lg:min-h-[500px] relative rounded-2xl lg:rounded-none overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {!program.active && (
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-slate-700">
                      Legacy Program
                    </div>
                  )}
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-12">
                  <div className="mb-4">
                    <span className="text-[#33AAA1] font-bold text-sm tracking-wide uppercase">{program.degree}</span>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">{program.title}</h3>
                  </div>

                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {program.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#4CC9BF] mr-2" />
                      Key Focus Areas
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-slate-600 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    {program.active ? (
                      <div className="flex flex-wrap gap-4">
                        <Link
                          to={program.link}
                          className="inline-flex items-center px-6 py-3 bg-white border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          View Program Details
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        {program.admissionsLink && (
                          <Link
                            to={program.admissionsLink}
                            className="inline-flex items-center px-6 py-3 bg-[#4CC9BF] text-white font-semibold rounded-lg hover:bg-[#33AAA1] transition-colors shadow-md hover:shadow-lg"
                          >
                            <UserPlus className="mr-2 w-5 h-5" />
                            Get Admitted
                          </Link>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center text-slate-500 bg-slate-100 px-4 py-3 rounded-lg border border-slate-200">
                          <AlertCircle className="w-5 h-5 mr-2 text-slate-400" />
                          <span className="text-sm font-medium">This program is no longer offering admission.</span>
                        </div>
                        <Link
                          to={program.link}
                          className="inline-flex items-center text-[#33AAA1] font-semibold hover:text-[#236c65] transition-colors"
                        >
                          Read about this legacy program <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Preview Section */}
      <section id="admissions" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Admission to the Computer Applications Department is highly competitive. We look for students who demonstrate academic excellence, creativity, and a passion for technology.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-teal-900/50 rounded-lg text-[#4CC9BF]">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-white">Application Period</h3>
                    <p className="text-sm text-slate-400 mt-1">First Semester: April - June<br />Second Semester: November - December</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-teal-900/50 rounded-lg text-[#4CC9BF]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-white">Requirements</h3>
                    <p className="text-sm text-slate-400 mt-1">MSU-SASE Score, High School Report Card, Certificate of Good Moral Character</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link to="/contact" className="text-[#4CC9BF] font-semibold hover:text-white transition-colors flex items-center">
                  Contact Admissions Office <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#4CC9BF] rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="bg-slate-800 p-8 rounded-2xl relative border border-slate-700">
                <h3 className="text-xl font-bold mb-6">Application Steps</h3>
                <ol className="space-y-6">
                  <li className="flex items-center">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4CC9BF] text-slate-900 font-bold flex items-center justify-center mr-4">1</span>
                    <span className="text-slate-300">Take and pass the MSU SASE Examination</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4CC9BF] text-slate-900 font-bold flex items-center justify-center mr-4">2</span>
                    <span className="text-slate-300">Submit required documents online</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4CC9BF] text-slate-900 font-bold flex items-center justify-center mr-4">3</span>
                    <span className="text-slate-300">Attend the department interview</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4CC9BF] text-slate-900 font-bold flex items-center justify-center mr-4">4</span>
                    <span className="text-slate-300">Wait for the Notice of Admission</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
