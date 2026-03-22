import { motion } from 'motion/react';
import { Cpu, Lightbulb, Users, PenTool, ArrowRight, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function LabsPage() {
  const labs = [
    {
      title: "IoT Lab",
      icon: <Lightbulb className="w-10 h-10 text-[#4CC9BF]" />,
      description: "Equipped with modern computers for programming and coding. This lab is designed for coming up with new innovative ideas and working on IoT projects and courses.",
      features: ["Modern programming workstations", "Innovation sandbox", "Cross-disciplinary IoT support"],
      photos: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80"
      ]
    },
    {
      title: "Embedded Lab",
      icon: <Cpu className="w-10 h-10 text-[#4CC9BF]" />,
      description: "Dedicated to embedded systems development. This facility is focused entirely on low-level circuit design, hardware programming, and complex component integration.",
      features: ["Microcontroller flashing", "Circuit debugging", "Embedded course integration"],
      photos: [
        "https://images.unsplash.com/photo-1517077304055-6e89abbf0e10?w=500&q=80",
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=500&q=80",
        "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=500&q=80"
      ]
    },
    {
      title: "Grad Lab",
      icon: <Users className="w-10 h-10 text-[#4CC9BF]" />,
      description: "An exclusive workspace for our MS students. It provides dedicated individual workstations so graduate researchers can focus uninterrupted on their advanced studies and theses.",
      features: ["Individual workstations per student", "Quiet focus environment", "MS Student exclusive access"],
      photos: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80",
        "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=500&q=80"
      ]
    },
    {
      title: "The Toolroom",
      icon: <PenTool className="w-10 h-10 text-[#4CC9BF]" />,
      description: "Our comprehensive hardware library. Students can borrow almost everything needed to build a project, ranging from basic electronic components to advanced diagnostic tools.",
      features: [
        "Resistors, diodes, and raw components",
        "Sensors and microcontrollers",
        "Oscilloscopes and diagnostic tools",
        "Programmable boards, PLCs, and FPGAs"
      ],
      photos: [
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&q=80",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80",
        "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?w=500&q=80"
      ]
    },
    {
      title: "Digital Dreamscape",
      icon: <Monitor className="w-10 h-10 text-[#4CC9BF]" />,
      description: "A centralized VR/AR laboratory available to the entire College of Computer Studies. Dedicated exclusively to immersive virtual reality experiments and mixed reality development.",
      features: [
        "VR headsets and sensory gear",
        "Mixed reality environments",
        "College-wide access",
        "High-performance graphics workstations"
      ],
      photos: [
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&q=80",
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&q=80",
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&q=80"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-gradient-to-r from-[#33AAA1] to-[#4CC9BF] text-white py-20 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Labs & Facilities</h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto">
            Discover the state-of-the-art workspaces and equipment libraries powering our groundbreaking student and faculty research.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {labs.map((lab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col h-full hover:shadow-2xl transition-shadow ${
                index === labs.length - 1 && labs.length % 2 !== 0 
                ? 'lg:col-span-2 lg:w-[calc(50%-1rem)] lg:mx-auto w-full' 
                : ''
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#4CC9BF]/10 p-4 rounded-xl">
                  {lab.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{lab.title}</h2>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                {lab.description}
              </p>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Highlights</h3>
                <ul className="space-y-3">
                  {lab.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-slate-700 text-sm">
                      <div className="w-2 h-2 bg-[#4CC9BF] rounded-full mt-1.5 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scrollable Photos Row */}
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide -mx-2 px-2">
                {lab.photos.map((photo, i) => (
                  <div key={i} className="flex-shrink-0 w-64 h-40 snap-center rounded-xl overflow-hidden relative group">
                    <ImageWithFallback 
                      src={photo} 
                      alt={`${lab.title} image ${i + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

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
