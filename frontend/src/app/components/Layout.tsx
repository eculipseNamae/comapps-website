import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Twitter, Linkedin, Youtube, LogIn, Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
// import { Input } from "@/app/components/ui/input";
import React, { useState, useEffect } from "react";
import logo from "@/assets/721e8860ecf7fd24f6d6e1c0bd7539b905efe973.png";
import msuiitLogo from "@/assets/fc071c6dc211e12e50c4b5044f61820e7a508026.png";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [backendResults, setBackendResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname.startsWith(path);

  const searchIndex = [
    { title: "Home", path: "/", description: "Welcome to the Department of Computer Applications" },
    { title: "About Us", path: "/about", description: "Learn about our department's history and vision" },
    { title: "Programs & Admissions", path: "/programs-admissions", description: "Explore the BSCA and MSCA programs" },
    { title: "Bachelor of Science in Computer Applications (BSCA)", path: "/programs/bsca", description: "Undergraduate degree details" },
    { title: "Master of Science in Computer Applications (MSCA)", path: "/programs/msca", description: "Graduate degree details" },
    { title: "BSCA Embedded Systems Track", path: "/programs/bsca/embedded-systems", description: "Specialization in embedded systems" },
    { title: "BSCA IoT Track", path: "/programs/bsca/iot", description: "Specialization in Internet of Things" },
    { title: "Students", path: "/students", description: "Student life and activities" },
    { title: "Student Projects", path: "/students/projects", description: "Showcase of outstanding student work" },
    { title: "Alumni", path: "/students/alumni", description: "Connect with our graduates" },
    { title: "Faculty & Staff", path: "/faculty", description: "Meet our dedicated educators and staff" },
    { title: "Research", path: "/research", description: "Discover our latest research publications" },
    { title: "Extension", path: "/extension", description: "Community outreach and extension projects" },
    { title: "Resources", path: "/resources", description: "Important links and downloads for students" },
    { title: "Career Services", path: "/career", description: "Job postings and internship opportunities" },
    { title: "News", path: "/news", description: "Latest announcements and events" },
    { title: "Contact Us", path: "/contact", description: "Get in touch with the department" },
    { title: "About the Developers", path: "/developers", description: "Meet the team who built this site" }
  ];

  const staticResults = searchIndex.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  ).map(item => ({ ...item, type: 'page' }));

  useEffect(() => {
    if (!searchQuery) {
      setBackendResults([]);
      setIsSearching(false);
      return;
    }

    const fetchTimer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const response = await fetch(`/api/search/?q=${encodeURIComponent(searchQuery)}`);
        if (response.ok) {
          const data = await response.json();
          setBackendResults(data.results || []);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsSearching(false);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(fetchTimer);
  }, [searchQuery]);

  const allResults = [...staticResults, ...backendResults];

  const navItems = [
    { name: "About Us", path: "/about" },
    {
      name: "Programs & Admissions",
      path: "/programs-admissions",
    },
    { name: "Students", path: "/students" },
    { name: "Faculty & Staff", path: "/faculty" },
    { name: "Research", path: "/research" },
    { name: "Extension", path: "/extension" },
    { name: "Resources", path: "/resources" },
    { name: "Career Services", path: "/career" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm flex flex-col">
        {/* Top Header Bar */}
        <div className="bg-primary text-primary-foreground py-1.5 px-6 sm:px-8 lg:px-12 w-full flex justify-between items-center text-sm font-medium">
          <div className="flex items-center">
            <span>Department of Computer Applications</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a href="https://www.facebook.com/MSUIIT.CCS.CA.Dept" target="_blank" rel="noopener noreferrer" className="hover:text-[#4CC9BF] transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-[#4CC9BF] transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-[#4CC9BF] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-[#4CC9BF] transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <div className="h-4 w-px bg-slate-600"></div>
            <a href="https://my.iit.edu.ph" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-[#4CC9BF] transition-colors">
              <LogIn className="w-4 h-4" />
              <span>Portal Login</span>
            </a>
            
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <button className="flex items-center space-x-1 hover:text-[#4CC9BF] transition-colors">
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] h-[80vh] flex flex-col pt-10">
                <DialogHeader className="px-6 shrink-0 h-10">
                  <DialogTitle>Search</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4 px-6 flex-1 min-h-0">
                  <div className="flex items-center gap-2 border-b pb-2">
                    <Search className="w-5 h-5 text-muted-foreground mr-2 shrink-0" />
                    <input 
                      placeholder="Type your search and view real-time database results..." 
                      className="flex-1 min-w-0 border-0 outline-none active:outline-none focus:outline-none bg-transparent text-lg" 
                      autoFocus
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {isSearching && (
                      <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin ml-2 shrink-0"></div>
                    )}
                  </div>
                  <div className="flex-1 overflow-y-auto flex flex-col gap-2 min-h-0 px-1 pb-6 mt-2">
                    {searchQuery.length === 0 ? (
                      <div className="flex-1 flex items-center justify-center text-sm text-muted-foreground">
                        Start typing to search website pages, faculty, news, and events...
                      </div>
                    ) : allResults.length > 0 ? (
                      allResults.map((result, idx) => (
                        <Link 
                          key={idx} 
                          to={result.path}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 hover:shadow-sm border border-transparent hover:border-slate-100 transition-all shrink-0 group"
                        >
                          <div className="flex flex-col min-w-0 flex-1">
                             <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-slate-900 group-hover:text-primary transition-colors truncate">{result.title}</span>
                                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 shrink-0">{result.type}</span>
                             </div>
                             <span className="text-sm text-slate-500 line-clamp-2 leading-relaxed">{result.description}</span>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="flex-1 flex flex-col items-center justify-center text-sm text-muted-foreground">
                        <Search className="w-8 h-8 mb-4 text-slate-200" />
                        <p>No results found for "{searchQuery}"</p>
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 bg-[rgba(0,0,0,0)] w-full">
          <div className="flex justify-between items-center h-20">
            {/* Logo and University Name */}
            <Link
              to="/"
              className="flex items-center space-x-3 group shrink-0"
            >
              <img
                src={logo}
                alt="My ComApps Logo"
                className="h-50 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg transition-all text-sm font-medium whitespace-nowrap ${isActive(item.path)
                    ? "bg-[#4CC9BF] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/50 h-screen overflow-y-auto pb-24">
            <div className="px-4 py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-100 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-100 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-4 py-3 bg-[#33AAA1] text-white rounded-lg hover:bg-[#4CC9BF] font-medium mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content with padding for fixed header + top bar */}
      <main className="pt-28">{children}</main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* MSU-IIT Branding Section */}
          <div className="flex flex-col items-center justify-center mb-12 pb-8 border-b border-slate-800">
            <img
              src={msuiitLogo}
              alt="MSU-IIT Logo and Seal of Excellence"
              className="h-24 w-auto mb-4"
            />
            <h3 className="text-xl font-bold text-white mb-2 text-center">
              Mindanao State University
            </h3>
            <p className="text-[rgb(255,255,255)] text-lg font-bold text-center">
              Iligan Institute of Technology
            </p>
            <p className="text-[#4CC9BF] text-xs mt-2 font-semibold tracking-wider">
              SEAL OF EXCELLENCE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src={logo}
                  alt="My ComApps Logo"
                  className="h-12 w-auto"
                />
                <span className="font-bold text-lg">
                  My ComApps
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Computer Applications Department
                <br />
                College of Computer Studies
                <br />
                MSU-Iligan Institute of Technology
              </p>
            </div>

            {/* Navigation Columns */}
            <div>
              <h3 className="font-semibold text-[#4CC9BF] mb-4">
                Department
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs-admissions"
                    className="hover:text-white transition-colors"
                  >
                    Programs & Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faculty"
                    className="hover:text-white transition-colors"
                  >
                    Faculty & Staff
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#4CC9BF] mb-4">
                Community
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <Link
                    to="/students"
                    className="hover:text-white transition-colors"
                  >
                    Students
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    className="hover:text-white transition-colors"
                  >
                    Career Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/extension"
                    className="hover:text-white transition-colors"
                  >
                    Extension
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research"
                    className="hover:text-white transition-colors"
                  >
                    Research
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#4CC9BF] mb-4">
                Support
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <Link
                    to="/resources"
                    className="hover:text-white transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    to="/developers"
                    className="hover:text-white transition-colors"
                  >
                    About the Developers
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    to="/contact"
                    className="block text-white font-medium mb-1 hover:text-[#4CC9BF] transition-colors"
                  >
                    Contact Us
                  </Link>
                  <span className="block">0997 785 5711</span>
                  <span className="block">
                    admissions2025@g.msuiit.edu.ph
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} Computer
              Applications Department, MSU-IIT. All rights
              reserved.
            </p>
            <p className="mt-2 text-xs text-slate-600">
              Version 1.0
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}