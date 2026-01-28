import { motion } from "motion/react";
import { ArrowLeft, User, Mail, Linkedin, BookOpen, ExternalLink, Award, Globe } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchFacultyMember } from '@/app/data/api';

interface FacultyMember {
  id: string;
  name: string;
  position: string;
  email: string;
  bio: string;
  research_interests: string[];
  profile_image: string | null;
  networks: any;
  publications: any[];
}

export function FacultyProfile() {
  const { id } = useParams<{ id: string }>();
  const [member, setMember] = useState<FacultyMember | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) {
      fetchFacultyMember(id)
        .then(data => {
          setMember(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Failed to fetch faculty member", err);
          setError(true);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading profile...</div>;
  if (error || !member) return <Navigate to="/faculty" replace />;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F172A] via-slate-900 to-[#0F172A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Faculty"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/faculty" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Faculty
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-8"
          >
            <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
              {member.profile_image ? (
                <img src={member.profile_image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <User className="w-16 h-16 text-[#4CC9BF]" />
              )}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{member.name}</h1>
              <p className="text-xl text-[#4CC9BF] font-semibold mb-4">{member.position}</p>
              {member.bio && (
                <p className="text-slate-300 text-lg max-w-3xl">{member.bio}</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Research Interests */}
            {member.research_interests && member.research_interests.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
              >
                <div className="flex items-center mb-6">
                  <Award className="w-6 h-6 text-[#4CC9BF] mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900">Research Interests</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {member.research_interests.map((topic, i) => (
                    <span key={i} className="px-4 py-2 bg-[#4CC9BF]/10 text-[#33AAA1] font-semibold rounded-lg border border-[#4CC9BF]/20">
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Scholarly Articles / Publications */}
            {member.publications && member.publications.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
              >
                <div className="flex items-center mb-6">
                  <BookOpen className="w-6 h-6 text-[#4CC9BF] mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900">Scholarly Articles & Publications</h2>
                </div>
                <div className="space-y-6">
                  {member.publications.map((pub, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="border-l-4 border-[#4CC9BF] pl-6 py-2 hover:bg-slate-50 transition-colors rounded-r-lg"
                    >
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#4CC9BF] transition-colors flex items-start">
                          {pub.title}
                          <ExternalLink className="w-4 h-4 ml-2 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="font-semibold text-[#33AAA1]">{pub.year}</span>
                          <span>•</span>
                          <span className="italic">{pub.venue}</span>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Contact</h3>
              <Link
                to={`/faculty/${member.id}/contact`}
                className="w-full flex items-center justify-center px-6 py-3 bg-[#4CC9BF] hover:bg-[#33AAA1] text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send an Email
              </Link>
              <p className="text-xs text-slate-500 mt-3 text-center">
                Use this secure form to contact the faculty member
              </p>
            </motion.div>

            {/* Professional Networks */}
            {member.networks && Object.keys(member.networks).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">Professional Networks</h3>
                <div className="space-y-3">
                  {Object.entries(member.networks).map(([key, url]) => {
                    // NETWORK CONFIGURATION
                    const networkKey = key.toLowerCase();
                    let config = {
                      icon: Globe,
                      color: "text-slate-600",
                      bgColor: "bg-slate-100",
                      label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize generic keys
                      borderColor: "border-slate-100"
                    };

                    if (networkKey === 'linkedin') {
                      config = { icon: Linkedin, color: "text-blue-600", bgColor: "bg-blue-100", label: "LinkedIn", borderColor: "border-blue-100" };
                    } else if (networkKey === 'googlescholar') {
                      config = { icon: BookOpen, color: "text-red-600", bgColor: "bg-red-100", label: "Google Scholar", borderColor: "border-red-100" };
                    } else if (networkKey === 'researchgate') {
                      config = { icon: Award, color: "text-teal-600", bgColor: "bg-teal-100", label: "ResearchGate", borderColor: "border-teal-100" };
                    } else if (networkKey === 'orcid') {
                      config = { icon: Award, color: "text-green-600", bgColor: "bg-green-100", label: "ORCID", borderColor: "border-green-100" };
                    }

                    const IconComponent = config.icon;

                    return (
                      <a
                        key={key}
                        href={url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors border ${config.borderColor} group`}
                      >
                        <div className={`w-10 h-10 ${config.bgColor} rounded-lg flex items-center justify-center mr-3`}>
                          <IconComponent className={`w-5 h-5 ${config.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 group-hover:text-[#4CC9BF]">{config.label}</div>
                          <div className="text-xs text-slate-500">View Profile</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#4CC9BF]" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
