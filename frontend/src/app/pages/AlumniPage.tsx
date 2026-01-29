import { motion } from "motion/react";
import { Search, ArrowLeft, Award, GraduationCap, BookOpen, Filter } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAlumni } from "@/app/data/api";

export function Alumni() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedTrack, setSelectedTrack] = useState("all");
  const [alumniData, setAlumniData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Alumni Data
  useEffect(() => {
    const loadAlumni = async () => {
      try {
        const data = await fetchAlumni();
        setAlumniData(data);
      } catch (error) {
        console.error("Failed to fetch alumni", error);
      } finally {
        setLoading(false);
      }
    };
    loadAlumni();
  }, []);

  // Get unique years for filter
  const years = ["all", ...Array.from(new Set(alumniData.map(a => a.year))).sort((a: any, b: any) => b - a)];

  // Filter alumni based on search and filters
  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.thesis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (alumni.awards && alumni.awards.some((award: string) => award.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesYear = selectedYear === "all" || alumni.year.toString() === selectedYear;
    const matchesTrack = selectedTrack === "all" || alumni.track === selectedTrack;

    return matchesSearch && matchesYear && matchesTrack;
  });

  // Group alumni by year
  const groupedAlumni = filteredAlumni.reduce((acc, alumni) => {
    if (!acc[alumni.year]) {
      acc[alumni.year] = [];
    }
    acc[alumni.year].push(alumni);
    return acc;
  }, {} as Record<number, typeof alumniData>);

  const sortedYears = Object.keys(groupedAlumni).sort((a, b) => Number(b) - Number(a));

  // Helper to split alumni within a year into Grad and Undergrad
  const getGroupedByProgram = (alumniList: any[]) => {
    return {
      graduate: alumniList.filter(a => a.program_type === 'Graduate'),
      undergraduate: alumniList.filter(a => a.program_type !== 'Graduate') // Default to undergrad
    };
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F172A] via-slate-900 to-[#0F172A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Graduates"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/students" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Students
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni Directory</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Celebrating the achievements of our graduates who are making significant contributions to the tech industry worldwide.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">{alumniData.length}</div>
              <div className="text-slate-600 font-medium">Total Alumni</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">
                {alumniData.filter(a => a.awards && a.awards.some((award: string) => award.includes("Cum Laude"))).length}
              </div>
              <div className="text-slate-600 font-medium">Latin Honors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">{years.length > 1 ? years.length - 1 : 0}</div>
              <div className="text-slate-600 font-medium">Graduating Batches</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">95%</div>
              <div className="text-slate-600 font-medium">Employed Within 6 Months</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white sticky top-0 z-30 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, thesis, or awards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent"
              />
            </div>

            {/* Year Filter */}
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none px-6 py-3 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent bg-white cursor-pointer"
              >
                <option value="all">All Years</option>
                {years.filter(y => y !== "all").map(year => (
                  <option key={year} value={year}>Class of {year}</option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Track Filter */}
            <div className="relative">
              <select
                value={selectedTrack}
                onChange={(e) => setSelectedTrack(e.target.value)}
                className="appearance-none px-6 py-3 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent bg-white cursor-pointer"
              >
                <option value="all">All Tracks</option>
                <option value="Embedded Systems">Embedded Systems</option>
                <option value="IoT">Internet of Things</option>
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-slate-600">
            Showing <span className="font-semibold text-slate-900">{filteredAlumni.length}</span> alumni
          </div>
        </div>
      </section>

      {/* Alumni List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20 text-slate-500">Loading alumni...</div>
          ) : sortedYears.length > 0 ? (
            <div className="space-y-12">
              {sortedYears.map((year) => {
                const { graduate, undergraduate } = getGroupedByProgram(groupedAlumni[Number(year)]);

                return (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-[#4CC9BF] text-white px-6 py-2 rounded-full font-bold text-lg">
                        Class of {year}
                      </div>
                      <div className="flex-1 h-px bg-slate-200 ml-4"></div>
                    </div>

                    {/* Graduate Level Subsection */}
                    {graduate.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-slate-800 mb-4 pl-2 border-l-4 border-purple-500">Graduate Level</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          {graduate.map((alumni, idx) => (
                            <AlumniCard key={`${year}-grad-${idx}`} alumni={alumni} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Undergraduate Level Subsection */}
                    {undergraduate.length > 0 && (
                      <div className="mb-8">
                        {graduate.length > 0 && (<h4 className="text-xl font-bold text-slate-800 mb-4 pl-2 border-l-4 border-[#4CC9BF]">Undergraduate Level</h4>)}
                        <div className="grid md:grid-cols-2 gap-6">
                          {undergraduate.map((alumni, idx) => (
                            <AlumniCard key={`${year}-undergrad-${idx}`} alumni={alumni} />
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <GraduationCap className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No alumni found</h3>
              <p className="text-slate-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Extracted Card Component for reusability
function AlumniCard({ alumni }: { alumni: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{alumni.name}</h3>
          <div className="flex items-center gap-2 mb-3">
            {alumni.track && (
              <span className="px-3 py-1 bg-[#4CC9BF]/10 text-[#33AAA1] text-xs font-semibold rounded-full">
                {alumni.track}
              </span>
            )}
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
              {alumni.year}
            </span>
            {alumni.program_type === 'Graduate' && (
              <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-semibold rounded-full">
                Graduate
              </span>
            )}
          </div>
        </div>
        <GraduationCap className="w-8 h-8 text-[#4CC9BF]" />
      </div>

      {/* Awards */}
      {alumni.awards && alumni.awards.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center text-sm font-semibold text-slate-700 mb-2">
            <Award className="w-4 h-4 mr-2 text-yellow-600" />
            Awards & Honors
          </div>
          <div className="flex flex-wrap gap-2">
            {alumni.awards.map((award: string, i: number) => (
              <span key={i} className="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full border border-yellow-200">
                {award}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Thesis */}
      {alumni.thesis && (
        <div className="mb-4">
          <div className="flex items-center text-sm font-semibold text-slate-700 mb-2">
            <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
            Thesis
          </div>
          <p className="text-sm text-slate-600 italic leading-relaxed">
            "{alumni.thesis}"
          </p>
        </div>
      )}

      {/* Presentation */}
      {alumni.presentation && (
        <div className="pt-4 border-t border-slate-100">
          <div className="text-xs font-semibold text-slate-500 mb-1">PRESENTED AT:</div>
          <p className="text-sm text-slate-700">{alumni.presentation}</p>
        </div>
      )}
    </motion.div>
  );
}
