import { motion } from "motion/react";
import { Code, Palette, Database, Server, Users } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

import bryanImg from '@/assets/developers/bryan.jpg';
import johnImg from '@/assets/developers/john.jpg';
import kheanImg from '@/assets/developers/khean.jpg';
import alfredImg from '@/assets/developers/IMG_9201[1].jpg';
import jeanImg from '@/assets/developers/Mahilum (1).jpg';

export function Developers() {
  const techStack = [
    {
      category: 'Design',
      icon: <Palette className="w-8 h-8" />,
      color: 'purple',
      items: [
        { name: 'Figma', description: 'UI/UX Design and Prototyping' }
      ]
    },
    {
      category: 'Frontend',
      icon: <Code className="w-8 h-8" />,
      color: 'blue',
      items: [
        { name: 'React 18', description: 'JavaScript library for building user interfaces' },
        { name: 'TypeScript', description: 'Typed superset of JavaScript' },
        { name: 'Vite', description: 'Next generation frontend tooling' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
        { name: 'Motion/React', description: 'Production-ready animation library' },
        { name: 'React Router', description: 'Declarative routing for React' }
      ]
    },
    {
      category: 'Backend',
      icon: <Server className="w-8 h-8" />,
      color: 'green',
      items: [
        { name: 'Django 6.0.1', description: 'High-level Python web framework' },
        { name: 'Django REST Framework', description: 'Powerful and flexible toolkit for building Web APIs' }
      ]
    },
    {
      category: 'Database',
      icon: <Database className="w-8 h-8" />,
      color: 'orange',
      items: [
        { name: 'SQLite3', description: 'Lightweight, file-based relational database' }
      ]
    }
  ];

  const developers = [
    {
      name: 'Bryan Joshua Ginon',
      program: 'Bachelor of Science in Computer Applications',
      institution: 'Mindanao State University - Iligan Institute of Technology',
      role: 'Full-stack Developer, UI/UX Designer, Scrum Master',
      track: 'Embedded Systems',
      image: bryanImg
    },
    {
      name: 'John Heri P. Contrivida',
      program: 'Bachelor of Science in Computer Applications',
      institution: 'MSU-IIT',
      role: 'Full-stack Developer, Data Engineer',
      track: 'Embedded Systems',
      image: johnImg
    },
    {
      name: 'Khean V. Reambonanza',
      program: 'Bachelor of Science in Computer Applications',
      institution: 'Mindanao State University - Iligan Institute of Technology',
      role: 'Full-stack Developer, Quality Assurance Engineer',
      track: 'Embedded Systems',
      image: kheanImg
    },
    {
      name: 'Alfred Lee S. Simbajon',
      program: 'Bachelor of Science in Computer Applications',
      institution: 'Mindanao State University - Iligan Institute of Technology',
      role: 'Full-stack Developer, Tester',
      track: 'Embedded Systems',
      image: alfredImg
    },
    {
      name: 'Jean Dale M. Mahilum',
      program: 'Bachelor of Science in Computer Applications',
      institution: 'Mindanao State University - Iligan Institute of Technology',
      role: 'Full-stack Developer, QA Analyst',
      track: 'IoT',
      image: jeanImg
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F172A] via-slate-900 to-[#0F172A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Development team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About the Developers</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet the team behind the Computer Applications Department website and explore the technology stack that powers this platform.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technology Stack</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              This website was built using modern web technologies to ensure performance, scalability, and an exceptional user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((stack, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${colorMap[stack.color].bg} border ${colorMap[stack.color].border} rounded-2xl p-8 shadow-lg`}
              >
                <div className="flex items-center mb-6">
                  <div className={`${colorMap[stack.color].text} mr-4`}>
                    {stack.icon}
                  </div>
                  <h3 className={`text-2xl font-bold ${colorMap[stack.color].text}`}>
                    {stack.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {stack.items.map((item, i) => (
                    <div key={i}>
                      <div className="font-semibold text-slate-900">{item.name}</div>
                      <div className="text-sm text-slate-600">{item.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Team Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-[#4CC9BF] mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Development Team</h2>
            </div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              A dedicated team of Computer Applications students from MSU-IIT who designed and developed this institutional website.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developers.map((dev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden border-2 border-[#4CC9BF]">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{dev.name}</h3>
                <div className="mb-4">
                  <div className="text-sm text-slate-600 mb-1">{dev.program}</div>
                  <div className="text-sm text-slate-600">{dev.institution}</div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 ${dev.track === 'Embedded Systems' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'} text-xs font-semibold rounded-full`}>
                    {dev.track}
                  </span>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-sm font-semibold text-[#4CC9BF]">{dev.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#4CC9BF]/10 to-[#33AAA1]/10 border border-[#4CC9BF]/20 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Overview</h3>
            <p className="text-slate-700 max-w-3xl mx-auto leading-relaxed">
              This website serves as the official online presence for the Computer Applications Department at MSU-IIT.
              The user interface and user experience were meticulously designed in <strong>Figma</strong>, ensuring a modern,
              accessible, and intuitive design system. The frontend is built with <strong>React 18</strong> and <strong>Vite </strong>
              for optimal performance, while the backend is powered by <strong>Django 6.0.1</strong> with <strong>SQLite3</strong> as
              the database, providing a robust and scalable foundation for managing content and user interactions.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
