import {
  GraduationCap,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Admissions() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">
            Admissions
          </h1>
          <p className="text-xl text-[#FFFFFF] max-w-3xl">
            Begin your journey in Computer Applications at
            undergraduate or graduate level. Choose your path
            and learn about our admission requirements,
            application process, and important dates.
          </p>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Choose Your Academic Path
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The Computer Applications Department offers
              programs at both undergraduate and graduate
              levels. Select the program that matches your
              academic goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Undergraduate Program Card */}
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#4CC9BF]/20 hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] text-white p-8">
                <GraduationCap className="w-16 h-16 mb-4" />
                <h3 className="text-3xl font-bold mb-2">
                  Undergraduate
                </h3>
                <p className="text-[#77D6CE]">
                  Bachelor of Science in Computer Applications
                </p>
              </div>

              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">
                      4-year undergraduate degree program
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">
                      Specializations in IoT and Embedded
                      Systems
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">
                      100% FREE tuition under RA 10931 (SUC
                      Bill)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">
                      CHED-accredited curriculum
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">
                      Hands-on laboratory experience
                    </p>
                  </div>
                </div>

                <div className="bg-[#4CC9BF]/10 border-l-4 border-[#4CC9BF] p-4 rounded-r-lg mb-6">
                  <p className="text-sm font-semibold text-slate-900 mb-1">
                    Who Should Apply?
                  </p>
                  <p className="text-sm text-slate-600">
                    High school graduates or incoming college
                    students interested in pursuing a career in
                    computer applications, IoT, and embedded
                    systems.
                  </p>
                </div>

                <Link
                  to="/admissions/undergraduate"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  View BS Admissions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Graduate Program Card */}
            <div className="bg-gradient-to-br from-[#33AAA1]/10 to-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#33AAA1]/20 hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-r from-[#236c65] to-[#33AAA1] text-white p-8">
                <BookOpen className="w-16 h-16 mb-4" />
                <h3 className="text-3xl font-bold mb-2">
                  Graduate
                </h3>
                <p className="text-[#77D6CE]">
                  Master of Science in Computer Applications
                </p>
              </div>

              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#33AAA1] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">
                      Advanced graduate degree program
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#33AAA1] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">
                      Research-focused with thesis requirement
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#33AAA1] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">
                      Specialized coursework in advanced topics
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#33AAA1] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">
                      Faculty mentorship and collaboration
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#33AAA1] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">
                      Scholarship opportunities available
                    </p>
                  </div>
                </div>

                <div className="bg-[#33AAA1]/10 border-l-4 border-[#33AAA1] p-4 rounded-r-lg mb-6">
                  <p className="text-sm font-semibold text-slate-900 mb-1">
                    Who Should Apply?
                  </p>
                  <p className="text-sm text-slate-600">
                    Bachelor's degree holders in Computer
                    Applications, Computer Science, IT,
                    Engineering, or related fields seeking to
                    advance their expertise through graduate
                    studies and research.
                  </p>
                </div>

                <Link
                  to="/admissions/graduate"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#236c65] to-[#33AAA1] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  View MSCA Admissions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            General Admissions Information
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                For All Applicants
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#4CC9BF] rounded-full mt-2 mr-2 flex-shrink-0" />
                  <span>
                    Submit complete application documents
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#4CC9BF] rounded-full mt-2 mr-2 flex-shrink-0" />
                  <span>
                    Pass required entrance examinations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#4CC9BF] rounded-full mt-2 mr-2 flex-shrink-0" />
                  <span>
                    Meet minimum academic qualifications
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#4CC9BF] rounded-full mt-2 mr-2 flex-shrink-0" />
                  <span>Attend interviews if required</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                International Students
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#4CC9BF] rounded-full mt-2 mr-2 flex-shrink-0" />
                  <span>
                    English proficiency test (TOEFL/IELTS)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#4CC9BF] rounded-full mt-2 mr-2 flex-shrink-0" />
                  <span>
                    Authenticated academic credentials
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#4CC9BF] rounded-full mt-2 mr-2 flex-shrink-0" />
                  <span>Valid student visa</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#4CC9BF] rounded-full mt-2 mr-2 flex-shrink-0" />
                  <span>
                    Passport and immigration documents
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Need Help?
              </h3>
              <p className="text-slate-700 mb-4">
                Our admissions team is here to assist you with
                any questions about the application process.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-[#4CC9BF] hover:text-[#33AAA1] font-semibold"
              >
                Contact Admissions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-[#77D6CE] mb-8 max-w-2xl mx-auto">
            Explore our program-specific admissions pages to
            learn more about requirements and start your
            application.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions/undergraduate"
              className="inline-flex items-center px-8 py-4 bg-white text-[#33AAA1] rounded-lg font-semibold hover:bg-slate-50 transition-all shadow-xl"
            >
              BS Admissions
            </Link>
            <Link
              to="/admissions/graduate"
              className="inline-flex items-center px-8 py-4 bg-[#4CC9BF]/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-[#4CC9BF]/30 transition-all"
            >
              MSCA Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}