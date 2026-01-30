import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/721e8860ecf7fd24f6d6e1c0bd7539b905efe973.png";
import msuiitLogo from "@/assets/fc071c6dc211e12e50c4b5044f61820e7a508026.png";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname.startsWith(path);

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 bg-[rgba(0,0,0,0)]">
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