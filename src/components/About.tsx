'use client'

import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">About</h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            I&apos;m a backend engineer at Chewy, working on the order platform: event-driven
            systems on AWS, payment failure recovery, and split-fulfillment logic.
          </p>
          <p>
            Outside of work I build things I&apos;d want to use. AstroDigest is a full-stack
            product that turns astronomy news into a weekly digest, and Litmus is an
            open-source harness that catches quality regressions in LLM pipelines before
            they ship.
          </p>
          <p>
            I studied at the University of Washington and the University of Wisconsin–Madison.
            I&apos;m based in Minneapolis and relocating to the Bay Area.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
