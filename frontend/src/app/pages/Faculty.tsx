import { Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { facultyAPI } from '@/services/api';

interface FacultyMember {
  id: number;
  name: string;
  position: string;
  research_interests: string[];
  email: string;
}

export function Faculty() {
  const [faculty, setFaculty] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFaculty = async () => {
      try {
        setLoading(true);
        const data = await facultyAPI.getAll();
        setFaculty(Array.isArray(data) ? data : data.results || []);
        setError(null);
      } catch (err) {
        console.error('Failed to load faculty:', err);
        setError('Failed to load faculty. Using demo data.');
        // Fallback to demo data
        setFaculty([
          {
            id: 1,
            name: 'Alce, Apple Rose B.',
            position: 'Assistant Professor',
            research_interests: ['Embedded Systems', 'Wireless Sensor Networks', 'Microcontrollers', 'Digital Electronics', 'Rice Agriculture'],
            email: 'apple.alce@g.msuiit.edu.ph',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadFaculty();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Faculty and Staff</h1>
          <p className="text-xl text-[#77D6CE] max-w-3xl">
            Meet our dedicated team of educators and researchers committed to your academic success.
          </p>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Faculty Members</h2>
          {loading && <p className="text-center text-slate-600">Loading faculty...</p>}
          {error && <p className="text-center text-red-600">{error}</p>}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-[#4CC9BF] to-[#33AAA1] h-32" />
                <div className="p-6 -mt-16">
                  <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-[#4CC9BF] font-semibold mb-3">{member.position}</p>

                  {member.research_interests && member.research_interests.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Research Interests:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.research_interests.map((topic, i) => (
                          <span key={i} className="px-2 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="border-t border-slate-200 pt-4 space-y-2">
                    <div className="flex items-center text-sm text-slate-600">
                      <Mail className="w-4 h-4 mr-2 text-slate-400" />
                      {member.email}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}