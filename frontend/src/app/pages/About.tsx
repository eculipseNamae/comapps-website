import image_143a3129593303e6dcd9081f0a4bb79591419a81 from 'figma:asset/143a3129593303e6dcd9081f0a4bb79591419a81.png';
import image_9c651c6941c1fe1149d524cd3d74781a936cd1ee from 'figma:asset/9c651c6941c1fe1149d524cd3d74781a936cd1ee.png';
import { Award, Target, Users, TrendingUp, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import bsImage from 'figma:asset/c99c2d0a7fd7efc97d3e8690664a35863071a999.png';
import deptImage from 'figma:asset/1750b6bfd40d7bd4e3e4bdf50ef8fe5e415065c0.png';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About the Programs</h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            Discover the BS and MS in Computer Applications programs at Mindanao State University - Iligan Institute of Technology, where innovation meets excellence in technology education.
          </p>
        </div>
      </section>

      {/* Department Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src={image_143a3129593303e6dcd9081f0a4bb79591419a81} alt="Department of Computer Applications" className="w-full h-auto" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Department of Computer Applications</h2>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-4">
                  The Department of Computer Applications (CA Dept.) leads the institute in the field of emerging technologies by providing students with the knowledge and technical skills needed for the Industry 4.0 Implementation, aligned with the current Information Technology Education (ITE) landscape.
                </p>
                <p>
                  With its expert faculty members specialized in; computer applications and interfacing (between software, firmware and hardware); related electronic circuit and analysis; computer networking; & computer hardware programming and development. The department aims and encourages students to apply their skills gained to develop research through the rapid advancement of technology.
                </p>
              </div>
            </div>
          </div>

          {/* BS Computer Applications Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Bachelor of Science in Computer Applications</h2>
              <div className="prose prose-lg text-slate-600">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Overview</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Understand the design & development of hardware devices and software programs through specialized skills in Embedded System and Internet of Things (IoT). To sharpen the mathematical analysis and produce patentable innovations to cater the demands of Information and Communication Technology (ICT) in helping to solve the emerging and future global problems.
                </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src={image_9c651c6941c1fe1149d524cd3d74781a936cd1ee} alt="BS Computer Applications" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* MSCA Program Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0ZSUyMHN0dWRlbnRzJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzY4OTY1MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Graduate Students"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Master of Science in Computer Applications (MSCA)</h2>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-4">
                  The Master of Science in Computer Applications is an advanced graduate program designed to deepen expertise in specialized areas of computer applications, IoT, and embedded systems.
                </p>
                <p className="mb-4">
                  The MSCA program emphasizes advanced research, thesis work, and specialized coursework that prepares students for leadership roles in industry, academia, and research institutions.
                </p>
                <p>
                  Graduate students work closely with faculty on cutting-edge research projects, publish in international conferences and journals, and contribute to the advancement of computer applications technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Objectives */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Program Philosophy</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe in fostering innovation, critical thinking, and ethical responsibility in technology development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#4CC9BF]/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#4CC9BF]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600">
                Striving for the highest standards in education and research.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#4CC9BF]/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#4CC9BF]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Collaboration</h3>
              <p className="text-slate-600">
                Building strong partnerships with industry and academia.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#4CC9BF]/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#4CC9BF]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600">
                Encouraging creative solutions to real-world problems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#4CC9BF]/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#4CC9BF]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity</h3>
              <p className="text-slate-600">
                Upholding ethical standards in all technological endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Educational Objectives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl border-l-4 border-[#4CC9BF]">
              <h3 className="text-xl font-bold text-slate-900 mb-4">PEO 1: Technical Competence</h3>
              <p className="text-slate-600">
                Graduates will demonstrate proficiency in computer applications, IoT systems, and embedded programming, applying theoretical knowledge to practical solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl border-l-4 border-[#4CC9BF]">
              <h3 className="text-xl font-bold text-slate-900 mb-4">PEO 2: Professional Development</h3>
              <p className="text-slate-600">
                Graduates will engage in continuous learning and professional growth, adapting to emerging technologies and industry trends.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl border-l-4 border-[#4CC9BF]">
              <h3 className="text-xl font-bold text-slate-900 mb-4">PEO 3: Leadership & Teamwork</h3>
              <p className="text-slate-600">
                Graduates will effectively communicate, collaborate in teams, and demonstrate leadership in multidisciplinary projects.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl border-l-4 border-[#4CC9BF]">
              <h3 className="text-xl font-bold text-slate-900 mb-4">PEO 4: Ethical Responsibility</h3>
              <p className="text-slate-600">
                Graduates will practice professional ethics, considering social impact and sustainability in technology development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Program Learning Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Apply knowledge of computing and mathematics to solve complex problems",
              "Design and implement IoT solutions for real-world applications",
              "Develop embedded systems with hardware-software integration",
              "Analyze and evaluate computer-based systems and applications",
              "Work effectively in diverse and multidisciplinary teams",
              "Communicate technical concepts clearly and professionally",
              "Recognize ethical and social responsibilities in technology",
              "Engage in lifelong learning and professional development",
              "Utilize contemporary tools and techniques in computing"
            ].map((outcome, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#4CC9BF] text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    {index + 1}
                  </div>
                  <p className="text-slate-700">{outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] rounded-2xl p-12 text-white text-center">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">CHED Accredited Program</h2>
            <p className="text-xl text-[#77D6CE] mb-6 max-w-2xl mx-auto">
              Our program is accredited by the Commission on Higher Education (CHED), ensuring quality education standards and recognition.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white text-[#33AAA1] rounded-lg font-semibold">
              Level III Accreditation
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Specialized Tracks</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-[#33AAA1] to-[#2A8F87] p-6">
                <h3 className="text-2xl font-bold text-white">A. Embedded Systems Track</h3>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Course Overview</h4>
                <p className="text-slate-600 mb-6">
                  The Embedded Systems Track introduces the students to the theories and technologies associated with the computer fundamental concepts, analysis of electronic circuit products, microcontroller-based hardware design and implementation of computer programs used in the industry.
                </p>
                
                <h4 className="text-lg font-bold text-slate-900 mb-3">Key Focus Areas</h4>
                <ul className="space-y-3 mb-6">
                  {[
                    'Microcontroller programming (ARM, AVR)',
                    'Real-time operating systems (RTOS)',
                    'Hardware-software interface design',
                    'Signal processing and control systems'
                  ].map((area, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-[#33AAA1] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{area}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-[#4CC9BF]" />
                  Career Possibilities
                </h4>
                <ul className="space-y-2">
                  {[
                    'Web / Desktop / Mobile-App Developer',
                    'Embedded Software Specialist / Developer',
                    'Computer Application Instructor (Embedded Track)',
                    'Microcontroller Design Programmer/Developer',
                    'Entrepreneur in ICT Industry',
                    'Technology Development Researcher',
                    'Computer Vision Specialist / Developer',
                    'Hardware Test Specialist'
                  ].map((career, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] p-6">
                <h3 className="text-2xl font-bold text-white">B. Internet of Things (IoT) Track</h3>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Course Overview</h4>
                <p className="text-slate-600 mb-6">
                  The Internet of Things (IoT) Track introduces the students to computer network theories and emerging technologies as well as designing applications (e.g data logging, data visualization and remote control automation) that can be used to communicate and exchange data with other devices and systems over the internet connectivity through cloud server.
                </p>
                
                <h4 className="text-lg font-bold text-slate-900 mb-3">Key Focus Areas</h4>
                <ul className="space-y-3 mb-6">
                  {[
                    'Sensor networks and data acquisition',
                    'Cloud computing and edge computing',
                    'Smart device development and protocols',
                    'IoT security and data analytics'
                  ].map((area, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{area}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-[#4CC9BF]" />
                  Career Possibilities
                </h4>
                <ul className="space-y-2">
                  {[
                    'IoT Systems Administrator',
                    'Internet of Things (IoT) Infrastructure Architect',
                    'Computer Application Instructor (IoT Track)',
                    'IoT Systems Technologist',
                    'Entrepreneur in ICT Industry',
                    'Technology Development Researcher',
                    'Network Engineer',
                    'Computer Support Specialist'
                  ].map((career, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Alumni Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[#4CC9BF] rounded-full mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Maria Santos</h3>
              <p className="text-[#4CC9BF] font-semibold mb-4">IoT Engineer, Tech Corp</p>
              <p className="text-slate-600">
                "The IoT specialization prepared me perfectly for my current role. The hands-on projects and industry exposure were invaluable."
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[#4CC9BF] rounded-full mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Juan Dela Cruz</h3>
              <p className="text-[#4CC9BF] font-semibold mb-4">Embedded Systems Developer, StartupX</p>
              <p className="text-slate-600">
                "The program's emphasis on embedded systems gave me the skills to land my dream job right after graduation."
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-[#4CC9BF] rounded-full mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Sarah Johnson</h3>
              <p className="text-[#4CC9BF] font-semibold mb-4">Research Fellow, MSU</p>
              <p className="text-slate-600">
                "The strong research foundation allowed me to pursue graduate studies and contribute to cutting-edge IoT research."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}