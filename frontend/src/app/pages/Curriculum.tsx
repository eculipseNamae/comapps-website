import { BookOpen, Award, CheckCircle } from 'lucide-react';

export function Curriculum() {
  const courses = {
    year1: {
      sem1: [
        { code: 'GEC101', title: 'Understanding The Self', units: 3, type: 'GE' },
        { code: 'GEC104', title: 'Mathematics in the Modern World', units: 3, type: 'GE' },
        { code: 'MAT051', title: 'Calculus 1', units: 5, type: 'Major' },
        { code: 'BCA111', title: 'Fundamentals of Computer Applications 1', units: 3, type: 'Major' },
        { code: 'CCC100', title: 'Fundamentals of Computing', units: 3, type: 'Major' },
        { code: 'CCC101', title: 'Computer Programming 1', units: 3, type: 'Major' },
        { code: 'PED001', title: 'Exercise Prescription and Management', units: 2, type: 'PE' },
        { code: 'NST001', title: 'National Service Training Program 1', units: 3, type: 'NSTP' },
      ],
      sem2: [
        { code: 'GEC102', title: 'Purposive Communication', units: 3, type: 'GE' },
        { code: 'MAT061', title: 'Calculus 2', units: 5, type: 'Major', prereq: 'MAT051' },
        { code: 'BCA121', title: 'Fundamentals of Computer Applications 2', units: 3, type: 'Major' },
        { code: 'BCA122', title: 'Digital Techniques Fundamentals', units: 3, type: 'Major' },
        { code: 'BCA123', title: 'Basic Computer Instrumentation and Measurement', units: 3, type: 'Major' },
        { code: 'CCC102', title: 'Computer Programming 2', units: 3, type: 'Major', prereq: 'CCC101' },
        { code: 'PED002', title: 'Dance/Martial Arts', units: 2, type: 'PE', prereq: 'PED001' },
        { code: 'NST002', title: 'National Service Training Program 2', units: 3, type: 'NSTP', prereq: 'NST001' },
      ],
    },
    year2: {
      sem1: [
        { code: 'FIL101', title: 'Wika at Kultura sa Mapagpalaying Lipunan', units: 3, type: 'GE' },
        { code: 'MAT071', title: 'Calculus 3', units: 5, type: 'Major', prereq: 'MAT061' },
        { code: 'BCA131', title: 'Advanced Computer Circuits', units: 3, type: 'Major', prereq: 'BCA121' },
        { code: 'BCA132', title: 'Advanced Digital Techniques', units: 3, type: 'Major', prereq: 'BCA122' },
        { code: 'BCA133', title: 'Data Communication', units: 3, type: 'Major', prereq: 'BCA122' },
        { code: 'CCC121', title: 'Computer Structures and Algorithms', units: 3, type: 'Major', prereq: 'CCC102' },
        { code: 'PED003', title: 'Individual/Dual Sports/Traditional/Recreational Games', units: 2, type: 'PE', prereq: 'PED001' },
      ],
      sem2: [
        { code: 'FPE101', title: 'Fundamentals of Peace Education', units: 3, type: 'GE' },
        { code: 'BCA141', title: 'Computer Organization and Architecture', units: 4, type: 'Major', prereq: 'BCA122' },
        { code: 'MAT103', title: 'Discrete Mathematics', units: 3, type: 'Major' },
        { code: 'BCA143', title: 'Firmware Programming', units: 3, type: 'Major', prereq: 'CCC101' },
        { code: 'BCA144', title: 'Introduction to Internet of Things', units: 3, type: 'Major', prereq: 'CCC102' },
        { code: 'CCC151', title: 'Information Management', units: 3, type: 'Major' },
        { code: 'PED004', title: 'Team Sports', units: 2, type: 'PE', prereq: 'PED001' },
      ],
    },
    year3: {
      sem1: [
        { code: 'FIL102', title: 'Ekokritisismo at Pagpapalayang sa Pagsasalikasan', units: 3, type: 'GE' },
        { code: 'GEC106', title: 'Art Appreciation', units: 3, type: 'GE' },
        { code: 'ELEC1', title: 'Technical Elective 1', units: 3, type: 'Elective', note: 'As the course requires' },
        { code: 'BCA151', title: 'Introduction to Operating Systems', units: 3, type: 'Major', prereq: 'BCA141' },
        { code: 'BCA152', title: 'Microcontrollers', units: 3, type: 'Major', prereq: 'CCC102' },
        { code: 'BCA153', title: 'Computer Applications in Industry', units: 3, type: 'Major', prereq: 'BCA122' },
        { code: 'CCC181', title: 'Application Development and Emerging Technologies', units: 3, type: 'Major' },
      ],
      sem2: [
        { code: 'GEC103', title: 'The Contemporary World', units: 3, type: 'GE' },
        { code: 'GEC107', title: 'Ethics', units: 3, type: 'GE' },
        { code: 'GEC109', title: 'Life and Works of Rizal', units: 3, type: 'GE' },
        { code: 'BCA161', title: 'Numerical Methods for Computer Applications', units: 3, type: 'Major', prereq: 'MAT071' },
        { code: 'HIS003', title: 'History of Filipino Muslims and Indigenous Peoples - MINSUPALA', units: 3, type: 'GE' },
        { code: 'ELEC2', title: 'Technical Elective 2', units: 3, type: 'Elective', note: 'As the course requires' },
        { code: 'BCA198', title: 'Research Methods', units: 3, type: 'Major', prereq: 'CCC181' },
      ],
    },
    year4: {
      sem1: [
        { code: 'GEC108', title: 'Science, Technology and Society', units: 3, type: 'GE' },
        { code: 'GEC105', title: 'Readings in Philippine History', units: 3, type: 'GE' },
        { code: 'BCA172', title: 'Technopreneurship', units: 3, type: 'Major' },
        { code: 'ELEC3', title: 'Technical Elective 3', units: 3, type: 'Elective', note: 'As the course requires' },
        { code: 'ELEC4', title: 'Technical Elective 4', units: 3, type: 'Elective', note: 'As the course requires' },
        { code: 'BCA199', title: 'Undergraduate Thesis', units: 3, type: 'Major', prereq: 'BCA198' },
      ],
      sem2: [
        { code: 'BCA197', title: 'On-The-Job-Training', units: 6, type: 'Major', prereq: 'BCA198', hours: '40 hrs/week, 700hrs total' },
      ],
    },
  };

  const technicalElectives = {
    embedded: [
      { code: 'BCA180', title: 'Introduction of Computer Vision', units: 3, prereq: 'CCC102' },
      { code: 'BCA181', title: 'HDL Programming', units: 3, prereq: 'CCC102' },
      { code: 'BCA182', title: 'Embedded Systems Programming', units: 3, prereq: 'CCC102' },
      { code: 'BCA183', title: 'Digital Signal Processing', units: 3, prereq: 'CCC102' },
    ],
    iot: [
      { code: 'BCA188', title: 'Programming For Internet of Things', units: 3, prereq: 'CCC102' },
      { code: 'BCA189', title: 'Applied Internet of Things', units: 3, prereq: 'BCA144' },
      { code: 'BCA190', title: 'Artificial Intelligence in Internet of Things', units: 3, prereq: 'BCA144' },
      { code: 'BCA191', title: 'Fundamentals of Robotics Systems', units: 3, prereq: 'BCA144' },
    ],
  };

  const calculateSemesterUnits = (semester: any[]) => {
    return semester.reduce((sum, course) => {
      // NST courses are (3) units, not counted in total
      if (course.code.startsWith('NST')) return sum;
      return sum + course.units;
    }, 0);
  };

  const calculateYearUnits = (year: any) => {
    return calculateSemesterUnits(year.sem1) + calculateSemesterUnits(year.sem2);
  };

  const totalUnits = Object.values(courses).reduce((sum, year) => sum + calculateYearUnits(year), 0);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Curriculum</h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            Comprehensive 4-year program with {totalUnits} total units ({totalUnits + 6} including NSTP), combining theoretical foundations with practical specializations in IoT and Embedded Systems.
          </p>
          <p className="text-sm text-white/90 mt-4">
            Based on BOR Resolution No. 129, Series of 2018
          </p>
        </div>
      </section>

      {/* Degree Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg text-center">
              <BookOpen className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">147(153)</div>
              <div className="text-slate-600 font-semibold">Total Units</div>
            </div>
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg text-center">
              <Award className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">2</div>
              <div className="text-slate-600 font-semibold">Specializations</div>
            </div>
            <div className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg text-center">
              <CheckCircle className="w-12 h-12 text-[#4CC9BF] mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">CHED</div>
              <div className="text-slate-600 font-semibold">Accredited</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course List by Year */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Year */}
          <div className="mb-16">
            <div className="bg-[#4CC9BF] text-white p-6 rounded-t-xl">
              <h2 className="text-3xl font-bold">First Year</h2>
              <p className="text-[#77D6CE]">Total Units: {calculateYearUnits(courses.year1)}</p>
            </div>
            <div className="bg-white rounded-b-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {/* First Semester */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">First Semester ({calculateSemesterUnits(courses.year1.sem1)} units)</h3>
                  <div className="space-y-3">
                    {courses.year1.sem1.map((course, idx) => (
                      <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{course.code}</div>
                          <div className="text-sm text-slate-600">{course.title}</div>
                          <div className="flex gap-2 mt-1 flex-wrap">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              course.type === 'Major' ? 'bg-blue-100 text-blue-700' : 
                              course.type === 'GE' ? 'bg-green-100 text-green-700' : 
                              course.type === 'PE' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {course.type}
                            </span>
                          </div>
                        </div>
                        <div className="text-slate-900 font-semibold ml-4">
                          {course.code.startsWith('NST') ? `(${course.units})` : course.units}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Second Semester */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Second Semester ({calculateSemesterUnits(courses.year1.sem2)} units)</h3>
                  <div className="space-y-3">
                    {courses.year1.sem2.map((course, idx) => (
                      <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{course.code}</div>
                          <div className="text-sm text-slate-600">{course.title}</div>
                          <div className="flex gap-2 mt-1 flex-wrap">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              course.type === 'Major' ? 'bg-blue-100 text-blue-700' : 
                              course.type === 'GE' ? 'bg-green-100 text-green-700' : 
                              course.type === 'PE' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {course.type}
                            </span>
                            {course.prereq && (
                              <span className="inline-block px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
                                Prereq: {course.prereq}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-slate-900 font-semibold ml-4">
                          {course.code.startsWith('NST') ? `(${course.units})` : course.units}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Year */}
          <div className="mb-16">
            <div className="bg-[#33AAA1] text-white p-6 rounded-t-xl">
              <h2 className="text-3xl font-bold">Second Year</h2>
              <p className="text-[#77D6CE]">Total Units: {calculateYearUnits(courses.year2)}</p>
            </div>
            <div className="bg-white rounded-b-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">First Semester ({calculateSemesterUnits(courses.year2.sem1)} units)</h3>
                  <div className="space-y-3">
                    {courses.year2.sem1.map((course, idx) => (
                      <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{course.code}</div>
                          <div className="text-sm text-slate-600">{course.title}</div>
                          <div className="flex gap-2 mt-1 flex-wrap">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              course.type === 'Major' ? 'bg-blue-100 text-blue-700' : 
                              course.type === 'GE' ? 'bg-green-100 text-green-700' : 
                              course.type === 'PE' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {course.type}
                            </span>
                            {course.prereq && (
                              <span className="inline-block px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
                                Prereq: {course.prereq}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-slate-900 font-semibold ml-4">{course.units}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Second Semester ({calculateSemesterUnits(courses.year2.sem2)} units)</h3>
                  <div className="space-y-3">
                    {courses.year2.sem2.map((course, idx) => (
                      <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{course.code}</div>
                          <div className="text-sm text-slate-600">{course.title}</div>
                          <div className="flex gap-2 mt-1 flex-wrap">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              course.type === 'Major' ? 'bg-blue-100 text-blue-700' : 
                              course.type === 'GE' ? 'bg-green-100 text-green-700' : 
                              course.type === 'PE' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {course.type}
                            </span>
                            {course.prereq && (
                              <span className="inline-block px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
                                Prereq: {course.prereq}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-slate-900 font-semibold ml-4">{course.units}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Year */}
          <div className="mb-16">
            <div className="bg-[#4CC9BF] text-white p-6 rounded-t-xl">
              <h2 className="text-3xl font-bold">Third Year</h2>
              <p className="text-[#77D6CE]">Total Units: {calculateYearUnits(courses.year3)} • Technical Electives Begin</p>
            </div>
            <div className="bg-white rounded-b-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">First Semester ({calculateSemesterUnits(courses.year3.sem1)} units)</h3>
                  <div className="space-y-3">
                    {courses.year3.sem1.map((course, idx) => (
                      <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{course.code}</div>
                          <div className="text-sm text-slate-600">{course.title}</div>
                          <div className="flex gap-2 mt-1 flex-wrap">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              course.type === 'Elective' ? 'bg-purple-100 text-purple-700' :
                              course.type === 'Major' ? 'bg-blue-100 text-blue-700' : 
                              'bg-green-100 text-green-700'
                            }`}>
                              {course.type}
                            </span>
                            {course.prereq && (
                              <span className="inline-block px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
                                Prereq: {course.prereq}
                              </span>
                            )}
                          </div>
                          {course.note && (
                            <div className="text-xs text-slate-500 mt-1 italic">{course.note}</div>
                          )}
                        </div>
                        <div className="text-slate-900 font-semibold ml-4">{course.units}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Second Semester ({calculateSemesterUnits(courses.year3.sem2)} units)</h3>
                  <div className="space-y-3">
                    {courses.year3.sem2.map((course, idx) => (
                      <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{course.code}</div>
                          <div className="text-sm text-slate-600">{course.title}</div>
                          <div className="flex gap-2 mt-1 flex-wrap">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              course.type === 'Elective' ? 'bg-purple-100 text-purple-700' :
                              course.type === 'Major' ? 'bg-blue-100 text-blue-700' : 
                              'bg-green-100 text-green-700'
                            }`}>
                              {course.type}
                            </span>
                            {course.prereq && (
                              <span className="inline-block px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
                                Prereq: {course.prereq}
                              </span>
                            )}
                          </div>
                          {course.note && (
                            <div className="text-xs text-slate-500 mt-1 italic">{course.note}</div>
                          )}
                        </div>
                        <div className="text-slate-900 font-semibold ml-4">{course.units}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Year */}
          <div className="mb-16">
            <div className="bg-[#33AAA1] text-white p-6 rounded-t-xl">
              <h2 className="text-3xl font-bold">Fourth Year</h2>
              <p className="text-[#77D6CE]">Total Units: {calculateYearUnits(courses.year4)}</p>
            </div>
            <div className="bg-white rounded-b-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">First Semester ({calculateSemesterUnits(courses.year4.sem1)} units)</h3>
                  <div className="space-y-3">
                    {courses.year4.sem1.map((course, idx) => (
                      <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{course.code}</div>
                          <div className="text-sm text-slate-600">{course.title}</div>
                          <div className="flex gap-2 mt-1 flex-wrap">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              course.type === 'Elective' ? 'bg-purple-100 text-purple-700' :
                              course.type === 'Major' ? 'bg-blue-100 text-blue-700' : 
                              'bg-green-100 text-green-700'
                            }`}>
                              {course.type}
                            </span>
                            {course.prereq && (
                              <span className="inline-block px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
                                Prereq: {course.prereq}
                              </span>
                            )}
                          </div>
                          {course.note && (
                            <div className="text-xs text-slate-500 mt-1 italic">{course.note}</div>
                          )}
                        </div>
                        <div className="text-slate-900 font-semibold ml-4">{course.units}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Second Semester ({calculateSemesterUnits(courses.year4.sem2)} units)</h3>
                  <div className="space-y-3">
                    {courses.year4.sem2.map((course, idx) => (
                      <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{course.code}</div>
                          <div className="text-sm text-slate-600">{course.title}</div>
                          <div className="flex gap-2 mt-1 flex-wrap">
                            <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                              {course.type}
                            </span>
                            {course.prereq && (
                              <span className="inline-block px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
                                Prereq: {course.prereq}
                              </span>
                            )}
                          </div>
                          {course.hours && (
                            <div className="text-xs text-slate-500 mt-1 italic">{course.hours}</div>
                          )}
                        </div>
                        <div className="text-slate-900 font-semibold ml-4">{course.units}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Electives */}
          <div>
            <div className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white p-6 rounded-t-xl">
              <h2 className="text-3xl font-bold">Suggested Technical Elective Subjects</h2>
              <p className="text-[#77D6CE]">Choose electives based on your track specialization</p>
            </div>
            <div className="bg-white rounded-b-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {/* Embedded Systems Track */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">A. Embedded Systems Track</h3>
                  <div className="space-y-3">
                    {technicalElectives.embedded.map((course, idx) => (
                      <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{course.code}</div>
                          <div className="text-sm text-slate-600">{course.title}</div>
                          {course.prereq && (
                            <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
                              Prereq: {course.prereq}
                            </span>
                          )}
                        </div>
                        <div className="text-slate-900 font-semibold ml-4">{course.units}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* IoT Track */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">B. Internet of Things (IoT) Track</h3>
                  <div className="space-y-3">
                    {technicalElectives.iot.map((course, idx) => (
                      <div key={idx} className="flex justify-between items-start p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{course.code}</div>
                          <div className="text-sm text-slate-600">{course.title}</div>
                          {course.prereq && (
                            <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
                              Prereq: {course.prereq}
                            </span>
                          )}
                        </div>
                        <div className="text-slate-900 font-semibold ml-4">{course.units}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Important Notes</h2>
          <div className="space-y-4">
            <div className="bg-[#4CC9BF]/10 border-l-4 border-[#4CC9BF] p-6 rounded-r-lg">
              <p className="text-slate-700 mb-4">
                <strong>Prerequisites:</strong> Many courses have prerequisites that must be completed before enrollment. Review the prerequisite tags carefully when planning your schedule.
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-slate-700 mb-2">
                <strong>NSTP Units:</strong> National Service Training Program courses (NST001, NST002) are shown with units in parentheses (3) as they are not counted toward the 147-unit program total, but are required for graduation.
              </p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <p className="text-slate-700 mb-2">
                <strong>Technical Electives:</strong> Students must select Technical Elective subjects based on their chosen track specialization (Embedded Systems or IoT). Consult with your adviser for proper track selection.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-slate-700 mb-2">
                <strong>On-The-Job Training:</strong> The final semester is dedicated to BCA197 (OJT), which requires 700 hours (40 hours per week) of practical industry experience. This must be completed after finishing BCA198 (Research Methods).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}