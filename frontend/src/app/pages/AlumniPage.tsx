import { motion } from "motion/react";
import { Search, ArrowLeft, Award, GraduationCap, BookOpen, Filter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Alumni() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedTrack, setSelectedTrack] = useState("all");

  // Alumni Data
  const alumniData = [
    // 2023 Graduates
    {
      name: "Carlos Miguel Santos",
      year: 2023,
      track: "Embedded Systems",
      awards: ["Magna Cum Laude", "Best Thesis Award"],
      thesis: "Real-Time Object Detection for Autonomous Vehicles Using Edge Computing",
      presentation: "IEEE International Conference on Embedded Systems 2023"
    },
    {
      name: "Maria Isabella Reyes",
      year: 2023,
      track: "IoT",
      awards: ["Cum Laude", "Outstanding Research Award"],
      thesis: "Smart Energy Management System for Sustainable Buildings",
      presentation: "ASEAN IoT Innovation Summit 2023"
    },
    {
      name: "Joshua David Tan",
      year: 2023,
      track: "Embedded Systems",
      awards: ["Dean's Lister (All Semesters)"],
      thesis: "FPGA-Based Implementation of Digital Signal Processing Algorithms",
      presentation: "Philippine Engineering Conference 2023"
    },
    
    // 2022 Graduates
    {
      name: "Angela Grace Fernandez",
      year: 2022,
      track: "IoT",
      awards: ["Summa Cum Laude", "University Research Excellence Award"],
      thesis: "Cloud-Based Predictive Maintenance System for Industrial IoT Applications",
      presentation: "International Conference on Industrial IoT, Singapore 2022"
    },
    {
      name: "Rafael James Cruz",
      year: 2022,
      track: "Embedded Systems",
      awards: ["Magna Cum Laude", "Best Capstone Project"],
      thesis: "Low-Power Wireless Sensor Network for Environmental Monitoring",
      presentation: "Asia-Pacific Wireless Communications Symposium 2022"
    },
    {
      name: "Diana Marie Lopez",
      year: 2022,
      track: "IoT",
      awards: ["Cum Laude"],
      thesis: "Healthcare IoT Platform for Remote Patient Monitoring",
      presentation: "International Conference on Healthcare Technology 2022"
    },
    {
      name: "Vincent Carl Mendoza",
      year: 2022,
      track: "Embedded Systems",
      awards: ["Chancellor's Lister"],
      thesis: "Embedded Vision System for Quality Control in Manufacturing",
      presentation: "Philippine Technology Conference 2022"
    },
    
    // 2021 Graduates
    {
      name: "Stephanie Rose Garcia",
      year: 2021,
      track: "IoT",
      awards: ["Summa Cum Laude", "National Best Thesis Award"],
      thesis: "AI-Powered Smart Agriculture System for Precision Farming",
      presentation: "International Conference on Agricultural Technology, Japan 2021"
    },
    {
      name: "Marcus Julius Villanueva",
      year: 2021,
      track: "Embedded Systems",
      awards: ["Magna Cum Laude"],
      thesis: "Real-Time Operating System for Mission-Critical Embedded Applications",
      presentation: "IEEE Real-Time Systems Symposium 2021"
    },
    {
      name: "Christine Joy Aquino",
      year: 2021,
      track: "IoT",
      awards: ["Cum Laude", "Innovation Award"],
      thesis: "Smart City Traffic Management Using IoT and Machine Learning",
      presentation: "ASEAN Smart Cities Conference 2021"
    },
    {
      name: "Daniel Patrick Rodriguez",
      year: 2021,
      track: "Embedded Systems",
      awards: ["Dean's Lister"],
      thesis: "Hardware Acceleration of Neural Networks on FPGA",
      presentation: "International Conference on FPGA Technology 2021"
    },
    
    // 2020 Graduates
    {
      name: "Alexandra Nicole Torres",
      year: 2020,
      track: "IoT",
      awards: ["Magna Cum Laude", "Research Excellence Award"],
      thesis: "Blockchain-Based Security Framework for IoT Devices",
      presentation: "International Symposium on IoT Security, USA 2020"
    },
    {
      name: "Gabriel Antonio Ramos",
      year: 2020,
      track: "Embedded Systems",
      awards: ["Cum Laude"],
      thesis: "Autonomous Navigation System for Mobile Robots",
      presentation: "IEEE Robotics and Automation Conference 2020"
    },
    {
      name: "Michelle Anne Bautista",
      year: 2020,
      track: "IoT",
      awards: ["Outstanding Project Award"],
      thesis: "IoT-Based Flood Monitoring and Early Warning System",
      presentation: "Philippine Disaster Management Conference 2020"
    },
    
    // 2019 Graduates
    {
      name: "Francis Miguel Santiago",
      year: 2019,
      track: "Embedded Systems",
      awards: ["Summa Cum Laude", "University Medal"],
      thesis: "Advanced Driver Assistance System Using Embedded Vision",
      presentation: "International Conference on Automotive Technology, Germany 2019"
    },
    {
      name: "Isabella Marie Gomez",
      year: 2019,
      track: "IoT",
      awards: ["Magna Cum Laude"],
      thesis: "Smart Home Automation System with Voice Recognition",
      presentation: "Asia IoT Conference, Taiwan 2019"
    },
    {
      name: "Kenneth Paul Navarro",
      year: 2019,
      track: "Embedded Systems",
      awards: ["Cum Laude"],
      thesis: "Embedded Security Module for Critical Infrastructure",
      presentation: "International Conference on Cybersecurity 2019"
    }
  ];

  // Get unique years for filter
  const years = ["all", ...Array.from(new Set(alumniData.map(a => a.year))).sort((a, b) => b - a)];

  // Filter alumni based on search and filters
  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.thesis.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.awards.some(award => award.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesYear = selectedYear === "all" || alumni.year.toString() === selectedYear;
    const matchesTrack = selectedTrack === "all" || alumni.track === selectedTrack;
    
    return matchesSearch && matchesYear && matchesTrack;
  });

  // Group alumni by year
  const groupedAlumni = filteredAlumni.reduce((acc, alumni) => {
    if (!acc[alumni.year]) {
      acc[alumni.year] = [];
    }
    acc[alumni.year].push(alumni);
    return acc;
  }, {} as Record<number, typeof alumniData>);

  const sortedYears = Object.keys(groupedAlumni).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F172A] via-slate-900 to-[#0F172A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Graduates" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/students" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Students
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni Directory</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Celebrating the achievements of our graduates who are making significant contributions to the tech industry worldwide.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">{alumniData.length}</div>
              <div className="text-slate-600 font-medium">Total Alumni</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">
                {alumniData.filter(a => a.awards.some(award => award.includes("Cum Laude"))).length}
              </div>
              <div className="text-slate-600 font-medium">Latin Honors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">{years.length - 1}</div>
              <div className="text-slate-600 font-medium">Graduating Batches</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">95%</div>
              <div className="text-slate-600 font-medium">Employed Within 6 Months</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white sticky top-0 z-30 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, thesis, or awards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent"
              />
            </div>

            {/* Year Filter */}
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none px-6 py-3 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent bg-white cursor-pointer"
              >
                <option value="all">All Years</option>
                {years.filter(y => y !== "all").map(year => (
                  <option key={year} value={year}>Class of {year}</option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Track Filter */}
            <div className="relative">
              <select
                value={selectedTrack}
                onChange={(e) => setSelectedTrack(e.target.value)}
                className="appearance-none px-6 py-3 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent bg-white cursor-pointer"
              >
                <option value="all">All Tracks</option>
                <option value="Embedded Systems">Embedded Systems</option>
                <option value="IoT">Internet of Things</option>
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-slate-600">
            Showing <span className="font-semibold text-slate-900">{filteredAlumni.length}</span> alumni
          </div>
        </div>
      </section>

      {/* Alumni List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedYears.length > 0 ? (
            <div className="space-y-12">
              {sortedYears.map((year) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-[#4CC9BF] text-white px-6 py-2 rounded-full font-bold text-lg">
                      Class of {year}
                    </div>
                    <div className="flex-1 h-px bg-slate-200 ml-4"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {groupedAlumni[Number(year)].map((alumni, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{alumni.name}</h3>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 bg-[#4CC9BF]/10 text-[#33AAA1] text-xs font-semibold rounded-full">
                                {alumni.track}
                              </span>
                              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                                {alumni.year}
                              </span>
                            </div>
                          </div>
                          <GraduationCap className="w-8 h-8 text-[#4CC9BF]" />
                        </div>

                        {/* Awards */}
                        {alumni.awards.length > 0 && (
                          <div className="mb-4">
                            <div className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                              <Award className="w-4 h-4 mr-2 text-yellow-600" />
                              Awards & Honors
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {alumni.awards.map((award, i) => (
                                <span key={i} className="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full border border-yellow-200">
                                  {award}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Thesis */}
                        <div className="mb-4">
                          <div className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                            <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                            Thesis
                          </div>
                          <p className="text-sm text-slate-600 italic leading-relaxed">
                            "{alumni.thesis}"
                          </p>
                        </div>

                        {/* Presentation */}
                        {alumni.presentation && (
                          <div className="pt-4 border-t border-slate-100">
                            <div className="text-xs font-semibold text-slate-500 mb-1">PRESENTED AT:</div>
                            <p className="text-sm text-slate-700">{alumni.presentation}</p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <GraduationCap className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No alumni found</h3>
              <p className="text-slate-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
