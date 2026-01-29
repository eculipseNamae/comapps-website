import image_143a3129593303e6dcd9081f0a4bb79591419a81 from '@/assets/143a3129593303e6dcd9081f0a4bb79591419a81.png';
import { Award, Target, Users, TrendingUp, History, Eye, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl font-bold mb-6">About the Department</h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            The Computer Applications Department at MSU-IIT is dedicated to advancing technology through excellence in education, research, and innovation.
          </p>
        </div>
      </section>

      {/* Who We Are & Vision/Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Who We Are */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-[#4CC9BF]/10 rounded-lg">
                  <Users className="w-6 h-6 text-[#33AAA1]" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Who We Are</h2>
              </div>

              <div className="prose prose-lg text-slate-600 mb-12">
                <p className="mb-4 text-justify">
                  The Department of Computer Applications (CA Dept.) stands at the forefront of the institute's technological initiatives. We are committed to leading in the field of emerging technologies by providing students with the theoretical knowledge and practical technical skills necessary for Industry 4.0 implementation.
                </p>
                <p className="mb-4 text-justify">
                  Our curriculum and research initiatives are strictly aligned with the current Information Technology Education (ITE) landscape, ensuring our graduates are not just job-ready but are capable of driving innovation.
                </p>
                <p className="text-justify">
                  Our faculty is composed of experts specialized in computer applications, interfacing (bridging software, firmware, and hardware), electronic circuit analysis, computer networking, and hardware programming. Together, we foster an environment that encourages students to apply their skills in developing research that contributes to the rapid advancement of technology.
                </p>
              </div>

              {/* History - Nested here for better flow or separate column */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mt-8">
                <img src={image_143a3129593303e6dcd9081f0a4bb79591419a81} alt="Department Faculty and Staff" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end">
                  <p className="text-white p-6 font-medium">Empowering the next generation of tech leaders.</p>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="space-y-8">
              {/* Vision */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed italic">
                  "To be a center of excellence in computer applications and emerging technologies, producing globally competitive professionals who drive sustainable development and innovation."
                </p>
              </div>

              {/* Mission */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                </div>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Provide high-quality education in computer applications through innovative teaching and learning practices.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Conduct relevant research and extension activities that address societal needs and technological challenges.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Foster a culture of ethical responsibility, leadership, and lifelong learning among faculty, staff, and students.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#33AAA1] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center space-x-2 text-[#4CC9BF] font-semibold tracking-wider uppercase mb-4">
                <History className="w-5 h-5" />
                <span>Our Heritage</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">A Legacy of Innovation</h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  The Computer Applications Department traces its roots back to the pioneering days of technology education at MSU-IIT. Originally established to address the growing need for skilled technicians in electronics and computer technology, the department has evolved significantly over the decades.
                </p>
                <p>
                  From its humble beginnings offering certificate programs, the department expanded its curriculum to include the Bachelor of Science in Electronics and Computer Technology (BS ECT), a legacy program that produced countless industry leaders. Recognizing the shift towards software-hardware integration and the Fourth Industrial Revolution, the department successfully transitioned to offer the Bachelor of Science in Computer Applications (BSCA).
                </p>
                <p>
                  Today, we continue this tradition of adaptation and excellence by introducing specialized tracks in Embedded Systems and the Internet of Things (IoT), ensuring our curriculum remains at the cutting edge of technological progress.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Legacy Computer Lab"
                  className="rounded-2xl shadow-xl transform translate-y-8"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Modern Research Facility"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Department Philosophy</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our educational philosophy is grounded in the belief that technology should serve humanity. We strive to cultivate not just skilled technicians, but thoughtful innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#4CC9BF]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#33AAA1]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                We refuse to settle for mediocrity. Every lecture, laboratory session, and research project is an opportunity to achieve the highest standards of quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#4CC9BF]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#33AAA1]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Collaboration</h3>
              <p className="text-slate-600 leading-relaxed">
                Innovation doesn't happen in isolation. We build strong partnerships with industry leaders, alumni, and other academic institutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#4CC9BF]/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#33AAA1]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600 leading-relaxed">
                We challenge the status quo. We encourage our students to think creatively and develop novel solutions to real-world problems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#4CC9BF]/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-[#33AAA1]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity</h3>
              <p className="text-slate-600 leading-relaxed">
                We uphold the highest ethical standards. We teach our students that responsible technology use is just as important as technical proficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship & Industry Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Internship & Industry Partnerships</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#4CC9BF]/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Industry Partners</h3>
              <ul className="space-y-3">
                {['Tech Solutions Inc.', 'IoT Innovations Corp.', 'Smart Systems Philippines', 'Digital Transformation Hub', 'Embedded Tech Solutions'].map((company, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <div className="w-5 h-5 bg-[#4CC9BF] rounded-lg mr-4 flex-shrink-0" />
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

      {/* Footer Contact Teaser */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Connect With Us</h2>
          <p className="text-lg text-slate-600 mb-8">
            Do you have questions about our department, our history, or our vision for the future? We'd love to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
