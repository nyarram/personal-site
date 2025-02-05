'use client'

import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"
      >
        Get in Touch
      </motion.h2>
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
        >
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:yarramnikhil@gmail.com"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>yarramnikhil@gmail.com</span>
            </a>
            <a
              href="tel:+12064651271"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>(206) 465-1271</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-yarram-845bb7167"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 