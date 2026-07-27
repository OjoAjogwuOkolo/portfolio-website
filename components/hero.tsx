'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] border border-[#27272A] text-xs font-medium text-amber-400 mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          Available for Software Engineering Roles
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Hi, I&apos;m <span className="text-amber-500">Goodluck</span>. <br />
          Software Engineer.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build scalable web applications with <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">TypeScript</span>, and modern backend architectures.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#projects"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 group"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#111111] hover:bg-[#1a1a1a] text-white border border-[#27272A] transition-all flex items-center justify-center gap-2"
          >
            <Download size={16} className="text-amber-500" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}