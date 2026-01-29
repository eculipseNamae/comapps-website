import { motion } from "motion/react";
import { Search, Filter, ArrowLeft, Code, Award, Users, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchStudentProjects } from "@/app/data/api";

export function StudentProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedTrack, setSelectedTrack] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from API
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchStudentProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch student projects", error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  // Get unique values for filters
  const years = ["all", ...Array.from(new Set(projects.map(p => p.year)))];
  const semesters = ["all", ...Array.from(new Set(projects.map(p => p.semester))).sort().reverse()];

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.students && project.students.some((student: string) => student.toLowerCase().includes(searchTerm.toLowerCase()))) ||
      (project.technologies && project.technologies.some((tech: string) => tech.toLowerCase().includes(searchTerm.toLowerCase())));

    const matchesYear = selectedYear === "all" || project.year === selectedYear;
    const matchesTrack = selectedTrack === "all" || project.track === selectedTrack;
    const matchesType = selectedType === "all" || project.type === selectedType;

    return matchesSearch && matchesYear && matchesTrack && matchesType;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F172A] via-slate-900 to-[#0F172A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Students working on projects"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Projects</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Explore innovative capstone projects and research initiatives by Computer Applications students,
              showcasing cutting-edge solutions in IoT and Embedded Systems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">{projects.length}</div>
              <div className="text-slate-600 font-medium">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">
                {projects.filter(p => p.type === "Capstone").length}
              </div>
              <div className="text-slate-600 font-medium">Capstone Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">
                {projects.filter(p => p.awards.length > 0).length}
              </div>
              <div className="text-slate-600 font-medium">Award-Winning</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CC9BF] mb-2">2</div>
              <div className="text-slate-600 font-medium">Specialized Tracks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white sticky top-0 z-30 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by title, description, student name, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent"
              />
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap gap-4">
              {/* Year Level Filter */}
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="appearance-none px-6 py-3 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent bg-white cursor-pointer"
                >
                  <option value="all">All Year Levels</option>
                  {years.filter(y => y !== "all").map(year => (
                    <option key={year} value={year}>{year}</option>
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

              {/* Project Type Filter */}
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="appearance-none px-6 py-3 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CC9BF] focus:border-transparent bg-white cursor-pointer"
                >
                  <option value="all">All Types</option>
                  <option value="Capstone">Capstone</option>
                  <option value="Research">Research</option>
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-slate-600">
              Showing <span className="font-semibold text-slate-900">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <Code className="w-16 h-16 text-slate-300 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Loading projects...</h3>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-slate-100 flex flex-col"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="px-3 py-1 bg-[#4CC9BF]/10 text-[#33AAA1] text-xs font-semibold rounded-full">
                        {project.track}
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                        {project.year}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-600 mb-4 flex-1">{project.description}</p>

                    {/* Team Members */}
                    <div className="mb-4">
                      <div className="flex items-center text-xs font-semibold text-slate-500 mb-2">
                        <Users className="w-3 h-3 mr-1" />
                        TEAM MEMBERS:
                      </div>
                      <div className="text-sm text-slate-700">
                        {project.students.join(", ")}
                      </div>
                    </div>

                    {/* Semester */}
                    <div className="mb-4">
                      <div className="flex items-center text-xs text-slate-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.semester}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex items-center text-xs font-semibold text-slate-500 mb-2">
                        <Code className="w-3 h-3 mr-1" />
                        TECHNOLOGIES:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string, i: number) => (
                          <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Awards */}
                    {project.awards.length > 0 && (
                      <div className="pt-4 border-t border-slate-100">
                        <div className="flex items-center text-xs font-semibold text-slate-500 mb-2">
                          <Award className="w-3 h-3 mr-1 text-yellow-600" />
                          AWARDS:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.awards.map((award: string, i: number) => (
                            <span key={i} className="px-2 py-1 bg-yellow-50 text-yellow-700 text-xs rounded border border-yellow-200">
                              {award}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Code className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No projects found</h3>
              <p className="text-slate-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
