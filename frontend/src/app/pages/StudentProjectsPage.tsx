import { motion } from "motion/react";
import { Search, Filter, ArrowLeft, Code, Award, Users, Calendar } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function StudentProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedTrack, setSelectedTrack] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  // Comprehensive Student Projects Data
  const projects = [
    // 4th Year Capstone Projects
    {
      title: "Smart Agriculture Monitoring System",
      students: ["Juan Dela Cruz", "Maria Santos"],
      track: "IoT",
      year: "4th Year",
      semester: "2023-2024",
      type: "Capstone",
      description: "An IoT-based system for real-time monitoring of soil moisture, temperature, and crop health using wireless sensors and cloud analytics. The system provides farmers with actionable insights through a mobile application.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Arduino", "MQTT", "Firebase", "React", "Node.js"],
      awards: ["Best Capstone Project 2024", "Innovation Award"]
    },
    {
      title: "Automated Home Security with Facial Recognition",
      students: ["Carlos Reyes", "Anna Lim"],
      track: "Embedded Systems",
      year: "4th Year",
      semester: "2023-2024",
      type: "Capstone",
      description: "A security system utilizing embedded cameras and machine learning for facial recognition to control access and monitor home security. Features real-time alerts and cloud-based surveillance storage.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Raspberry Pi", "OpenCV", "Python", "TensorFlow", "Flask"],
      awards: ["Presented at IEEE Conference 2024"]
    },
    {
      title: "Traffic Flow Optimization using Edge Computing",
      students: ["Rafael Gomez", "Sofia Tan", "Miguel Santos"],
      track: "IoT",
      year: "4th Year",
      semester: "2023-2024",
      type: "Capstone",
      description: "An intelligent traffic management system that uses edge computing to process real-time traffic data and optimize signal timing. Reduces congestion by 30% in test scenarios.",
      image: "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Edge AI", "Computer Vision", "MQTT", "Node-RED", "Python"],
      awards: ["Outstanding Research Award"]
    },
    {
      title: "Wearable Health Monitoring Device for Elderly Care",
      students: ["Patricia Cruz", "Daniel Reyes"],
      track: "Embedded Systems",
      year: "4th Year",
      semester: "2023-2024",
      type: "Capstone",
      description: "A low-power wearable device that monitors vital signs including heart rate, blood pressure, and fall detection. Automatically alerts caregivers in emergency situations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["ARM Cortex", "Bluetooth LE", "C/C++", "Mobile App", "Cloud"],
      awards: ["Healthcare Innovation Award"]
    },

    // 3rd Year Research Projects
    {
      title: "Blockchain-Based Supply Chain Tracking System",
      students: ["Jasmine Flores", "Kenneth Torres"],
      track: "IoT",
      year: "3rd Year",
      semester: "2023-2024",
      type: "Research",
      description: "A decentralized system using blockchain and IoT sensors to track products throughout the supply chain, ensuring transparency and authenticity.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Ethereum", "Solidity", "IoT Sensors", "Web3.js", "React"],
      awards: []
    },
    {
      title: "Automated Waste Segregation Robot",
      students: ["Gabriel Santos", "Christine Lim"],
      track: "Embedded Systems",
      year: "3rd Year",
      semester: "2023-2024",
      type: "Research",
      description: "A robot that uses computer vision and machine learning to automatically identify and segregate different types of waste materials for recycling purposes.",
      image: "https://images.unsplash.com/photo-1485841890310-6a055c88698a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Raspberry Pi", "TensorFlow", "OpenCV", "Servo Motors", "Python"],
      awards: ["Environmental Innovation Award"]
    },
    {
      title: "Smart Parking Management System",
      students: ["Nicole Fernandez", "Bryan Garcia"],
      track: "IoT",
      year: "3rd Year",
      semester: "2023-2024",
      type: "Research",
      description: "An IoT system that monitors parking space availability in real-time and provides navigation to available spots through a mobile application.",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Arduino", "Ultrasonic Sensors", "Firebase", "React Native", "MQTT"],
      awards: []
    },
    {
      title: "Real-Time Air Quality Monitoring Network",
      students: ["Marcus Villanueva", "Diana Lopez"],
      track: "IoT",
      year: "3rd Year",
      semester: "2023-2024",
      type: "Research",
      description: "A distributed network of IoT sensors that measure air quality parameters across the city and provide real-time pollution data through an interactive web dashboard.",
      image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["ESP32", "Air Quality Sensors", "InfluxDB", "Grafana", "Node.js"],
      awards: []
    },

    // Previous Year Projects
    {
      title: "Autonomous Drone for Disaster Response",
      students: ["Alexandra Torres", "Vincent Rodriguez"],
      track: "Embedded Systems",
      year: "4th Year",
      semester: "2022-2023",
      type: "Capstone",
      description: "An autonomous drone equipped with cameras and sensors for rapid disaster assessment and search-and-rescue operations in hard-to-reach areas.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Flight Controller", "Computer Vision", "GPS", "Radio Communication", "Python"],
      awards: ["Best Innovation Award 2023"]
    },
    {
      title: "Smart Energy Management for Buildings",
      students: ["Isabella Gomez", "Francis Santiago"],
      track: "IoT",
      year: "4th Year",
      semester: "2022-2023",
      type: "Capstone",
      description: "An intelligent system that optimizes energy consumption in commercial buildings using IoT sensors, predictive analytics, and automated control of HVAC and lighting systems.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Zigbee", "Machine Learning", "Cloud Computing", "React", "Python"],
      awards: ["Sustainability Award 2023"]
    },
    {
      title: "Gesture-Controlled Robotic Arm",
      students: ["Michelle Bautista", "Kenneth Navarro"],
      track: "Embedded Systems",
      year: "4th Year",
      semester: "2022-2023",
      type: "Capstone",
      description: "A robotic arm that can be controlled using hand gestures detected by computer vision, designed for assistive technology and industrial automation applications.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Arduino", "OpenCV", "Servo Motors", "MediaPipe", "Python"],
      awards: []
    },
    {
      title: "IoT-Based Flood Monitoring and Early Warning System",
      students: ["Gabriel Ramos", "Stephanie Garcia"],
      track: "IoT",
      year: "4th Year",
      semester: "2022-2023",
      type: "Capstone",
      description: "A comprehensive flood monitoring system using water level sensors and weather data to provide early warnings to communities at risk of flooding.",
      image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Water Level Sensors", "Weather API", "SMS Gateway", "Web Dashboard", "MySQL"],
      awards: ["Community Service Award 2023"]
    }
  ];

  // Get unique values for filters
  const years = ["all", ...Array.from(new Set(projects.map(p => p.year)))];
  const semesters = ["all", ...Array.from(new Set(projects.map(p => p.semester))).sort().reverse()];

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.students.some(student => student.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
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
          {filteredProjects.length > 0 ? (
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
                        {project.technologies.map((tech, i) => (
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
                          {project.awards.map((award, i) => (
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
