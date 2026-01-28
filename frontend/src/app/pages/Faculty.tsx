import { motion } from "motion/react";
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { facultyData, lecturersData, staffData } from '@/app/data/facultyData';

export function Faculty() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F172A] via-slate-900 to-[#0F172A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Faculty" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Faculty and Staff</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Meet our dedicated team of educators and researchers committed to your academic success and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Faculty Members</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Our faculty members are experts in their fields, dedicated to advancing knowledge and preparing the next generation of innovators.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyData.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Link to={`/faculty/${member.id}`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl hover:border-[#4CC9BF] transition-all cursor-pointer h-full">
                    <div className="bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] h-32" />
                    <div className="p-6 -mt-16">
                      <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg mb-4 flex items-center justify-center">
                        <User className="w-12 h-12 text-[#4CC9BF]" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                      <p className="text-[#4CC9BF] font-semibold mb-3">{member.position}</p>

                      {member.research.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-slate-900 mb-2">Research Interests:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.research.slice(0, 3).map((topic, i) => (
                              <span key={i} className="px-2 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">
                                {topic}
                              </span>
                            ))}
                            {member.research.length > 3 && (
                              <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                                +{member.research.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="border-t border-slate-200 pt-4">
                        <span className="text-sm text-[#4CC9BF] font-semibold hover:text-[#33AAA1]">
                          View Profile →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lecturers */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Lecturers</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Dedicated educators bringing practical expertise to the classroom.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {lecturersData.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="w-full max-w-sm"
              >
                <Link to={`/faculty/${member.id}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:border hover:border-[#4CC9BF] transition-all cursor-pointer h-full">
                    <div className="w-16 h-16 bg-[#4CC9BF]/20 rounded-full mb-4 flex items-center justify-center">
                      <User className="w-8 h-8 text-[#4CC9BF]" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-[#4CC9BF] font-semibold mb-4">{member.position}</p>
                    <span className="text-sm text-[#4CC9BF] font-semibold hover:text-[#33AAA1]">
                      View Profile →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Support Staff</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Our dedicated support staff ensuring smooth department operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {staffData.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm border border-slate-100"
              >
                <div className="w-16 h-16 bg-[#4CC9BF]/20 rounded-full mb-4 flex items-center justify-center">
                  <User className="w-8 h-8 text-[#4CC9BF]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-[#4CC9BF] font-semibold">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
