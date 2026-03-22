import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cpu, Globe, Wifi, Eye, Brain, ArrowRight, Code } from 'lucide-react';
import { fetchFocusAreas } from '@/app/data/api';

const iconMap: Record<string, any> = {
  'embedded-systems-edge': Cpu,
  'iot-aiot-ioe': Globe,
  'sensor-networks': Wifi,
  'computer-vision-audio': Eye,
  'ai-ml': Brain
};

export function FocusAreasPage() {
  const [areas, setAreas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAreas = async () => {
      try {
        const res = await fetchFocusAreas();
        setAreas(Array.isArray(res) ? res : res.results || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadAreas();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#4CC9BF] mb-6">
            Research Focus Areas
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover the core technological domains driving our student research, thesis deliverables, and capstone innovations.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
             <Code className="w-16 h-16 text-slate-300 animate-pulse" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, idx) => {
              const IconComponent = iconMap[area.slug] || Cpu; // Fallback icon
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all relative flex flex-col group"
                >
                  <div className="p-4 bg-[#4CC9BF]/10 w-fit rounded-xl mb-6">
                    <IconComponent className="w-8 h-8 text-[#4CC9BF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pr-4 leading-tight">
                    {area.name}
                  </h3>
                  <p className="text-slate-600 mb-8 flex-grow">
                    {area.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Link
                      to={`/research/focus-areas/${area.slug}`}
                      className="inline-flex items-center font-bold text-[#4CC9BF] hover:text-[#33AAA1] transition-colors group-hover:translate-x-1 duration-300"
                    >
                      Learn More <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
