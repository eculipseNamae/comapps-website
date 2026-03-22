import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchFaculty } from '@/app/data/api';
import { motion } from 'motion/react';
import { BookOpen, User } from 'lucide-react';

export function FacultyProfilesPage() {
  const [faculty, setFaculty] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFaculty()
      .then(res => setFaculty(Array.isArray(res) ? res : res.results || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-6">Faculty Researchers</h1>
        <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto mb-16">
          Meet our dedicated faculty members driving innovation and leading cutting-edge research in their fields.
        </p>

        {loading ? (
          <div className="text-center text-slate-500">Loading faculty profiles...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all relative flex flex-col group"
              >
                <Link to={`/research/faculty-profiles/${member.id}`} className="absolute inset-0 z-10"><span className="sr-only">View {member.name}'s Profile</span></Link>
                
                <div className="h-32 bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF]"></div>
                
                <div className="px-6 pb-6 relative flex-grow flex flex-col">
                  {/* Profile Image */}
                  <div className="-mt-16 mb-4 flex justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
                      {member.profile_image ? (
                        <img src={member.profile_image} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                          <User className="w-12 h-12 text-slate-400" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    <p className="text-sm font-medium text-[#4CC9BF]">{member.position}</p>
                  </div>

                  {member.research_interests && member.research_interests.length > 0 && (
                    <div className="mb-6 flex-grow">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 text-center">Research Interests</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.research_interests.slice(0, 3).map((interest: string, i: number) => (
                          <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md text-center">
                            {interest}
                          </span>
                        ))}
                        {member.research_interests.length > 3 && (
                          <span className="px-2 py-1 bg-slate-50 text-slate-400 text-xs font-semibold rounded-md">
                            +{member.research_interests.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-center text-slate-600 font-medium">
                    <BookOpen className="w-5 h-5 mr-2 text-[#4CC9BF]" />
                    {member.publications?.length || 0} Publications
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
