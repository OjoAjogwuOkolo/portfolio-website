'use client';

import { motion } from 'framer-motion';
import { Mail, Globe, Send, Zap, ShieldCheck, Users } from 'lucide-react';

export default function Contact() {
  const traits = [
    {
      icon: <Zap className="text-amber-500" size={20} />,
      title: 'Fast Execution',
      description: 'Quick learner with a strong bias for shipping production-ready applications under tight schedules.',
    },
    {
      icon: <ShieldCheck className="text-amber-500" size={20} />,
      title: 'Strong Foundation',
      description: 'Rigorous attention to detail honed through medical training and full-stack software engineering sprints.',
    },
    {
      icon: <Users className="text-amber-500" size={20} />,
      title: 'Collaboration',
      description: 'Experienced in working alongside co-founders and cross-functional peers to build collaborative SaaS tools.',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#27272A]">
      {/* Why Hire Me Sub-Section */}
      <div className="mb-24">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Why Hire Me</h2>
          <p className="text-[#A1A1AA] text-sm mt-2 max-w-md">Core strengths I bring to engineering teams.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {traits.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#111111] border border-[#27272A]"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                {trait.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{trait.title}</h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">{trait.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 sm:p-12 rounded-3xl bg-[#111111] border border-[#27272A] text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

        <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Let&apos;s Build Something Great Together.
        </h2>
        <p className="text-sm text-[#A1A1AA] max-w-lg mx-auto mb-8">
          I am actively seeking software engineering opportunities. Reach out via email or connect with me on professional platforms.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:ajogwu406@gmail.com"
            className="px-6 py-3 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/10"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href="https://github.com/OjoAjogwuOkolo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-sm font-semibold bg-[#0A0A0A] hover:bg-[#1a1a1a] text-white border border-[#27272A] transition-all flex items-center gap-2"
          >
            <Globe size={16} className="text-amber-500" />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}