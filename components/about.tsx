'use client';

import { motion } from 'framer-motion';
import { User, HeartPulse, Cpu, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#27272A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Title / Badge */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-400 mb-4">
            <User size={14} />
            Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            A Unique Blend of Medicine & Software Engineering
          </h2>
          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            Balancing rigorous medical training with intensive full-stack software development to build efficient, scalable web solutions.
          </p>
        </div>

        {/* Right Column: Bio Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl bg-[#111111] border border-[#27272A]"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <HeartPulse size={20} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Medical Student</h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Currently pursuing medical studies at the University of Jos, instilling discipline, attention to detail, and high-stakes problem solving.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#111111] border border-[#27272A]"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Cpu size={20} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Self-Taught Developer</h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Passionate about full-stack engineering, specializing in TypeScript, Next.js, and backend architectures to deliver production-ready apps.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}