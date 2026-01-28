import { motion } from "motion/react";
import { BookOpen, Lightbulb, TrendingUp, Users, ArrowLeft, GraduationCap, Microscope } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function MSCA() {
  const [activeTab, setActiveTab] = useState("overview");

  const curriculum = {
    "Core Courses": [
      { code: "MSCA 201", title: "Advanced Research Methods in IT", units: 3 },
      { code: "MSCA 202", title: "Technology Management and Innovation", units: 3 },
      { code: "MSCA 203", title: "Advanced Statistics for Computing", units: 3 },
    ],
    "Specialization Courses": [
      { code: "MSCA 211", title: "Advanced Embedded Systems Design", units: 3 },
      { code: "MSCA 212", title: "IoT Architecture and Protocols", units: 3 },
      { code: "MSCA 213", title: "Cyber-Physical Systems", units: 3 },
      { code: "MSCA 214", title: "Data Analytics for IoT", units: 3 },
    ],
    "Capstone / Thesis": [
      { code: "MSCA 300", title: "Thesis Writing 1 (Proposal)", units: 3 },
      { code: "MSCA 301", title: "Thesis Writing 2 (Defense)", units: 3 },
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-[#0F172A] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#236c65] to-slate-900/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <Link to="/programs-admissions" className="inline-flex items-center text-[#77D6CE] hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Programs
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
             <span className="bg-[#33AAA1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Graduate School</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Master of Science in Computer Applications
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Elevate your expertise. A research-oriented program designed for professionals aiming to lead in the fields of IoT, embedded systems, and technology management.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {['Overview', 'Research', 'Curriculum'].map((tab) => (
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg text-slate-600">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Advancing Technical Leadership</h2>
                <p>
                  The Master of Science in Computer Applications (MSCA) is an advanced degree program that builds upon foundational computing knowledge. It is specifically tailored for individuals who wish to specialize in the cutting-edge intersections of hardware and software.
                </p>
                <p>
                  Our program goes beyond technical skills; it cultivates critical thinking, research capabilities, and the ability to manage complex technological projects. Graduates are prepared for senior roles in industry or for pursuing doctoral studies.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                   <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-3">
                         <Microscope className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900">Research Focused</h4>
                      <p className="text-sm text-slate-500">Contribute to the body of knowledge.</p>
                   </div>
                   <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-3">
                         <TrendingUp className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900">Industry Aligned</h4>
                      <p className="text-sm text-slate-500">Solve real-world industry problems.</p>
                   </div>
                </div>
              </div>
              <div className="relative">
                 <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Graduate Seminar" className="rounded-2xl shadow-xl w-full h-auto" />
                 <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                    <p className="text-slate-600 italic">"The MSCA program challenged me to think differently about technology. It wasn't just about how things work, but how to make them work better."</p>
                    <p className="text-slate-900 font-bold mt-2">- MSCA Alumni</p>
                 </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Research Tab */}
        {activeTab === 'research' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
             <div className="text-center max-w-3xl mx-auto mb-8">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Research Areas</h2>
               <p className="text-slate-600 text-lg">
                 Our faculty and graduate students are actively engaged in research that pushes the boundaries of computer applications.
               </p>
             </div>

             <div className="grid md:grid-cols-3 gap-6">
               <div className="bg-slate-900 text-white p-8 rounded-2xl">
                 <h3 className="text-xl font-bold mb-4 text-[#4CC9BF]">Smart Agriculture</h3>
                 <p className="text-slate-300 mb-6">
                   Developing IoT solutions for precision farming, automated irrigation systems, and crop monitoring using drone technology.
                 </p>
               </div>
               <div className="bg-slate-900 text-white p-8 rounded-2xl">
                 <h3 className="text-xl font-bold mb-4 text-[#4CC9BF]">Disaster Management</h3>
                 <p className="text-slate-300 mb-6">
                   Creating early warning systems and communication networks using embedded systems for disaster-prone areas.
                 </p>
               </div>
               <div className="bg-slate-900 text-white p-8 rounded-2xl">
                 <h3 className="text-xl font-bold mb-4 text-[#4CC9BF]">Industrial Automation</h3>
                 <p className="text-slate-300 mb-6">
                   Implementing Industry 4.0 concepts to optimize manufacturing processes and energy consumption.
                 </p>
               </div>
             </div>
          </motion.div>
        )}

        {/* Curriculum Tab */}
        {activeTab === 'curriculum' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Program Structure</h2>
            <div className="space-y-6">
              {Object.entries(curriculum).map(([category, subjects]) => (
                <div key={category} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                    <h3 className="font-bold text-slate-900 uppercase tracking-wide text-sm">{category}</h3>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {subjects.map((subject, idx) => (
                      <div key={idx} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div>
                          <span className="text-xs font-bold text-[#33AAA1] bg-[#4CC9BF]/10 px-2 py-1 rounded uppercase tracking-wide mr-3">{subject.code}</span>
                          <span className="font-medium text-slate-700">{subject.title}</span>
                        </div>
                        <div className="text-slate-500 text-sm">
                          {subject.units} Units
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
