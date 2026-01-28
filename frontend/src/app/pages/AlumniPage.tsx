import { motion } from "motion/react";
import { Search, ArrowLeft, Award, GraduationCap, Briefcase, Linkedin, Filter } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { alumniAPI } from "../../services/api";

export function Alumni() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [alumniData, setAlumniData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await alumniAPI.getProfiles();
        setAlumniData(data || []);
      } catch (error) {
        console.error("Error fetching alumni profiles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Get unique years for filter
  const years = ["all", ...Array.from(new Set(alumniData.map(a => a.batch_year))).sort((a: any, b: any) => b - a)];

  // Filter alumni based on search and filters
  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.current_position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === "all" || alumni.batch_year.toString() === selectedYear;

    return matchesSearch && matchesYear;
  });

  // Group alumni by year
  const groupedAlumni = filteredAlumni.reduce((acc, alumni) => {
    if (!acc[alumni.batch_year]) {
      acc[alumni.batch_year] = [];
    }
    acc[alumni.batch_year].push(alumni);
    return acc;
  }, {} as Record<number, typeof alumniData>);

  const sortedYears = Object.keys(groupedAlumni).sort((a, b) => Number(b) - Number(a));

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

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
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">{alumniData.length}</div>
              <div className="text-slate-600 font-medium">Total Alumni</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">{years.length - 1}</div>
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
                placeholder="Search by name, company, or position..."
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
          {sortedYears.length > 0 ? (
            <div className="space-y-12">
              {sortedYears.map((year) => (
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

                  <div className="grid md:grid-cols-2 gap-6">
                    {groupedAlumni[Number(year)].map((alumni: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{alumni.name}</h3>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 bg-[#4CC9BF]/10 text-[#33AAA1] text-xs font-semibold rounded-full">
                                {alumni.degree}
                              </span>
                            </div>
                          </div>
                          {alumni.image ? (
                            <img src={alumni.image} alt={alumni.name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-100" />
                          ) : (
                            <GraduationCap className="w-12 h-12 text-[#4CC9BF]" />
                          )}
                        </div>

                        {/* Career Info */}
                        <div className="mb-4">
                          <div className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                            <Briefcase className="w-4 h-4 mr-2 text-blue-600" />
                            {alumni.current_position}
                          </div>
                          <p className="text-sm text-slate-600">
                            at <span className="font-semibold text-slate-800">{alumni.company}</span>
                          </p>
                        </div>

                        {/* Testimonial */}
                        {alumni.testimonial && (
                          <div className="mb-4 pt-4 border-t border-slate-100">
                            <p className="text-sm text-slate-600 italic">"{alumni.testimonial}"</p>
                          </div>
                        )}

                        {/* LinkedIn */}
                        {alumni.linkedin_url && (
                          <div className="pt-4 border-t border-slate-100 flex justify-end">
                            <a
                              href={alumni.linkedin_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-700"
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
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
