import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Twitter, Linkedin, Youtube, LogIn, Search, ChevronDown } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
// import { Input } from "@/app/components/ui/input";
import React, { useState, useEffect } from "react";
import logo from "@/assets/721e8860ecf7fd24f6d6e1c0bd7539b905efe973.png";
import msuiitLogo from "@/assets/fc071c6dc211e12e50c4b5044f61820e7a508026.png";

const mainNavItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Overview", href: "/about" },
      { label: "Vision, Mission, Goals", href: "/about/vmgo" },
      { label: "History & Milestones", href: "/about/history" },
      { label: "Chair's Message", href: "/about/chair-message" },
      { label: "Organizational Structure", href: "/about/organization" },
      { label: "Faculty & Staff", href: "/faculty" },
      { label: "Contact Us", href: "/about/contact" },
      { label: "Location", href: "/about/location" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "All Programs", href: "/programs" },
      { label: "BS Computer Applications", href: "/programs/bsca" },
      { label: "MS Computer Applications", href: "/programs/msca" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Overview", href: "/research" },
      { label: "Focus Areas", href: "/research/focus-areas" },
      { label: "Faculty Profiles", href: "/research/faculty-profiles" },
      { label: "Projects", href: "/research/projects" },
      { label: "Publications", href: "/research/publications" },
      { label: "Labs & Facilities", href: "/research/labs" },
      { label: "Student Research", href: "/research/student-research" },
      { label: "Collaborations", href: "/research/collaborations" },
      { label: "Metrics Dashboard", href: "/research/metrics" },
    ],
  },
  {
    label: "Extension",
    href: "/extension",
    children: [
      { label: "Overview", href: "/extension" },
      { label: "Programs", href: "/extension/programs" },
      { label: "Partnerships", href: "/extension/partnerships" },
      { label: "Tech Transfer", href: "/extension/tech-transfer" },
      { label: "Service Projects", href: "/extension/service-projects" },
      { label: "Impact & Outcomes", href: "/extension/impact" },
    ],
  },
  {
    label: "Faculty",
    href: "/faculty",
    children: [
      { label: "Directory", href: "/faculty" },
      { label: "Qualifications", href: "/faculty/qualifications" },
      { label: "Achievements", href: "/faculty/achievements" },
      { label: "Development", href: "/faculty/development" },
    ],
  },
  {
    label: "Students",
    href: "/students",
    children: [
      { label: "Current Students", href: "/students/current" },
      { label: "Prospective Students", href: "/students/prospective" },
      { label: "Organizations", href: "/students/organizations" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Alumni", href: "/alumni" },
  { label: "News & Events", href: "/news" },
];

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
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.location.reload();
                }
              }}
              className="flex items-center space-x-3 group shrink-0"
            >
              <img
                src={logo}
                alt="My ComApps Logo"
                className="h-16 lg:h-[72px] w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu viewport={false} className="hidden lg:flex z-50">
              <NavigationMenuList className="gap-0.5">
                {mainNavItems.map((item) =>
                  item.children ? (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuTrigger
                        className={cn(
                          "text-sm font-medium px-3 py-2 whitespace-nowrap rounded-md transition-colors",
                          isActive(item.href)
                            ? "!bg-[#4CC9BF] !text-white hover:!bg-[#33AAA1] data-[open=true]:!bg-[#4CC9BF] data-[state=open]:!bg-[#4CC9BF]"
                            : "bg-transparent text-slate-700 hover:!bg-slate-100 data-[state=open]:!bg-slate-100"
                        )}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-1 p-4 w-56 bg-white shadow-lg rounded-xl border border-slate-100">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={child.href}
                                  className={cn(
                                    "block select-none rounded-lg p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-primary focus:bg-slate-50 focus:text-primary text-slate-600",
                                    location.pathname === child.href && "bg-slate-50 text-primary font-medium"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.label}>
                      <Link
                        to={item.href}
                        onClick={(e) => {
                          if (item.href === "/" && location.pathname === "/") {
                            e.preventDefault();
                            window.location.reload();
                          }
                        }}
                        className={cn(
                          "text-sm font-medium px-3 py-2 rounded-lg transition-colors inline-block whitespace-nowrap",
                          isActive(item.href) && item.href !== "/"
                            ? "!bg-[#4CC9BF] !text-white hover:!bg-[#33AAA1]"
                            : item.href === "/" && location.pathname === "/"
                              ? "!bg-[#4CC9BF] !text-white hover:!bg-[#33AAA1]"
                              : "bg-transparent text-slate-700 hover:!bg-slate-100"
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons & Mobile Menu Trigger */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2 mr-2">
                <Button variant="outline" size="sm" className="border-slate-200 text-slate-700 hover:bg-slate-50" asChild>
                  <Link to="/admissions/request-info">Request Info</Link>
                </Button>
                <Button size="sm" className="bg-primary text-white hover:bg-primary/90 shadow-sm" asChild>
                  <Link to="/admissions/apply">Apply Now</Link>
                </Button>
              </div>

              {/* Mobile Menu Button - Will be updated in next step */}
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
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="right" className="w-80 overflow-y-auto z-[60] bg-white border-l border-slate-200">
            <div className="flex flex-col gap-6 pt-6">
              <div className="flex flex-col gap-2">
                <Button className="bg-primary text-white hover:bg-primary/90 w-full" asChild>
                  <Link to="/admissions/apply" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
                </Button>
                <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:bg-slate-50" asChild>
                  <Link to="/admissions/request-info" onClick={() => setMobileMenuOpen(false)}>Request Info</Link>
                </Button>
              </div>
              <nav className="flex flex-col gap-1">
                {mainNavItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <details className="group">
                        <summary className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer font-medium text-slate-700">
                          {item.label}
                          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="pl-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <SheetClose asChild key={child.href}>
                              <Link
                                to={child.href}
                                className="block p-2 rounded-lg text-sm text-slate-500 hover:text-primary hover:bg-slate-50 transition-colors"
                              >
                                {child.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          to={item.href}
                          onClick={(e) => {
                            if (item.href === "/" && location.pathname === "/") {
                              e.preventDefault();
                              window.location.reload();
                            }
                          }}
                          className="block p-3 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
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