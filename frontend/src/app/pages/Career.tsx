import { Briefcase, TrendingUp, Users, Award } from 'lucide-react';

export function Career() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Career Services</h1>
          <p className="text-xl text-slate-100 max-w-3xl">
            Prepare for a successful career with our comprehensive career development and placement support.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Career Paths</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'IoT Engineer', desc: 'Design and implement IoT solutions for smart devices and systems' },
              { title: 'Embedded Systems Developer', desc: 'Develop firmware and software for embedded devices' },
              { title: 'Software Engineer', desc: 'Create software applications and systems' },
              { title: 'Systems Architect', desc: 'Design complex system architectures and integrations' },
              { title: 'Technical Consultant', desc: 'Provide expert advice on technology solutions' },
              { title: 'Research & Development', desc: 'Innovate new technologies and solutions' },
            ].map((career, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-6 rounded-xl shadow-lg">
                <Briefcase className="w-10 h-10 text-[#4CC9BF] mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{career.title}</h3>
                <p className="text-slate-600 text-sm">{career.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Career Support Services</h2>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                { title: 'Resume Building', desc: 'Professional resume and portfolio workshops' },
                { title: 'Interview Prep', desc: 'Mock interviews and coaching sessions' },
                { title: 'Job Placement', desc: 'Direct connections to hiring companies' },
                { title: 'Career Counseling', desc: 'One-on-one career guidance and planning' },
              ].map((service, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-white/90">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}