'use client';

import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { label: 'Projects Built', value: '4+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Self Built', value: '100%' },
    { label: 'Active Learning', value: '24/7' },
  ];

  return (
    <section className="py-12 border-y border-[#27272A] bg-[#111111]/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#111111] border border-[#27272A] text-center"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-amber-500 mb-1">{stat.value}</h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}