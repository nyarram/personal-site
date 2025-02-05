'use client'

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Java", "Javascript", "Python", "SQL", "C++", "HTML", "CSS", "React", "Node.js", "PyTorch", "TensorFlow", "Spring Boot"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "Jira", "Git", "GitLab", "GitHub", "Kubernetes", "Kafka", "Jenkins", "CI/CD"]
  },
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Microsoft Azure", "Google Cloud Platform"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"
      >
        Skills
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-8"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-white">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 