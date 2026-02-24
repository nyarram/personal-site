'use client'

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Java", "Javascript", "Python", "SQL", "C++", "HTML", "CSS", "React", "Node.js", "PyTorch", "TensorFlow", "Spring Boot"],
    color: { text: 'text-blue-400', border: 'border-blue-500/20', bg: 'bg-blue-500/10', heading: 'text-blue-400' }
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "Jira", "Git", "GitLab", "GitHub", "Kubernetes", "Kafka", "Jenkins", "CI/CD"],
    color: { text: 'text-indigo-400', border: 'border-indigo-500/20', bg: 'bg-indigo-500/10', heading: 'text-indigo-400' }
  },
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Microsoft Azure", "Google Cloud Platform"],
    color: { text: 'text-purple-400', border: 'border-purple-500/20', bg: 'bg-purple-500/10', heading: 'text-purple-400' }
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-14"
      >
        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Skills
        </span>
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className={`text-xs font-semibold mb-4 uppercase tracking-widest ${category.color.heading}`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`${category.color.bg} ${category.color.text} border ${category.color.border} px-3 py-1 rounded-full text-xs font-medium`}
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
