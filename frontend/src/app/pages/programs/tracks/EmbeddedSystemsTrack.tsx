import { motion } from "motion/react";
import { Cpu, Code, Server, ArrowLeft, Target, Eye, CheckCircle, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

export function EmbeddedSystemsTrack() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/programs/bsca" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to BSCA Program
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center mb-4"
          >
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
              <Cpu className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Embedded Systems Track</h1>
          </motion.div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Specializing in designing and developing computer systems embedded within larger devices and machinery.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Track Vision</h2>
              </div>
              <div className="prose prose-lg text-slate-600">
                <p className="text-lg leading-relaxed">
                  To be a leading center of excellence in Embedded Systems education in Mindanao, producing world-class engineers who design innovative hardware-software integrated solutions that drive technological advancement in Industry 4.0 and beyond.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Embedded Systems Development" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="order-2 md:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Circuit Board Design" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Track Mission</h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  The Embedded Systems Track is committed to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Provide comprehensive education in microcontroller programming, firmware development, and real-time operating systems.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Develop students' expertise in circuit design, FPGA programming, and hardware-software integration.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Foster innovation through hands-on laboratory work and industry-standard development tools.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Prepare graduates for careers in automotive, aerospace, medical devices, and consumer electronics industries.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goals and Objectives Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Track Goals & Objectives</h2>
            </div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Our comprehensive objectives ensure students master the essential competencies of embedded systems engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Goal 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900">Technical Mastery</h3>
              </div>
              <ul className="space-y-3 text-slate-600 ml-14">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Master low-level programming languages (C, C++, Assembly) for embedded applications.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Develop proficiency in microcontroller architectures (ARM, AVR, PIC).</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Understand real-time operating systems (RTOS) and their applications.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Gain expertise in hardware description languages (VHDL, Verilog) for FPGA programming.</span>
                </li>
              </ul>
            </motion.div>

            {/* Goal 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900">Design & Development</h3>
              </div>
              <ul className="space-y-3 text-slate-600 ml-14">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Design and prototype embedded systems from concept to implementation.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Integrate sensors, actuators, and communication interfaces with embedded controllers.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Implement power-efficient and resource-constrained system designs.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Apply digital signal processing techniques to embedded applications.</span>
                </li>
              </ul>
            </motion.div>

            {/* Goal 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900">Testing & Debugging</h3>
              </div>
              <ul className="space-y-3 text-slate-600 ml-14">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Utilize debugging tools (JTAG, oscilloscopes, logic analyzers) for system troubleshooting.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Perform hardware-in-the-loop (HIL) testing and simulation.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Verify system reliability, safety, and performance under real-world conditions.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Apply industry standards and best practices in embedded system validation.</span>
                </li>
              </ul>
            </motion.div>

            {/* Goal 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900">Industry Readiness</h3>
              </div>
              <ul className="space-y-3 text-slate-600 ml-14">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Demonstrate competence in industry-standard development environments and toolchains.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Understand embedded systems applications in automotive, medical, industrial, and consumer products.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Collaborate effectively in multidisciplinary teams on complex embedded projects.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Engage in continuous learning to adapt to emerging embedded technologies and methodologies.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Competencies Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Code className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Firmware Development</h3>
              <p className="text-blue-100">
                Expertise in writing efficient, reliable firmware for resource-constrained embedded devices using C/C++ and assembly language.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Server className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Real-Time Systems</h3>
              <p className="text-blue-100">
                Proficiency in designing and implementing real-time operating systems (RTOS) for time-critical applications.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Cpu className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Hardware Integration</h3>
              <p className="text-blue-100">
                Skills in interfacing software with physical components including sensors, actuators, and communication protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Master Embedded Systems?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Join the Embedded Systems track and become a skilled engineer capable of designing the next generation of smart devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/programs/bsca" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View Full Program
            </Link>
            <Link 
              to="/admissions/bsca" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Admission Requirements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
