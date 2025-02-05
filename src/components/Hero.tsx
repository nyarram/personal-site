'use client'

import { motion } from 'framer-motion';
import { SocialIcon } from '@/components/SocialIcon';

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Nikhil Yarram
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Software Engineer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Experienced software engineer specializing in full-stack development,
          cloud architecture, and identity management solutions.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <SocialIcon 
            href="https://www.linkedin.com/in/nikhil-yarram-845bb7167"
            platform="linkedin"
          />
          <SocialIcon 
            href="https://github.com/yourgithub"
            platform="github"
          />
          <SocialIcon 
            href="mailto:yarramnikhil@gmail.com"
            platform="email"
          />
        </div>
      </div>
    </motion.section>
  );
}; 