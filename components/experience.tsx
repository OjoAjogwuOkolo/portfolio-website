'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const milestones = [
    {
      year: 'June 2026 - Present',
      title: <>Annulla SaaS Platform <span className="italic font-normal text-amber-500/90">(FREELANCE)</span></>,
      points: [
        'Spearheaded backend architecture for a scalable subscription management SaaS MVP using Next.js and React, driving the platform toward a targeted product launch.',
        'Designed PostgreSQL schemas (via Supabase) for subscription lifecycles and engineered secure API workflows by integrating Supabase Auth with Resend for access control.',
      ],
    },
    {
      year: '2026',
      title: <>AI Multi-Agent Trading Platform <span className="italic font-normal text-amber-500/90">(FREELANCE)</span></>,
      points: [
        'Architected a scalable Node.js/TypeScript backend orchestrating autonomous bots, featuring cross-verification protocols to mitigate LLM hallucinations and ensure data fidelity.',
        'Integrated REST APIs (CoinMarketCap, News API) to stream live market data, executing automated logic and logging secure transaction audit trails into a database.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto border-t border-[#27272A]">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-400 mb-4">
          <Briefcase size={14} />
          Milestones
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Experience Timeline</h2>
        <p className="text-[#A1A1AA] text-sm mt-2 max-w-md">My journey in software engineering and project execution.</p>
      </div>

      <div className="relative border-l border-[#27272A] ml-4 sm:ml-32 space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-8 sm:pl-10"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-[#0A0A0A]" />

            {/* Year Badge on Desktop */}
            <div className="hidden sm:flex items-center gap-2 absolute -left-32 top-1 text-xs font-bold text-amber-500">
              <Calendar size={14} />
              {milestone.year}
            </div>

            {/* Content Card */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-[#27272A]">
              <span className="sm:hidden inline-block text-xs font-bold text-amber-500 mb-1">
                {milestone.year}
              </span>
              <h3 className="text-lg font-bold text-white mb-3">{milestone.title}</h3>
              
              {/* Bulleted Points */}
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                {milestone.points.map((point, pIndex) => (
                  <li key={pIndex} className="pl-1">
                    <span className="-ml-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}