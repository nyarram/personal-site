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
    <section id="projects" className="py-20">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-700 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside">
              {project.points.map((point, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300 mb-2">{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 