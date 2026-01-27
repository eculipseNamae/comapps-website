import { FlaskConical, FileText, Award, Users } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Research() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Research and Projects</h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            Explore cutting-edge research and innovative student projects in IoT and Embedded Systems.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Featured Student Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Smart Agriculture Monitoring System', team: '4th Year IoT Group', desc: 'IoT-based system for real-time crop monitoring using sensors and machine learning', tech: ['Arduino', 'Sensors', 'Cloud'] },
              { title: 'Autonomous Delivery Robot', team: '4th Year Embedded Group', desc: 'Self-navigating robot for campus package delivery using computer vision', tech: ['Raspberry Pi', 'Python', 'OpenCV'] },
              { title: 'Smart Home Energy Manager', team: '3rd Year IoT Group', desc: 'Intelligent system for optimizing household energy consumption', tech: ['ESP32', 'Mobile App', 'AWS'] },
              { title: 'Medical Alert Wearable', team: '4th Year Embedded Group', desc: 'Wearable device for monitoring vital signs and emergency alerts', tech: ['STM32', 'BLE', 'React Native'] },
            ].map((project, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg">
                <FlaskConical className="w-10 h-10 text-[#4CC9BF] mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <div className="text-[#4CC9BF] font-semibold mb-4 text-sm">{project.team}</div>
                <p className="text-slate-600 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Faculty Research</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">IoT Security in Smart Cities</h3>
                  <p className="text-sm text-[#4CC9BF] mb-3">Dr. Maria Santos, Lead Researcher</p>
                  <p className="text-slate-600 text-sm">Investigating security protocols and encryption methods for large-scale IoT deployments in urban environments.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Real-Time Embedded Operating Systems</h3>
                  <p className="text-sm text-[#4CC9BF] mb-3">Dr. Juan Dela Cruz, Lead Researcher</p>
                  <p className="text-slate-600 text-sm">Development of lightweight RTOS for resource-constrained embedded devices.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Edge Computing for IoT</h3>
                  <p className="text-sm text-[#4CC9BF] mb-3">Dr. Sarah Johnson, Lead Researcher</p>
                  <p className="text-slate-600 text-sm">Optimizing data processing at the edge to reduce latency in IoT applications.</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763372278600-fd0b0997a7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJlZGRlZCUyMHN5c3RlbXMlMjBjaXJjdWl0c3xlbnwxfHx8fDE3NjkwNjQ5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Research"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Publications & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl text-center">
              <FileText className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">25+</div>
              <div className="text-slate-600">Published Papers</div>
              <p className="text-sm text-slate-500 mt-2">In international journals</p>
            </div>
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl text-center">
              <Award className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">10+</div>
              <div className="text-slate-600">Awards Won</div>
              <p className="text-sm text-slate-500 mt-2">National and international competitions</p>
            </div>
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl text-center">
              <Users className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-slate-600">Active Research Projects</div>
              <p className="text-sm text-slate-500 mt-2">Ongoing research initiatives</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Capstone Project Requirements</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Two-Semester Capstone Program</h3>
                <p className="text-[#77D6CE]">All students must complete a comprehensive capstone project demonstrating their skills in IoT or Embedded Systems.</p>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">First Semester (Capstone I)</h4>
                  <ul className="space-y-2">
                    {[
                      'Project proposal and design documentation',
                      'Literature review and feasibility study',
                      'System architecture and design',
                      'Preliminary implementation and testing',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-bold text-slate-900 mb-3">Second Semester (Capstone II)</h4>
                  <ul className="space-y-2">
                    {[
                      'Complete system implementation',
                      'Comprehensive testing and validation',
                      'Technical documentation and user manual',
                      'Final presentation and demonstration',
                      'Research paper submission',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}