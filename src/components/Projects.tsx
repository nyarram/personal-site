'use client'

import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  points: string[];
};

const projects: Project[] = [
  {
    title: "Sustainable Product E-Commerce Site",
    description: "A full-stack MERN e-commerce platform",
    technologies: ["React", "MongoDB", "Express", "Node.js", "REST API"],
    points: [
      "Built a MERN-based product catalog with React, HTML, CSS, and Express",
      "Deployed a MongoDB backend with efficient query indexing",
      "Established RESTful APIs for product submission and order management"
    ]
  },
  {
    title: "Urban Analysis using Computer Vision",
    description: "Deep learning pipeline for urban analytics",
    technologies: ["PyTorch", "TensorFlow", "React.js", "OpenCV"],
    points: [
      "Constructed deep learning pipeline for crowd counting and object detection",
      "Engineered object detection models achieving 85% mAP",
      "Designed React.js dashboard for real-time visualization"
    ]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-14"
      >
        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:border-blue-400/40 dark:hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
          >
            <h3 className="text-base font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 px-3 py-0.5 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className="space-y-2">
              {project.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
