import { Users, Calendar, Target, Heart, Laptop, GraduationCap, BookOpen, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { fetchExtensionPrograms, fetchExtensionMetrics } from '@/app/data/api';
import { motion } from 'motion/react';

// Icon mapping for categories/fallback
const iconMap: Record<string, any> = {
  'Community Impact': Heart,
  'Technology Education': Users, // Or Laptop
  'Skills Development': Target,
  'Innovation': Lightbulb,
  'Default': BookOpen
};

export function Extension() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [metrics, setMetrics] = useState<any>({
    total_beneficiaries: 0,
    total_programs: 0,
    total_communities: 0,
    total_partners: 0
  });
  const [loading, setLoading] = useState(true);

  /* Pagination State */
  const [visibleOngoing, setVisibleOngoing] = useState(3);
  const [visibleUpcoming, setVisibleUpcoming] = useState(6);
  const [visibleCompleted, setVisibleCompleted] = useState(4);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [progRes, metaRes] = await Promise.all([
          fetchExtensionPrograms(),
          fetchExtensionMetrics()
        ]);

        const programsData = Array.isArray(progRes) ? progRes : (progRes.results || []);
        setPrograms(programsData);
        setMetrics(metaRes);
      } catch (error) {
        console.error("Failed to fetch extension data", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const ongoing = programs.filter(p => p.status === 'Ongoing');
  const upcoming = programs.filter(p => p.status === 'Upcoming');
  const completed = programs.filter(p => p.status === 'Completed');

  const getIcon = (category: string) => {
    return iconMap[category] || iconMap['Default'];
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Extension Programs</h1>
          <p className="text-xl text-slate-100 max-w-3xl">
            Empowering communities through technology education, outreach initiatives, and collaborative partnerships.
          </p>
        </div>
      </section>

      {/* Mission Section (unchanged) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mission in Community Service</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The Computer Applications Department is committed to extending its expertise beyond the classroom,
              bringing technology education and innovation to communities throughout Mindanao and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Community Impact', desc: 'Serving communities across Mindanao', icon: Heart },
              { label: 'Technology Education', desc: 'Free training and workshops', icon: Users },
              { label: 'Skills Development', desc: 'Empowering through technical skills', icon: Target },
              { label: 'Innovation', desc: 'Fostering tech innovation locally', icon: Lightbulb }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-6 rounded-xl shadow-lg text-center">
                <item.icon className="w-10 h-10 text-[#4CC9BF] mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{item.label}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Extension Programs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Ongoing Extension Programs</h2>

          {loading ? <div className="text-center text-slate-500">Loading programs...</div> : (
            <div className="space-y-8">
              {ongoing.slice(0, visibleOngoing).map((program, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  key={idx}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="lg:flex">
                    {program.image && (
                      <div className="lg:w-1/3 relative h-64 lg:h-auto">
                        <ImageWithFallback
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={`${program.image ? 'lg:w-2/3' : 'w-full'} p-8`}>
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-5 h-5 text-[#4CC9BF]" />
                        <span className="text-sm text-[#4CC9BF] font-semibold">{program.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{program.title}</h3>
                      <p className="text-slate-600 mb-4 whitespace-pre-line">{program.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-[#4CC9BF]/20 text-[#33AAA1] text-xs rounded-full">{program.category}</span>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-slate-600">
                        {program.beneficiaries_count > 0 && (
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{program.beneficiaries_count}+ {program.beneficiaries_label || 'Beneficiaries'}</span>
                          </div>
                        )}
                        {program.municipality && (
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            <span>{program.municipality}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {ongoing.length === 0 && <div className="text-center text-slate-500 italic">No ongoing programs at the moment.</div>}

              {ongoing.length > visibleOngoing && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setVisibleOngoing(prev => prev + 3)}
                    className="px-6 py-3 bg-white border border-[#4CC9BF] text-[#4CC9BF] font-semibold rounded-lg hover:bg-[#4CC9BF] hover:text-white transition-all shadow-sm"
                  >
                    See More Ongoing Programs
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Upcoming Extension Programs</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {upcoming.slice(0, visibleUpcoming).map((program, idx) => {
              const Icon = getIcon(program.category);
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="bg-white p-8 rounded-xl shadow-lg border border-slate-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4CC9BF] to-[#33AAA1] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{program.title}</h3>
                  <p className="text-[#4CC9BF] font-semibold text-sm mb-4">{program.date}</p>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {program.description}
                  </p>
                  <div className="text-sm text-slate-500">
                    Target: {program.beneficiaries_count > 0 ? `${program.beneficiaries_count} participants` : program.beneficiaries_label}
                  </div>
                </motion.div>
              );
            })}
            {upcoming.length === 0 && <div className="col-span-full text-center text-slate-500 italic">No upcoming programs scheduled yet.</div>}
          </div>

          {upcoming.length > visibleUpcoming && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleUpcoming(prev => prev + 6)}
                className="px-6 py-3 bg-white border border-[#4CC9BF] text-[#4CC9BF] font-semibold rounded-lg hover:bg-[#4CC9BF] hover:text-white transition-all shadow-sm"
              >
                See More Upcoming Programs
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Completed Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Completed Extension Programs</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {completed.slice(0, visibleCompleted).map((program, idx) => {
              const Icon = getIcon(program.category);
              return (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  key={idx}
                  className="bg-gradient-to-br from-[#4CC9BF]/10 to-white p-8 rounded-xl shadow-lg border border-[#4CC9BF]/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-10 h-10 text-[#4CC9BF]" />
                    <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{program.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{program.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-[#4CC9BF]" />
                    <span className="text-[#33AAA1] font-semibold">{program.beneficiaries_count > 0 ? `${program.beneficiaries_count} ${program.beneficiaries_label}` : program.beneficiaries_label}</span>
                  </div>
                </motion.div>
              );
            })}
            {completed.length === 0 && <div className="col-span-full text-center text-slate-500 italic">No completed programs to show.</div>}
          </div>

          {completed.length > visibleCompleted && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCompleted(prev => prev + 4)}
                className="px-6 py-3 bg-white border border-[#4CC9BF] text-[#4CC9BF] font-semibold rounded-lg hover:bg-[#4CC9BF] hover:text-white transition-all shadow-sm"
              >
                See More Completed Programs
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Extension Program Impact</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CC9BF] mb-2">{metrics.total_beneficiaries}+</div>
              <div className="text-slate-600">Total Beneficiaries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CC9BF] mb-2">{metrics.total_communities}+</div>
              <div className="text-slate-600">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CC9BF] mb-2">{metrics.total_programs}</div>
              <div className="text-slate-600">Programs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#4CC9BF] mb-2">{metrics.total_partners}</div>
              <div className="text-slate-600">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
          <p className="text-lg text-slate-100 mb-8">
            Are you a community organization, local government unit, or NGO interested in partnering for technology
            education and extension programs? We'd love to collaborate with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#33AAA1] transition-all"
            >
              Submit Program Proposal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
