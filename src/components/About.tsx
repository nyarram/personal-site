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
            I&apos;m a backend engineer at Chewy on the orders platform, building order management
            features in Java and Spring Boot and keeping them healthy in production: multi-FC
            fulfillment, payment resiliency, and event-driven integrations on AWS and Kafka.
          </p>
          <p>
            Outside of work I build tooling for AI agents. Litmus is an open-source harness that
            catches quality regressions in LLM pipelines before they ship, identity-broker gives
            agents short-lived, narrowly scoped credentials, and AstroDigest is a full-stack
            product that turns astronomy news into a weekly digest.
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
