'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Layers, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'TaskFlow',
      description: 'Role-based project management platform featuring real-time chat, analytics dashboards, and automated role seeding.',
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'JWT', 'Tailwind'],
      liveUrl: 'https://taskflow-opal-two.vercel.app/',
      githubUrl: 'https://github.com/OjoAjogwuOkolo/taskflow',
      featured: true,
    },
    {
      title: 'Bible Study Tracker',
      description: 'AI-powered study planner designed to organize, schedule, and track theological reading plans and devotional goals.',
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'Gemini AI'],
      liveUrl: 'https://bible-study-tracker-rho.vercel.app',
      githubUrl: 'https://github.com/OjoAjogwuOkolo/Bible-study-tracker',
      featured: false,
    },
    {
      title: 'Annulla MVP',
      description: 'Annulla is an automated subscription management dashboard that centralizes all your recurring payments, free trials, and billing cycles into one clean interface.',
      tags: ["TypeScript","React","Next.js","Node.js","Express","MongoDB","PostgreSQL"],
      githubUrl: 'https://github.com/OjoAjogwuOkolo/annulla-workspace',
      featured: false,
    },
    {
      title: 'Multi-Agent Crypto Trader',
      description: 'Multi-agent trading system architecture built for a crypto hackathon that logs automated agent decisions and transaction execution logs in real time.',
      tags: ['TypeScript', 'Next.js', 'Node.js', 'Web3', 'Tailwind'],
      githubUrl: 'https://github.com/OjoAjogwuOkolo/quant-engine',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Next.js and TypeScript, showcasing my projects and skills.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/OjoAjogwuOkolo/portfolio',
      featured: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide trigger
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [projects.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-400 mb-4">
          <Layers size={14} />
          Portfolio Work
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
        <p className="text-[#A1A1AA] text-sm mt-2 max-w-md">Production-ready applications engineered with modern web technologies.</p>
      </div>

      {/* Outer Slider Window */}
      <div className="relative overflow-hidden p-1">
        {/* Sliding Track */}
        <motion.div
          className="flex gap-6"
          animate={{ x: `calc(-${currentIndex} * (100% / 3 + 16px))` }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Loop over array twice so the loop never hits a blank wall */}
          {[...projects, ...projects].map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 flex flex-col justify-between p-6 rounded-2xl bg-[#111111] border border-[#27272A] hover:border-amber-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
                    {project.title[0]}
                  </div>
                  <div className="flex items-center gap-2">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#0A0A0A] border border-[#27272A] text-[#A1A1AA] hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Code size={16} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#0A0A0A] border border-[#27272A] text-[#A1A1AA] hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#27272A]">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#0A0A0A] border border-[#27272A] text-[10px] font-medium text-[#A1A1AA]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0A0A0A]/90 border border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-amber-500/40 transition-colors backdrop-blur-md z-10"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0A0A0A]/90 border border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-amber-500/40 transition-colors backdrop-blur-md z-10"
          aria-label="Next Slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex ? 'w-6 bg-amber-400' : 'w-2 bg-[#27272A]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}