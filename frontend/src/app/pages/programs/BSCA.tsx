import { motion } from "motion/react";
import { BookOpen, Code, Cpu, Globe, Database, Shield, Layout, Server, Wifi, ArrowLeft, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function BSCA() {
  const [activeTab, setActiveTab] = useState("overview");

  // Curriculum Data from previous version
  const courses = {
    year1: {
      sem1: [
        { code: 'GEC101', title: 'Understanding The Self', units: 3, type: 'GE' },
        { code: 'GEC104', title: 'Mathematics in the Modern World', units: 3, type: 'GE' },
        { code: 'MAT051', title: 'Calculus 1', units: 5, type: 'Major' },
        { code: 'BCA111', title: 'Fundamentals of Computer Applications 1', units: 3, type: 'Major' },
        { code: 'CCC100', title: 'Fundamentals of Computing', units: 3, type: 'Major' },
        { code: 'CCC101', title: 'Computer Programming 1', units: 3, type: 'Major' },
        { code: 'PED001', title: 'Exercise Prescription and Management', units: 2, type: 'PE' },
        { code: 'NST001', title: 'National Service Training Program 1', units: 3, type: 'NSTP' },
      ],
      sem2: [
        { code: 'GEC102', title: 'Purposive Communication', units: 3, type: 'GE' },
        { code: 'MAT061', title: 'Calculus 2', units: 5, type: 'Major', prereq: 'MAT051' },
        { code: 'BCA121', title: 'Fundamentals of Computer Applications 2', units: 3, type: 'Major' },
        { code: 'BCA122', title: 'Digital Techniques Fundamentals', units: 3, type: 'Major' },
        { code: 'BCA123', title: 'Basic Computer Instrumentation and Measurement', units: 3, type: 'Major' },
        { code: 'CCC102', title: 'Computer Programming 2', units: 3, type: 'Major', prereq: 'CCC101' },
        { code: 'PED002', title: 'Dance/Martial Arts', units: 2, type: 'PE', prereq: 'PED001' },
        { code: 'NST002', title: 'National Service Training Program 2', units: 3, type: 'NSTP', prereq: 'NST001' },
      ],
    },
    year2: {
      sem1: [
        { code: 'FIL101', title: 'Wika at Kultura sa Mapagpalaying Lipunan', units: 3, type: 'GE' },
        { code: 'MAT071', title: 'Calculus 3', units: 5, type: 'Major', prereq: 'MAT061' },
        { code: 'BCA131', title: 'Advanced Computer Circuits', units: 3, type: 'Major', prereq: 'BCA121' },
        { code: 'BCA132', title: 'Advanced Digital Techniques', units: 3, type: 'Major', prereq: 'BCA122' },
        { code: 'BCA133', title: 'Data Communication', units: 3, type: 'Major', prereq: 'BCA122' },
        { code: 'CCC121', title: 'Computer Structures and Algorithms', units: 3, type: 'Major', prereq: 'CCC102' },
        { code: 'PED003', title: 'Individual/Dual Sports/Traditional/Recreational Games', units: 2, type: 'PE', prereq: 'PED001' },
      ],
      sem2: [
        { code: 'FPE101', title: 'Fundamentals of Peace Education', units: 3, type: 'GE' },
        { code: 'BCA141', title: 'Computer Organization and Architecture', units: 4, type: 'Major', prereq: 'BCA122' },
        { code: 'MAT103', title: 'Discrete Mathematics', units: 3, type: 'Major' },
        { code: 'BCA143', title: 'Firmware Programming', units: 3, type: 'Major', prereq: 'CCC101' },
        { code: 'BCA144', title: 'Introduction to Internet of Things', units: 3, type: 'Major', prereq: 'CCC102' },
        { code: 'CCC151', title: 'Information Management', units: 3, type: 'Major' },
        { code: 'PED004', title: 'Team Sports', units: 2, type: 'PE', prereq: 'PED001' },
      ],
    },
    year3: {
      sem1: [
        { code: 'FIL102', title: 'Ekokritisismo at Pagpapalayang sa Pagsasalikasan', units: 3, type: 'GE' },
        { code: 'GEC106', title: 'Art Appreciation', units: 3, type: 'GE' },
        { code: 'ELEC1', title: 'Technical Elective 1', units: 3, type: 'Elective', note: 'As the course requires' },
        { code: 'BCA151', title: 'Introduction to Operating Systems', units: 3, type: 'Major', prereq: 'BCA141' },
        { code: 'BCA152', title: 'Microcontrollers', units: 3, type: 'Major', prereq: 'CCC102' },
        { code: 'BCA153', title: 'Computer Applications in Industry', units: 3, type: 'Major', prereq: 'BCA122' },
        { code: 'CCC181', title: 'Application Development and Emerging Technologies', units: 3, type: 'Major' },
      ],
      sem2: [
        { code: 'GEC103', title: 'The Contemporary World', units: 3, type: 'GE' },
        { code: 'GEC107', title: 'Ethics', units: 3, type: 'GE' },
        { code: 'GEC109', title: 'Life and Works of Rizal', units: 3, type: 'GE' },
        { code: 'BCA161', title: 'Numerical Methods for Computer Applications', units: 3, type: 'Major', prereq: 'MAT071' },
        { code: 'HIS003', title: 'History of Filipino Muslims and Indigenous Peoples - MINSUPALA', units: 3, type: 'GE' },
        { code: 'ELEC2', title: 'Technical Elective 2', units: 3, type: 'Elective', note: 'As the course requires' },
        { code: 'BCA198', title: 'Research Methods', units: 3, type: 'Major', prereq: 'CCC181' },
      ],
    },
    year4: {
      sem1: [
        { code: 'GEC108', title: 'Science, Technology and Society', units: 3, type: 'GE' },
        { code: 'GEC105', title: 'Readings in Philippine History', units: 3, type: 'GE' },
        { code: 'BCA172', title: 'Technopreneurship', units: 3, type: 'Major' },
        { code: 'ELEC3', title: 'Technical Elective 3', units: 3, type: 'Elective', note: 'As the course requires' },
        { code: 'ELEC4', title: 'Technical Elective 4', units: 3, type: 'Elective', note: 'As the course requires' },
        { code: 'BCA199', title: 'Undergraduate Thesis', units: 3, type: 'Major', prereq: 'BCA198' },
      ],
      sem2: [
        { code: 'BCA197', title: 'On-The-Job-Training', units: 6, type: 'Major', prereq: 'BCA198', hours: '40 hrs/week, 700hrs total' },
      ],
    },
  };

  const technicalElectives = {
    embedded: [
      { code: 'BCA180', title: 'Introduction of Computer Vision', units: 3, prereq: 'CCC102' },
      { code: 'BCA181', title: 'HDL Programming', units: 3, prereq: 'CCC102' },
      { code: 'BCA182', title: 'Embedded Systems Programming', units: 3, prereq: 'CCC102' },
      { code: 'BCA183', title: 'Digital Signal Processing', units: 3, prereq: 'CCC102' },
    ],
    iot: [
      { code: 'BCA188', title: 'Programming For Internet of Things', units: 3, prereq: 'CCC102' },
      { code: 'BCA189', title: 'Applied Internet of Things', units: 3, prereq: 'BCA144' },
      { code: 'BCA190', title: 'Artificial Intelligence in Internet of Things', units: 3, prereq: 'BCA144' },
      { code: 'BCA191', title: 'Fundamentals of Robotics Systems', units: 3, prereq: 'BCA144' },
    ],
  };

  const calculateSemesterUnits = (semester: any[]) => {
    return semester.reduce((sum, course) => {
      // NST courses are (3) units, not counted in total
      if (course.code.startsWith('NST')) return sum;
      return sum + course.units;
    }, 0);
  };

  const calculateYearUnits = (year: any) => {
    return calculateSemesterUnits(year.sem1) + calculateSemesterUnits(year.sem2);
  };

  const totalUnits = Object.values(courses).reduce((sum, year) => sum + calculateYearUnits(year), 0);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-[#0F172A] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 to-slate-900/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/programs-admissions" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Programs
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            BS Computer Applications
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            A premier degree program integrating software engineering with hardware interfacing, focusing on Embedded Systems and IoT.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {['Overview', 'Tracks', 'Curriculum', 'Careers'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.toLowerCase()
                    ? 'border-[#4CC9BF] text-[#33AAA1]'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="prose prose-lg text-slate-600">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Program Overview</h2>
                <p>
                  The Bachelor of Science in Computer Applications (BSCA) is a four-year degree program designed to bridge the gap between computer science theory and practical application. Unlike traditional IT programs, BSCA places a strong emphasis on the intersection of hardware and software.
                </p>
                <p>
                  Students in this program dive deep into emerging technologies, learning how to design systems that interact with the physical world through sensors, actuators, and embedded controllers.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Program Goals</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Produce competent professionals in software and embedded systems development.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Foster innovation through research in IoT and automation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Equip students with entrepreneurial skills in the tech industry.</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Hardware Lab" className="rounded-xl shadow-lg w-full h-64 object-cover" />
                <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Coding" className="rounded-xl shadow-lg w-full h-64 object-cover translate-y-8" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Tracks Tab */}
        {activeTab === 'tracks' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
             <div className="text-center max-w-3xl mx-auto mb-12">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Specialized Tracks</h2>
               <p className="text-slate-600 text-lg">
                 Choose your path. Our program offers two distinct specializations designed to meet the demands of the modern tech landscape.
               </p>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
               {/* Embedded Systems Track */}
               <Link to="/programs/bsca/embedded-systems" className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all hover:border-[#4CC9BF] group cursor-pointer">
                 <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                   <Cpu className="w-8 h-8 text-blue-600" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">Embedded Systems</h3>
                 <p className="text-slate-600 mb-6">
                   Focuses on the design, development, and testing of computer systems embedded within other devices. Students learn low-level programming, circuit design, and real-time operating systems.
                 </p>
                 <div className="bg-slate-50 rounded-xl p-6">
                   <h4 className="font-semibold text-slate-900 mb-3">Key Topics:</h4>
                   <ul className="space-y-2 text-sm text-slate-600">
                     <li className="flex items-center"><Code className="w-4 h-4 mr-2 text-blue-500"/> Microcontroller Programming</li>
                     <li className="flex items-center"><Server className="w-4 h-4 mr-2 text-blue-500"/> RTOS & Firmware</li>
                     <li className="flex items-center"><Cpu className="w-4 h-4 mr-2 text-blue-500"/> FPGA & Logic Design</li>
                   </ul>
                 </div>
                 <div className="mt-6 text-[#4CC9BF] font-semibold flex items-center group-hover:text-[#33AAA1] transition-colors">
                   Learn More <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                 </div>
               </Link>

               {/* IoT Track */}
               <Link to="/programs/bsca/iot" className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all hover:border-[#4CC9BF] group cursor-pointer">
                 <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                   <Wifi className="w-8 h-8 text-teal-600" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">Internet of Things (IoT)</h3>
                 <p className="text-slate-600 mb-6">
                   Deals with connecting physical devices to the internet for data collection, analysis, and automation. Students explore sensor networks, cloud computing, and smart home/city technologies.
                 </p>
                 <div className="bg-slate-50 rounded-xl p-6">
                   <h4 className="font-semibold text-slate-900 mb-3">Key Topics:</h4>
                   <ul className="space-y-2 text-sm text-slate-600">
                     <li className="flex items-center"><Wifi className="w-4 h-4 mr-2 text-teal-500"/> Wireless Sensor Networks</li>
                     <li className="flex items-center"><Database className="w-4 h-4 mr-2 text-teal-500"/> Cloud Integration & Analytics</li>
                     <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-teal-500"/> IoT Security Protocols</li>
                   </ul>
                 </div>
                 <div className="mt-6 text-[#4CC9BF] font-semibold flex items-center group-hover:text-[#33AAA1] transition-colors">
                   Learn More <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                 </div>
               </Link>
             </div>
          </motion.div>
        )}

        {/* Curriculum Tab */}
        {activeTab === 'curriculum' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            
            {/* Degree Requirements Header */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg text-center border border-slate-100">
                <BookOpen className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
                <div className="text-4xl font-bold text-slate-900 mb-2">147<span className="text-lg text-slate-500 font-normal ml-1">(153)</span></div>
                <div className="text-slate-600 font-semibold">Total Units</div>
              </div>
              <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg text-center border border-slate-100">
                <Award className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
                <div className="text-4xl font-bold text-slate-900 mb-2">2</div>
                <div className="text-slate-600 font-semibold">Specializations</div>
              </div>
              <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg text-center border border-slate-100">
                <CheckCircle className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
                <div className="text-4xl font-bold text-slate-900 mb-2">CHED</div>
                <div className="text-slate-600 font-semibold">Accredited</div>
              </div>
            </div>

            <div className="space-y-16">
              {Object.entries(courses).map(([year, semesters]) => (
                <div key={year}>
                  <div className="bg-[#4CC9BF] text-white p-6 rounded-t-xl">
                    <h2 className="text-3xl font-bold capitalize">{year.replace('year', 'Year ')}</h2>
                    <p className="text-[#77D6CE]">Total Units: {calculateYearUnits(semesters)}</p>
                  </div>
                  <div className="bg-white rounded-b-xl shadow-lg overflow-hidden border border-slate-200">
                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                      {/* Semesters */}
                      {Object.entries(semesters).map(([sem, subjects]) => (
                        <div key={sem} className="p-6">
                          <h3 className="text-xl font-bold text-slate-900 mb-4 capitalize">
                            {sem === 'sem1' ? 'First Semester' : 'Second Semester'} ({calculateSemesterUnits(subjects)} units)
                          </h3>
                          <div className="space-y-3">
                            {subjects.map((course: any, idx: number) => (
                              <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                <div className="flex-1">
                                  <div className="font-semibold text-slate-900">{course.code}</div>
                                  <div className="text-sm text-slate-600">{course.title}</div>
                                  <div className="flex gap-2 mt-1 flex-wrap">
                                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                                      course.type === 'Major' ? 'bg-blue-100 text-blue-700' : 
                                      course.type === 'GE' ? 'bg-green-100 text-green-700' : 
                                      course.type === 'PE' ? 'bg-yellow-100 text-yellow-700' :
                                      course.type === 'Elective' ? 'bg-purple-100 text-purple-700' :
                                      'bg-slate-200 text-slate-700'
                                    }`}>
                                      {course.type}
                                    </span>
                                    {course.prereq && (
                                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
                                        Prereq: {course.prereq}
                                      </span>
                                    )}
                                  </div>
                                  {course.note && <div className="text-xs text-slate-500 mt-1 italic">{course.note}</div>}
                                  {course.hours && <div className="text-xs text-slate-500 mt-1 italic">{course.hours}</div>}
                                </div>
                                <div className="text-slate-900 font-semibold ml-4">
                                  {course.code.startsWith('NST') ? `(${course.units})` : course.units}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Electives */}
            <div className="mt-16">
              <div className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white p-6 rounded-t-xl">
                <h2 className="text-3xl font-bold">Suggested Technical Elective Subjects</h2>
                <p className="text-[#77D6CE]">Choose electives based on your track specialization</p>
              </div>
              <div className="bg-white rounded-b-xl shadow-lg overflow-hidden border border-slate-200">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                  {/* Embedded Systems Track */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">A. Embedded Systems Track</h3>
                    <div className="space-y-3">
                      {technicalElectives.embedded.map((course, idx) => (
                        <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{course.code}</div>
                            <div className="text-sm text-slate-600">{course.title}</div>
                            {course.prereq && (
                              <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
                                Prereq: {course.prereq}
                              </span>
                            )}
                          </div>
                          <div className="text-slate-900 font-semibold ml-4">{course.units}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* IoT Track */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">B. Internet of Things (IoT) Track</h3>
                    <div className="space-y-3">
                      {technicalElectives.iot.map((course, idx) => (
                        <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{course.code}</div>
                            <div className="text-sm text-slate-600">{course.title}</div>
                            {course.prereq && (
                              <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
                                Prereq: {course.prereq}
                              </span>
                            )}
                          </div>
                          <div className="text-slate-900 font-semibold ml-4">{course.units}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
             <div className="mt-16 space-y-4">
               <h2 className="text-2xl font-bold text-slate-900 mb-4">Important Notes</h2>
                <div className="bg-[#4CC9BF]/10 border-l-4 border-[#4CC9BF] p-6 rounded-r-lg">
                  <p className="text-slate-700">
                    <strong>Prerequisites:</strong> Many courses have prerequisites that must be completed before enrollment. Review the prerequisite tags carefully when planning your schedule.
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-slate-700">
                    <strong>NSTP Units:</strong> National Service Training Program courses (NST001, NST002) are shown with units in parentheses (3) as they are not counted toward the 147-unit program total, but are required for graduation.
                  </p>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <p className="text-slate-700">
                    <strong>Technical Electives:</strong> Students must select Technical Elective subjects based on their chosen track specialization (Embedded Systems or IoT). Consult with your adviser for proper track selection.
                  </p>
                </div>
             </div>

            <p className="mt-8 text-slate-500 text-sm italic text-center">
              Based on BOR Resolution No. 129, Series of 2018
            </p>
          </motion.div>
        )}

        {/* Careers Tab */}
        {activeTab === 'careers' && (
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             <h2 className="text-3xl font-bold text-slate-900 mb-8">Career Opportunities</h2>
             <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Embedded Software Engineer", icon: Code },
                  { title: "IoT Solutions Architect", icon: Globe },
                  { title: "Firmware Developer", icon: Cpu },
                  { title: "Systems Integrator", icon: Server },
                  { title: "Smart Home Automation Specialist", icon: Wifi },
                  { title: "Technical Consultant", icon: BookOpen }
                ].map((job, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#4CC9BF] hover:shadow-lg transition-all group">
                    <job.icon className="w-10 h-10 text-slate-400 group-hover:text-[#33AAA1] mb-4 transition-colors" />
                    <h3 className="font-bold text-slate-900">{job.title}</h3>
                  </div>
                ))}
             </div>
           </motion.div>
        )}

      </div>
    </div>
  );
}