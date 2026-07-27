'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className="text-amber-500" size={20} />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3'],
    },
    {
      title: 'Backend',
      icon: <Server className="text-amber-500" size={20} />,
      skills: ['Node.js', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT Authentication'],
    },
    {
      title: 'Tools & Workflow',
      icon: <Wrench className="text-amber-500" size={20} />,
      skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Postman'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#27272A]">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Technical Expertise</h2>
        <p className="text-[#A1A1AA] text-sm mt-2 max-w-md">Core technologies and tools I use to build scalable products.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-[#111111] border border-[#27272A]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-[#0A0A0A] border border-[#27272A] text-xs font-medium text-[#A1A1AA]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}