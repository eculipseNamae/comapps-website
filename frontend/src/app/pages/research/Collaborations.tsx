import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { fetchCollaborators } from '@/app/data/api';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CollaborationsPage() {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const data = await fetchCollaborators();
        setPartners(data);
      } catch (error) {
        console.error("Failed to load collaborators:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPartners();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-gradient-to-r from-[#4CC9BF] to-[#2B938A] text-white py-20 mb-12 shadow-inner">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Research & Industry Collaborations</h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed">
            Discover the network of global institutions, tech giants, and visionary agencies actively building the future with us.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {loading ? (
          <div className="text-center text-slate-500 py-12 italic">Loading our active partners...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col hover:shadow-2xl transition-all"
              >
                <div className="h-28 mb-6 flex items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  {partner.logo ? (
                    <ImageWithFallback src={partner.logo} alt={partner.name} className="max-h-20 object-contain max-w-full" />
                  ) : (
                    <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-[#4CC9BF] font-bold text-3xl">
                      {partner.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-bold text-slate-900 text-center mb-3">{partner.name}</h2>
                {partner.description && (
                  <p className="text-slate-600 text-center text-sm leading-relaxed mb-6 flex-grow">
                    {partner.description}
                  </p>
                )}
              </motion.div>
            ))}
            
            {partners.length === 0 && (
              <div className="col-span-full text-center py-20 opacity-60 bg-white rounded-2xl border-2 border-dashed border-slate-200">
                <Globe className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-700 mb-2">No active partners found</h3>
                <p className="text-slate-500">You can add your global partners inside the CMS Dashboard!</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            to="/research"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-600 rounded-full font-semibold hover:text-[#4CC9BF] hover:shadow-md transition-all border border-slate-200"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Research Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
