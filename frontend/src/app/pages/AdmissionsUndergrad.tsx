import { Calendar, FileText, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchAdmissionDeadlines } from '@/app/data/api';

export function AdmissionsUndergrad() {
  const [deadlines, setDeadlines] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDeadlines = async () => {
      try {
        const data = await fetchAdmissionDeadlines();
        const undergraduateDeadlines = data.filter((d: any) => d.category === 'Undergraduate');
        setDeadlines(undergraduateDeadlines);
      } catch (error) {
        console.error("Failed to load deadlines", error);
      } finally {
        setLoading(false);
      }
    };
    loadDeadlines();
  }, []);

  // Helper to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return 'TBA';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link to="/programs-admissions" className="text-[#77D6CE] hover:text-white transition-colors">
              ← Back to Programs & Admissions
            </Link>
          </div>
          <h1 className="text-5xl font-bold mb-6">BS Computer Applications Admissions</h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            Begin your undergraduate journey in Computer Applications with specializations in IoT and Embedded Systems.
            Learn about admission requirements, application process, and important dates.
          </p>
        </div>
      </section>

      {/* BS Admission Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">BS Computer Applications</h2>
          <h3 className="text-2xl font-bold text-[#4CC9BF] mb-12 text-center">Admission Requirements</h3>

          <div className="max-w-5xl mx-auto bg-slate-50 rounded-xl shadow-lg p-8 md:p-12">
            <ol className="space-y-8">
              {/* 1. SASE Cut-off Score */}
              <li>
                <div className="flex items-start">
                  <span className="text-2xl font-bold text-[#4CC9BF] mr-4 flex-shrink-0">1.</span>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">SASE Cut-off Score for Incoming Freshmen</h4>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start">
                        <span className="text-[#4CC9BF] mr-3 flex-shrink-0">○</span>
                        <span className="text-slate-700">
                          <span className="font-semibold">SASE Cut-Off Score: 85 or better</span> which will be determined by the Department.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4CC9BF] mr-3 flex-shrink-0">○</span>
                        <span className="text-slate-700">
                          In case the quota for a particular semester is not met, students with lower scores may be picked upon by the department or may be admitted.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* 2. Documentary Requirements */}
              <li>
                <div className="flex items-start">
                  <span className="text-2xl font-bold text-[#4CC9BF] mr-4 flex-shrink-0">2.</span>
                  <div className="flex-1">
                    <p className="text-slate-700">
                      The documentary requirements are prescribed by the <span className="font-semibold">Office of Admissions and Scholarship Administration (OASA)</span> and the <span className="font-semibold">Office of the Institute Registrar (OIR)</span>.
                    </p>
                  </div>
                </div>
              </li>

              {/* 3. Default Source of Input */}
              <li>
                <div className="flex items-start">
                  <span className="text-2xl font-bold text-[#4CC9BF] mr-4 flex-shrink-0">3.</span>
                  <div className="flex-1">
                    <p className="text-slate-700 mb-2">
                      The default source of input is the senior high school graduates from <span className="font-semibold">Science, Technology, Engineering, and Mathematics (STEM)</span> track in the K to 12 Basic Education Program. Graduates from other tracks such as <span className="font-semibold">Humanities, Education, and Social Science (HESS)</span>, <span className="font-semibold">Accountancy, Business, and Management (ABM)</span>, <span className="font-semibold">General Academic Strand (GAS)</span>, and <span className="font-semibold">Technical-Vocational-Livelihood (TVL)</span> shall take the necessary bridging courses required for the admission to the program.
                    </p>
                  </div>
                </div>
              </li>

              {/* 4. Transferees */}
              <li>
                <div className="flex items-start">
                  <span className="text-2xl font-bold text-[#4CC9BF] mr-4 flex-shrink-0">4.</span>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Transferees from Within and Other MSU Campuses</h4>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start">
                        <span className="text-[#4CC9BF] mr-3 flex-shrink-0">○</span>
                        <span className="text-slate-700">Transferees shall apply for admission in the Department.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4CC9BF] mr-3 flex-shrink-0">○</span>
                        <span className="text-slate-700">The transferee must have a <span className="font-semibold">GPA of 2.75 or better</span>.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* 5. Retention Policies */}
              <li>
                <div className="flex items-start">
                  <span className="text-2xl font-bold text-[#4CC9BF] mr-4 flex-shrink-0">5.</span>
                  <div className="flex-1">
                    <p className="text-slate-700">
                      <span className="font-semibold">Retention Policies:</span> The retention policies shall apply as prescribed by the MSU Board of Regents (BOR).
                    </p>
                  </div>
                </div>
              </li>

              {/* 6. Second Courser */}
              <li>
                <div className="flex items-start">
                  <span className="text-2xl font-bold text-[#4CC9BF] mr-4 flex-shrink-0">6.</span>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Second Courser:</h4>
                    <p className="text-slate-700 mb-3">
                      Students who are degree holders and who wish to seek admission to CCS shall observe/comply with the following:
                    </p>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start">
                        <span className="text-[#4CC9BF] mr-3 flex-shrink-0">○</span>
                        <span className="text-slate-700">
                          They will be given <span className="font-semibold">lower priority over transferees</span> since all courses in the CCS are quota courses and slots are limited.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4CC9BF] mr-3 flex-shrink-0">○</span>
                        <span className="text-slate-700">
                          Their TOR's shall be evaluated noting specifically, grades in <span className="font-semibold">mathematics, language, and science and ITE related subjects</span>.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4CC9BF] mr-3 flex-shrink-0">○</span>
                        <span className="text-slate-700">
                          <span className="font-semibold">Must pass the interview</span> conducted by the Chairman or the committee designated for this purpose.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ol>

            <div className="mt-12 bg-[#4CC9BF]/10 border-l-4 border-[#4CC9BF] p-6 rounded-r-lg">
              <p className="text-sm text-slate-700">
                <span className="font-semibold">Note:</span> All admission requirements and processes are subject to the policies and guidelines set by Mindanao State University - Iligan Institute of Technology and the MSU Board of Regents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Application Requirements</h2>

          {/* Important Notice */}
          <div className="max-w-4xl mx-auto mb-12 bg-[#4CC9BF]/10 border-l-4 border-[#4CC9BF] p-6 rounded-r-lg">
            <p className="text-slate-700 mb-2">
              Before you begin with your application, please be ready with an <strong>electronic or scanned copy</strong> (in JPEG, JPG, or PNG format and must not exceed <strong>500 kilobytes</strong> in size) of the following requirements for upload on the admissions portal.
            </p>
            <p className="text-[#4CC9BF] font-semibold text-sm">
              You may use a mobile phone to take a photo of a required document.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl border-l-4 border-[#4CC9BF]">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">For Graduating Senior High School Students</h3>
              <ul className="space-y-3">
                {[
                  'Recent ID picture (2x2, high resolution, white background)',
                  'Certified True Copy of Form 137 from Grade 9 to Grade 11',
                  'Grade 12 Report Card (with complete grades from 1st semester)',
                  'Certification from school stating your rank in Grade 11 class (optional)',
                  'Certificate of Grade Equivalency from DepEd (for foreign students)'
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#4CC9BF] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl border-l-4 border-[#4CC9BF]">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">For Senior High School Graduates</h3>
              <p className="text-sm text-slate-600 mb-4 italic">Who have not enrolled in a tertiary school or university</p>
              <ul className="space-y-3">
                {[
                  'Recent ID picture (2x2, high resolution, white background)',
                  'Certified True Copy of Form 137 until Grade 12',
                  'Certificate of Grade Equivalency from DepEd (for foreign students)',
                  'Original copy of Grade 12 card with name and school officials\' signature',
                  'Certification stating honor obtained upon graduation in Grade 12 (if applicable)'
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#4CC9BF] mr-3 flex-shrink-0 mt-0.5" />
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
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Application Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4CC9BF]/20 hidden md:block" />
            <div className="space-y-12">
              {[
                { step: 1, title: 'Submit Online Application', desc: 'Complete the online application form and upload required documents through our admissions portal.' },
                { step: 2, title: 'Take Entrance Exam', desc: 'Schedule and take the MSU entrance examination covering Mathematics, English, and General Knowledge.' },
                { step: 3, title: 'Submit Documents', desc: 'Submit all required documents including transcripts, recommendations, and certificates.' },
                { step: 4, title: 'Interview (if required)', desc: 'Selected applicants may be invited for an interview with the admissions committee.' },
                { step: 5, title: 'Receive Decision', desc: 'Admissions decisions are typically sent within 2-4 weeks after completing all requirements.' },
                { step: 6, title: 'Enrollment', desc: 'Accepted students must confirm enrollment by the deadline.' },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#4CC9BF] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 relative z-10 shadow-lg">
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
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Important Deadlines</h2>

          {loading ? (
            <div className="text-center text-slate-500 py-10">Loading deadlines...</div>
          ) : deadlines.length === 0 ? (
            <div className="text-center text-slate-500 py-10">No active deadlines posted at the moment.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deadlines.map((item, idx) => (
                <div key={idx} className="bg-[#4CC9BF]/10 p-6 rounded-xl text-center">
                  <Calendar className="w-10 h-10 text-[#4CC9BF] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <div className="text-2xl font-bold text-[#4CC9BF] mb-2">{formatDate(item.start_date)}</div>
                  {item.end_date && (
                    <div className="text-sm text-slate-500 mb-2 font-semibold">
                      until {formatDate(item.end_date)}
                    </div>
                  )}
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Required Documents</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
            <FileText className="w-16 h-16 text-[#4CC9BF] mx-auto mb-6" />
            <p className="text-lg text-slate-700 mb-6">
              For a complete and up-to-date list of required documents and specific submission requirements,
              please refer to the <span className="font-semibold text-[#4CC9BF]">MSU-IIT Admissions Office</span>.
            </p>
            <div className="bg-[#4CC9BF]/10 border-l-4 border-[#4CC9BF] p-4 rounded-r-lg text-left">
              <p className="text-sm text-slate-700">
                <span className="font-semibold">Contact:</span> Office of Admissions and Scholarship Administration (OASA) and
                Office of the Institute Registrar (OIR) for detailed documentary requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition and Fees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Tuition and Fees</h2>

          {/* RA 10931 Highlight */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] text-white p-8 rounded-xl shadow-xl">
              <div className="flex items-start gap-4">
                <Award className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">100% FREE Education under RA 10931</h3>
                  <p className="text-[#77D6CE] mb-4">
                    As a State University and College (SUC), MSU-IIT is covered by <strong>Republic Act 10931</strong>,
                    the Universal Access to Quality Tertiary Education Act. Filipino students enrolled in the BS Computer Applications
                    program enjoy <strong>completely FREE education</strong> with ALL fees covered by the government.
                  </p>
                  <div className="flex items-center gap-2 text-white/90">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Effective since Academic Year 2018-2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-[#4CC9BF] text-white p-6">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold">Complete Fee Coverage</h3>
                <p className="text-[#77D6CE] text-sm mt-2">ALL fees are FREE under RA 10931</p>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-700">Tuition Fee</span>
                    <span className="font-bold text-[#4CC9BF] text-xl">FREE</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-700">Other School Fees (OSF)</span>
                    <span className="font-bold text-[#4CC9BF] text-xl">FREE</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <div>
                      <span className="text-slate-700">Miscellaneous Fees</span>
                      <span className="block text-xs text-slate-500">ID, library, student services</span>
                    </div>
                    <span className="font-bold text-[#4CC9BF] text-xl">FREE</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <div>
                      <span className="text-slate-700">Laboratory Fees</span>
                      <span className="block text-xs text-slate-500">IoT & Embedded Systems labs</span>
                    </div>
                    <span className="font-bold text-[#4CC9BF] text-xl">FREE</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <div>
                      <span className="text-slate-700">Books & Materials</span>
                      <span className="block text-xs text-slate-500">Covered by government subsidy</span>
                    </div>
                    <span className="font-bold text-[#4CC9BF] text-xl">FREE</span>
                  </div>
                  <div className="flex justify-between items-center py-6 bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] px-6 rounded-lg mt-4 text-white">
                    <span className="text-xl font-bold">Total Cost per Semester</span>
                    <span className="text-3xl font-bold">₱0.00</span>
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-[#4CC9BF] mt-0.5 flex-shrink-0" />
                    <span>ALL tuition and school fees are covered by RA 10931 for qualified Filipino students</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-[#4CC9BF] mt-0.5 flex-shrink-0" />
                    <span>Laboratory fees for specialized IoT and Embedded Systems equipment are fully subsidized</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-[#4CC9BF] mt-0.5 flex-shrink-0" />
                    <span>Books and materials are provided through government subsidy programs</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-[#4CC9BF] mt-0.5 flex-shrink-0" />
                    <span>Students only need to cover personal expenses such as transportation and meals</span>
                  </div>
                </div>

                {/* Additional Info Box */}
                <div className="mt-6 bg-[#4CC9BF]/10 border-l-4 border-[#4CC9BF] p-6 rounded-r-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Who Qualifies for RA 10931?</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#4CC9BF] rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span>Filipino citizens enrolled in accredited undergraduate programs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#4CC9BF] rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span>Must not have an existing bachelor's degree</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#4CC9BF] rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span>Must maintain satisfactory academic progress</span>
                    </li>
                  </ul>
                </div>

                {/* Student Council Fees Notice */}
                <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                  <h4 className="font-bold text-slate-900 mb-3">Additional Student Organization Fees</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    While tuition and school fees are FREE under RA 10931, students are required to pay the following organizational fees:
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700 mb-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span><span className="font-semibold">College Student Council Fees</span> - Collected by the College-level student council</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span><span className="font-semibold">Society Fees</span> - Collected by the Society-level student council</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-600 italic">
                    The amounts for these fees will vary and will be officially announced through and during the respective General Assembly of each organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Additional Financial Assistance</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Beyond the FREE tuition provided by RA 10931, additional scholarship programs are available to cover
            other educational expenses such as books, materials, and living allowances.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Award className="w-12 h-12 text-[#4CC9BF] mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Academic Excellence Grants</h3>
              <p className="text-slate-600 mb-4">Merit-based grants for students with outstanding academic records (GPA 95% and above). Covers books, materials, and stipends.</p>
              <div className="text-[#4CC9BF] font-bold">₱15,000 - ₱25,000/semester</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Award className="w-12 h-12 text-[#4CC9BF] mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">DOST Scholarship</h3>
              <p className="text-slate-600 mb-4">Department of Science and Technology scholarship program with monthly allowances for STEM students pursuing technology fields.</p>
              <div className="text-[#4CC9BF] font-bold">₱7,000/month + book allowance</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Award className="w-12 h-12 text-[#4CC9BF] mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">CHED Scholarships</h3>
              <p className="text-slate-600 mb-4">Commission on Higher Education programs including TDP-TES, UniFAST, and other grants for qualified students.</p>
              <div className="text-[#4CC9BF] font-bold">Varies per program</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl text-[#77D6CE] mb-8 max-w-2xl mx-auto">
            Take the first step towards your future in Computer Applications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#33AAA1] rounded-lg font-semibold hover:bg-slate-50 transition-all shadow-xl"
            >
              Start Application
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#4CC9BF]/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-[#4CC9BF]/30 transition-all"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}