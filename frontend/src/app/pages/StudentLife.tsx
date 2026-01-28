import { Users, Calendar, Trophy, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function StudentLife() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Student Life</h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            Engage in vibrant student activities, organizations, and professional development opportunities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Student Organizations & Clubs</h2>
          
          {/* Department-Level Organization */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Computer Applications Department</h3>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg border-l-4 border-[#4CC9BF]">
                <Users className="w-12 h-12 text-[#4CC9BF] mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-3">Computer Applications Society</h4>
                <p className="text-slate-600">The governing student society of the program, representing all CA students and coordinating departmental activities and initiatives.</p>
              </div>
            </div>
          </div>

          {/* College-Level Organizations */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">College of Computer Studies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg">
                <Users className="w-12 h-12 text-[#4CC9BF] mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-3">College Student Council</h4>
                <p className="text-slate-600">The student government representing all students in the College of Computer Studies.</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg">
                <Trophy className="w-12 h-12 text-[#4CC9BF] mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-3">Motherboard</h4>
                <p className="text-slate-600">The official college publication, covering news, events, and stories from the College of Computer Studies community.</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg">
                <Briefcase className="w-12 h-12 text-[#4CC9BF] mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-3">Tesseract</h4>
                <p className="text-slate-600">A community for showcasing and upskilling ICT-related talents through workshops, projects, and collaborative learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1683319598210-d70486f2f996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3Njg5Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Events & Activities</h2>
              <div className="space-y-4">
                {[
                  { event: 'Annual Tech Fest', date: 'November', desc: 'Showcase student projects and innovations' },
                  { event: 'Hackathons', date: 'Quarterly', desc: '24-hour coding competitions with industry partners' },
                  { event: 'Industry Seminars', date: 'Monthly', desc: 'Guest speakers from leading tech companies' },
                  { event: 'Research Symposium', date: 'March', desc: 'Present research findings and capstone projects' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start bg-white p-4 rounded-lg shadow">
                    <Calendar className="w-6 h-6 text-[#4CC9BF] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-slate-900">{item.event}</h3>
                      <p className="text-sm text-[#4CC9BF] mb-1">{item.date}</p>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Internship & Industry Partnerships</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Industry Partners</h3>
              <ul className="space-y-3">
                {['Tech Solutions Inc.', 'IoT Innovations Corp.', 'Smart Systems Philippines', 'Digital Transformation Hub', 'Embedded Tech Solutions'].map((company, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <div className="w-10 h-10 bg-[#4CC9BF] rounded-lg mr-4 flex-shrink-0" />
                    <span className="font-semibold">{company}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Internship Programs</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Summer Internship</h4>
                  <p className="text-slate-600 text-sm">3-month program during summer break at partner companies</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">On-the-Job Training</h4>
                  <p className="text-slate-600 text-sm">600-hour practicum requirement in 4th year</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Industry Collaboration</h4>
                  <p className="text-slate-600 text-sm">Joint projects with tech companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}