import { motion } from "motion/react";
import { Clock, Award, ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function BSECT() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-800 opacity-50 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10 grayscale" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/programs-admissions" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Programs
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-slate-700 text-slate-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Legacy Program</span>
              <span className="bg-red-900/50 text-red-200 border border-red-800/50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Closed for Admission</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-200">
              BS Electronics in Computer Technology
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              The foundational program that started it all. Honoring the history and the graduates who paved the way for modern computer applications.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-slate-400" />
                Program History
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  The Bachelor of Science in Electronics in Computer Technology (BS ECT) was one of the department's flagship offerings. It was designed to produce technicians and technologists capable of maintaining, troubleshooting, and repairing electronic and computer systems.
                </p>
                <p>
                  For many years, BS ECT graduates filled critical roles in the telecommunications, manufacturing, and IT support industries in the region. The curriculum combined solid electronics theory with hands-on computer hardware training.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-slate-400" />
                Evolution to BSCA
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  As technology evolved towards higher-level software integration and the Internet of Things, the department recognized the need to modernize its curriculum.
                </p>
                <p>
                  The BS ECT program was gradually phased out to make way for the <strong>Bachelor of Science in Computer Applications (BSCA)</strong>. This transition allowed the department to offer more advanced topics in programming, embedded systems, and network security, better aligning with Industry 4.0 standards.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
              <div className="flex items-start">
                 <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0" />
                 <div>
                   <h3 className="font-bold text-amber-800 mb-2">Important Notice</h3>
                   <p className="text-sm text-amber-700">
                     This program is no longer accepting new applicants. Prospective students interested in hardware and electronics should explore the <strong>BSCA Embedded Systems Track</strong>.
                   </p>
                   <Link to="/programs/bsca" className="inline-block mt-4 text-sm font-bold text-amber-800 underline hover:text-amber-900">
                     View BSCA Program
                   </Link>
                 </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Alumni Services</h3>
              <p className="text-sm text-slate-600 mb-4">
                Are you a graduate of BS ECT? We can assist you with transcript requests, certifications, and alumni networking.
              </p>
              <Link to="/contact" className="block w-full text-center py-2 px-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                Contact Registrar
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
