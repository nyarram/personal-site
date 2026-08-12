'use client'

import { motion } from 'framer-motion';

const languages = [
  { label: 'English', pct: 46, color: 'bg-blue-400' },
  { label: 'Telugu', pct: 30, color: 'bg-indigo-400' },
  { label: 'Hindi', pct: 14, color: 'bg-purple-400' },
  { label: 'Korean', pct: 6, color: 'bg-pink-400' },
  { label: 'Japanese', pct: 4, color: 'bg-rose-400' },
];

export const Letterboxd = () => {
  return (
    <section id="movies" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-14"
      >
        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Movies I Love
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto"
      >
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.07] via-indigo-600/[0.04] to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          <p className="text-center text-gray-400 text-sm leading-relaxed mb-8">
            Passionate movie buff! Always looking for the next one to rave about.
            The medium that transcends cultural barriers!
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {languages.map(({ label, pct, color }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="w-20 shrink-0 text-xs font-medium text-gray-400">{label}</span>
                <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`h-full rounded-full ${color}`}
                  />
                </div>
                <span className="w-9 shrink-0 text-right text-xs text-gray-500">{pct}%</span>
              </div>
            ))}
          </div>

          <a
            href="https://letterboxd.com/yarramboi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-blue-500/30 text-gray-300 hover:text-white transition-all group"
          >
            <span className="text-gray-500 group-hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="7" cy="12" r="5.2" fill="#00e054" />
                <circle cx="12" cy="12" r="5.2" fill="#40bcf4" />
                <circle cx="17" cy="12" r="5.2" fill="#ff8000" />
              </svg>
            </span>
            <span className="text-sm font-medium">Follow me on Letterboxd</span>
            <svg
              className="w-3.5 h-3.5 ml-auto text-gray-600 group-hover:text-gray-400 transition-colors"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
