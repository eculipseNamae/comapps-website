import { Users, Calendar, Target, Heart, Laptop, GraduationCap, BookOpen, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Extension() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Extension Programs</h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            Empowering communities through technology education, outreach initiatives, and collaborative partnerships.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mission in Community Service</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The Computer Applications Department is committed to extending its expertise beyond the classroom, 
              bringing technology education and innovation to communities throughout Mindanao and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-6 rounded-xl shadow-lg text-center">
              <Heart className="w-10 h-10 text-[#4CC9BF] mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Community Impact</h3>
              <p className="text-sm text-slate-600">Serving communities across Mindanao</p>
            </div>
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-6 rounded-xl shadow-lg text-center">
              <Users className="w-10 h-10 text-[#4CC9BF] mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Technology Education</h3>
              <p className="text-sm text-slate-600">Free training and workshops</p>
            </div>
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-6 rounded-xl shadow-lg text-center">
              <Target className="w-10 h-10 text-[#4CC9BF] mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Skills Development</h3>
              <p className="text-sm text-slate-600">Empowering through technical skills</p>
            </div>
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-6 rounded-xl shadow-lg text-center">
              <Lightbulb className="w-10 h-10 text-[#4CC9BF] mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Innovation</h3>
              <p className="text-sm text-slate-600">Fostering tech innovation locally</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Ongoing Extension Programs</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/3 relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Digital Literacy Training"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-[#4CC9BF]" />
                    <span className="text-sm text-[#4CC9BF] font-semibold">Ongoing • Quarterly Sessions</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Digital Literacy Training for Rural Communities</h3>
                  <p className="text-slate-600 mb-4">
                    Providing free basic computer literacy and internet safety training to underserved communities 
                    in Lanao del Norte. This program aims to bridge the digital divide and empower residents with 
                    essential technology skills for education and livelihood.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">Basic Computing</span>
                    <span className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">Internet Safety</span>
                    <span className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">Digital Tools</span>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>500+ Beneficiaries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      <span>12 Barangays Reached</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/3 relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="IoT Workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-[#4CC9BF]" />
                    <span className="text-sm text-[#4CC9BF] font-semibold">Ongoing • Monthly Sessions</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">IoT for Agriculture Workshop Series</h3>
                  <p className="text-slate-600 mb-4">
                    Training local farmers and agricultural workers on Internet of Things (IoT) applications in 
                    smart farming. Participants learn to use sensors, automation systems, and data analytics to 
                    improve crop yields and resource management.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">Smart Farming</span>
                    <span className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">IoT Sensors</span>
                    <span className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">Data Analytics</span>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>200+ Farmers Trained</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      <span>8 Municipalities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/3 relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Teacher Training"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-[#4CC9BF]" />
                    <span className="text-sm text-[#4CC9BF] font-semibold">Ongoing • Bi-Annual</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Technology Integration for Public School Teachers</h3>
                  <p className="text-slate-600 mb-4">
                    Comprehensive training program for public school teachers in Northern Mindanao on integrating 
                    technology into classroom instruction. Covers educational software, online learning platforms, 
                    and digital assessment tools.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">EdTech</span>
                    <span className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">Online Learning</span>
                    <span className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">Digital Assessment</span>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>350+ Teachers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      <span>25 Schools</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Completed Extension Programs</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Youth Coding Bootcamp 2025',
                date: 'January 2025',
                desc: 'Week-long intensive coding bootcamp for high school students, introducing Python programming and basic web development.',
                participants: '120 Students',
                icon: Laptop
              },
              {
                title: 'Women in Tech Workshop Series',
                date: 'October 2024',
                desc: 'Empowering women through technology education with workshops on programming, robotics, and entrepreneurship.',
                participants: '80 Women',
                icon: GraduationCap
              },
              {
                title: 'Senior Citizens Digital Workshop',
                date: 'September 2024',
                desc: 'Teaching senior citizens basic smartphone use, social media safety, and online government services.',
                participants: '60 Seniors',
                icon: Users
              },
              {
                title: 'Embedded Systems for Small Business',
                date: 'August 2024',
                desc: 'Training small business owners on using embedded systems for inventory management and automation.',
                participants: '45 Entrepreneurs',
                icon: BookOpen
              },
              {
                title: 'Robotics for Kids Summer Camp',
                date: 'May 2024',
                desc: 'Fun and educational robotics camp for elementary students, fostering early interest in technology and engineering.',
                participants: '150 Children',
                icon: Lightbulb
              },
              {
                title: 'Community Tech Support Drive',
                date: 'March 2024',
                desc: 'Free computer repair and technical support service for underserved communities, along with basic troubleshooting training.',
                participants: '200 Households',
                icon: Heart
              }
            ].map((program, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg border border-[#4CC9BF]/20">
                <div className="flex items-start justify-between mb-4">
                  <program.icon className="w-10 h-10 text-[#4CC9BF]" />
                  <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{program.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                <p className="text-slate-600 mb-4">{program.desc}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-[#4CC9BF]" />
                  <span className="text-[#33AAA1] font-semibold">{program.participants}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Upcoming Extension Programs</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4CC9BF] to-[#33AAA1] rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">AI & Machine Learning Workshop</h3>
              <p className="text-[#4CC9BF] font-semibold text-sm mb-4">March 2026</p>
              <p className="text-slate-600 mb-4">
                Introduction to artificial intelligence and machine learning for community members interested in 
                emerging technologies.
              </p>
              <div className="text-sm text-slate-500">
                Target: 100 participants
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4CC9BF] to-[#33AAA1] rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Smart City Technology Symposium</h3>
              <p className="text-[#4CC9BF] font-semibold text-sm mb-4">April 2026</p>
              <p className="text-slate-600 mb-4">
                Educational symposium on smart city technologies for local government officials and urban planners.
              </p>
              <div className="text-sm text-slate-500">
                Target: LGU Officials & Planners
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4CC9BF] to-[#33AAA1] rounded-lg flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Cybersecurity Awareness Campaign</h3>
              <p className="text-[#4CC9BF] font-semibold text-sm mb-4">May 2026</p>
              <p className="text-slate-600 mb-4">
                Region-wide campaign to educate communities about online security, privacy protection, and safe 
                internet practices.
              </p>
              <div className="text-sm text-slate-500">
                Target: General Public
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4CC9BF] to-[#33AAA1] rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mobile App Development Bootcamp</h3>
              <p className="text-[#4CC9BF] font-semibold text-sm mb-4">June 2026</p>
              <p className="text-slate-600 mb-4">
                Intensive 2-week bootcamp teaching mobile app development using React Native for aspiring developers.
              </p>
              <div className="text-sm text-slate-500">
                Target: 50 participants
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4CC9BF] to-[#33AAA1] rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Tech for Healthcare Initiative</h3>
              <p className="text-[#4CC9BF] font-semibold text-sm mb-4">July 2026</p>
              <p className="text-slate-600 mb-4">
                Partnership with rural health units to implement telemedicine systems and train healthcare workers 
                on digital health tools.
              </p>
              <div className="text-sm text-slate-500">
                Target: 20 Health Centers
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4CC9BF] to-[#33AAA1] rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Innovation Lab for Indigenous Communities</h3>
              <p className="text-[#4CC9BF] font-semibold text-sm mb-4">August 2026</p>
              <p className="text-slate-600 mb-4">
                Establishing technology learning centers in indigenous communities to preserve cultural heritage 
                through digital archiving.
              </p>
              <div className="text-sm text-slate-500">
                Target: Indigenous Groups
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Extension Program Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CC9BF] mb-2">2,500+</div>
              <div className="text-slate-600">Total Beneficiaries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CC9BF] mb-2">45+</div>
              <div className="text-slate-600">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CC9BF] mb-2">28</div>
              <div className="text-slate-600">Programs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CC9BF] mb-2">15</div>
              <div className="text-slate-600">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
          <p className="text-lg text-[#77D6CE] mb-8">
            Are you a community organization, local government unit, or NGO interested in partnering for technology 
            education and extension programs? We'd love to collaborate with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:extension@comapps.msuiit.edu.ph" 
              className="px-8 py-3 bg-white text-[#33AAA1] rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Contact Extension Office
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#33AAA1] transition-all"
            >
              Submit Program Proposal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
