import { Calendar, FileText, Phone, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdmissionsGrad() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#236c65] to-[#33AAA1] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link to="/admissions" className="text-[#77D6CE] hover:text-white transition-colors">
              ← Back to Admissions Overview
            </Link>
          </div>
          <h1 className="text-5xl font-bold mb-6">MSCA Graduate Admissions</h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            Advance your career with a Master of Science in Computer Applications. Learn about graduate program 
            admission requirements, application process, and important dates.
          </p>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Graduate Program Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#33AAA1]/10 to-white p-8 rounded-xl border-l-4 border-[#33AAA1]">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Academic Requirements</h3>
              <ul className="space-y-3">
                {[
                  'Bachelor\'s degree in Computer Science, IT, Engineering, or related field',
                  'Minimum GPA of 2.5 (or 85% equivalent)',
                  'Passing score in MSU graduate entrance examination',
                  'Strong background in programming and computer systems',
                  'English proficiency (TOEFL/IELTS for international students)'
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#33AAA1] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#33AAA1]/10 to-white p-8 rounded-xl border-l-4 border-[#33AAA1]">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Additional Requirements</h3>
              <ul className="space-y-3">
                {[
                  'Official transcripts of undergraduate records',
                  'Three letters of recommendation from faculty',
                  'Research proposal or statement of research interest',
                  'Curriculum vitae (CV) or resume',
                  'Interview with graduate admissions committee'
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#33AAA1] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Graduate Application Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#33AAA1]/20 hidden md:block" />
            <div className="space-y-12">
              {[
                { step: 1, title: 'Submit Online Application', desc: 'Complete the graduate application form through the MSU Graduate School portal.' },
                { step: 2, title: 'Submit Required Documents', desc: 'Upload transcripts, letters of recommendation, CV, and research proposal.' },
                { step: 3, title: 'Take Graduate Entrance Exam', desc: 'Schedule and take the MSU Graduate Entrance Examination (specific to your field).' },
                { step: 4, title: 'Faculty Interview', desc: 'Meet with the graduate admissions committee and potential thesis advisors.' },
                { step: 5, title: 'Receive Admission Decision', desc: 'Decisions are typically sent within 4-6 weeks after interview completion.' },
                { step: 6, title: 'Accept Offer & Enroll', desc: 'Confirm your acceptance and complete enrollment procedures.' },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#33AAA1] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 relative z-10 shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Graduate Program Deadlines</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'First Semester Intake', date: 'March 31, 2026', desc: 'Application deadline' },
              { title: 'Second Semester Intake', date: 'September 30, 2025', desc: 'Application deadline' },
              { title: 'Summer Term (if offered)', date: 'February 28, 2026', desc: 'Limited slots' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#33AAA1]/10 p-6 rounded-xl text-center">
                <Calendar className="w-10 h-10 text-[#33AAA1] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <div className="text-2xl font-bold text-[#33AAA1] mb-2">{item.date}</div>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-slate-600">
            <p className="text-sm">Note: Graduate program intake schedules may vary. Please contact the department for the most current information.</p>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Required Documents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Completed graduate application form',
              'Official transcripts of bachelor\'s degree',
              'Three letters of recommendation',
              'Research proposal (2-3 pages)',
              'Curriculum vitae (CV)',
              'Statement of purpose',
              'Birth certificate (PSA copy)',
              'Two 2x2 ID photos',
              'Certificate of Good Moral Character',
              'TOR (Transcript of Records)',
              'Diploma or Certificate of Graduation',
              'English proficiency test results (if applicable)',
            ].map((doc, idx) => (
              <div key={idx} className="flex items-start bg-white p-4 rounded-lg shadow">
                <FileText className="w-5 h-5 text-[#33AAA1] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition and Fees - Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Tuition and Fees</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#33AAA1]/10 to-white rounded-xl shadow-xl overflow-hidden border-2 border-[#33AAA1]/20">
              <div className="bg-gradient-to-r from-[#236c65] to-[#33AAA1] text-white p-8">
                <h3 className="text-2xl font-bold mb-2">Graduate Program Tuition Information</h3>
                <p className="text-[#77D6CE] text-sm">Master of Science in Computer Applications (MSCA)</p>
              </div>
              <div className="p-8">
                <div className="bg-[#33AAA1]/10 border-l-4 border-[#33AAA1] p-6 rounded-r-lg mb-6">
                  <p className="text-slate-700 mb-4">
                    <strong>Important Notice:</strong> Graduate programs (MS/MA/PhD) are <strong>not covered</strong> by the 
                    Universal Access to Quality Tertiary Education Act (RA 10931). Tuition and fees apply for graduate students.
                  </p>
                  <p className="text-slate-600 text-sm">
                    Graduate tuition fees are determined by the MSU System and may vary per semester based on the number of units enrolled.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-slate-200 rounded-lg p-6">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                      <Phone className="w-5 h-5 text-[#33AAA1] mr-2" />
                      Contact the Department
                    </h4>
                    <p className="text-slate-600 mb-4">
                      For detailed information about current tuition rates, fees, payment schedules, and available 
                      scholarships or financial assistance programs, please contact:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-[#33AAA1] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900">Email</p>
                          <a href="mailto:comapps@msuiit.edu.ph" className="text-[#33AAA1] hover:underline">
                            comapps@msuiit.edu.ph
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-[#33AAA1] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900">Phone</p>
                          <p className="text-slate-600">(063) 223-5521 local 1234</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-6">
                    <h4 className="font-bold text-slate-900 mb-3">Visit the University</h4>
                    <p className="text-slate-600 mb-2">
                      You may also visit the following offices for tuition inquiries:
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#33AAA1] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Computer Applications Department Office</strong> - For program-specific fees</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#33AAA1] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span><strong>MSU-IIT Graduate School</strong> - For general graduate student fees</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#33AAA1] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span><strong>Cashier's Office</strong> - For payment procedures and schedules</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships and Financial Aid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Scholarships & Financial Assistance</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Several scholarship and financial assistance programs are available for graduate students to help 
            support their studies.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">DOST-SEI Scholarship</h3>
              <p className="text-slate-600 mb-4">
                The Department of Science and Technology - Science Education Institute offers scholarships for 
                graduate students pursuing degrees in science and technology fields.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#33AAA1] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Full tuition coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#33AAA1] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Monthly stipend</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#33AAA1] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Book and thesis allowance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">CHED Faculty Development Program</h3>
              <p className="text-slate-600 mb-4">
                For faculty members of higher education institutions seeking to pursue graduate studies to 
                enhance their teaching qualifications.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#33AAA1] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tuition and miscellaneous fees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#33AAA1] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Living allowance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#33AAA1] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Research and thesis support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Graduate Assistantship</h3>
              <p className="text-slate-600 mb-4">
                Teaching or research assistantship positions may be available within the department, providing 
                tuition waivers and monthly stipends.
              </p>
              <p className="text-sm text-slate-600 italic">
                Contact the department for current availability and application procedures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Industry-Sponsored Scholarships</h3>
              <p className="text-slate-600 mb-4">
                Various technology companies and organizations offer scholarships for graduate students in 
                computer applications and related fields.
              </p>
              <p className="text-sm text-slate-600 italic">
                Check with the department for current industry partnership opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#236c65] to-[#33AAA1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl text-[#77D6CE] mb-8 max-w-2xl mx-auto">
            Take the next step in your graduate education journey with MSCA
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#33AAA1] rounded-lg font-semibold hover:bg-slate-50 transition-all shadow-xl"
            >
              Start Graduate Application
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#33AAA1]/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-[#33AAA1]/30 transition-all"
            >
              Contact Graduate School
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
