import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/721e8860ecf7fd24f6d6e1c0bd7539b905efe973.png";
import msuiitLogo from "figma:asset/fc071c6dc211e12e50c4b5044f61820e7a508026.png";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Sticky Header with Frosted Glass Effect */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 bg-[rgba(0,0,0,0)]">
          <div className="flex justify-between items-center h-20">
            {/* Logo and University Name */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
            >
              <img
                src={logo}
                alt="My ComApps Logo"
                className="h-75 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {/* Academics Dropdown */}
              <div className="relative">
                <button
                  onClick={() =>
                    setAcademicsOpen(!academicsOpen)
                  }
                  className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all flex items-center space-x-1 text-sm"
                >
                  <span>Academics</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {academicsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-200/50 py-2 z-50">
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-slate-700 hover:bg-slate-100 transition-all"
                      onClick={() => setAcademicsOpen(false)}
                    >
                      About the Program
                    </Link>
                    <Link
                      to="/curriculum"
                      className="block px-4 py-2 text-slate-700 hover:bg-slate-100 transition-all"
                      onClick={() => setAcademicsOpen(false)}
                    >
                      Curriculum
                    </Link>
                    <Link
                      to="/faculty"
                      className="block px-4 py-2 text-slate-700 hover:bg-slate-100 transition-all"
                      onClick={() => setAcademicsOpen(false)}
                    >
                      Faculty & Staff
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/admissions"
                className={`px-3 py-2 rounded-lg transition-all text-sm ${
                  isActive("/admissions")
                    ? "bg-[#4CC9BF] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                Admissions
              </Link>
              <Link
                to="/facilities"
                className={`px-3 py-2 rounded-lg transition-all text-sm ${
                  isActive("/facilities")
                    ? "bg-[#4CC9BF] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                Facilities
              </Link>
              <Link
                to="/student-life"
                className={`px-3 py-2 rounded-lg transition-all text-sm ${
                  isActive("/student-life")
                    ? "bg-[#4CC9BF] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                Student Life
              </Link>
              <Link
                to="/career"
                className={`px-3 py-2 rounded-lg transition-all text-sm ${
                  isActive("/career")
                    ? "bg-[#4CC9BF] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                Career Services
              </Link>
              <Link
                to="/research"
                className={`px-3 py-2 rounded-lg transition-all text-sm ${
                  isActive("/research")
                    ? "bg-[#4CC9BF] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                Research
              </Link>
              <Link
                to="/extension"
                className={`px-3 py-2 rounded-lg transition-all text-sm ${
                  isActive("/extension")
                    ? "bg-[#4CC9BF] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                Extension
              </Link>
              <Link
                to="/news"
                className={`px-3 py-2 rounded-lg transition-all text-sm ${
                  isActive("/news")
                    ? "bg-[#4CC9BF] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                News & Events
              </Link>
              <Link
                to="/contact"
                className="ml-3 px-5 py-2 bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] text-white rounded-lg hover:shadow-lg transition-all text-sm"
              >
                Contact
              </Link>
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
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/50">
            <div className="px-4 py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About the Program
              </Link>
              <Link
                to="/curriculum"
                className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Curriculum
              </Link>
              <Link
                to="/admissions"
                className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admissions
              </Link>
              <Link
                to="/faculty"
                className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Faculty & Staff
              </Link>
              <Link
                to="/facilities"
                className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Facilities
              </Link>
              <Link
                to="/student-life"
                className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Student Life
              </Link>
              <Link
                to="/career"
                className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Career Services
              </Link>
              <Link
                to="/research"
                className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Research
              </Link>
              <Link
                to="/extension"
                className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Extension
              </Link>
              <Link
                to="/news"
                className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                News & Events
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 bg-[#33AAA1] text-white rounded-lg hover:bg-[#4CC9BF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content with padding for fixed header */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* MSU-IIT Branding Section */}
          <div className="flex flex-col items-center justify-center mb-12 pb-8 border-b border-slate-800">
            <img
              src={msuiitLogo}
              alt="MSU-IIT Logo and Seal of Excellence"
              className="h-24 w-auto mb-4"
            />
            <h3 className="text-xl font-bold text-white mb-2">
              Mindanao State University
            </h3>
            <p className="text-[rgb(255,255,255)] text-sm text-[20px] font-bold">
              Iligan Institute of Technology
            </p>
            <p className="text-[#4CC9BF] text-xs mt-2 font-semibold">
              Seal of Excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={logo}
                  alt="My ComApps Logo"
                  className="h-25 w-auto"
                />
                <span className="font-bold">My ComApps</span>
              </div>
              <p className="text-slate-400 text-sm">
                Computer Applications Department
                <br />A department under MSU-IIT
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admissions"
                    className="hover:text-white transition-colors"
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/curriculum"
                    className="hover:text-white transition-colors"
                  >
                    Curriculum
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faculty"
                    className="hover:text-white transition-colors"
                  >
                    Faculty
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link
                    to="/facilities"
                    className="hover:text-white transition-colors"
                  >
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/student-life"
                    className="hover:text-white transition-colors"
                  >
                    Student Life
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
                    to="/career"
                    className="hover:text-white transition-colors"
                  >
                    Career Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>MSU-IIT Campus</li>
                <li>Iligan City, Philippines</li>
                <li>Phone: +63 (063) 223 8641</li>
                <li>Mobile: 0997 785 5711</li>
                <li>Email: admissions2025@g.msuiit.edu.ph</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Computer
              Applications Department, Mindanao State University
              - Iligan Institute of Technology. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}