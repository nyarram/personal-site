'use client'

import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  points: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "Sustainable Product E-Commerce Site",
    description: "A full-stack MERN e-commerce platform for sustainable products with real-time inventory and order management.",
    technologies: ["React", "MongoDB", "Express", "Node.js", "REST API"],
    points: [
      "Built a MERN-based product catalog with React, HTML, CSS, and Express",
      "Deployed a MongoDB backend with efficient query indexing",
      "Established RESTful APIs for product submission and order management"
    ],
    githubUrl: "https://github.com/nyarram"
  },
  {
    title: "Urban Analysis using Computer Vision",
    description: "Deep learning pipeline for urban analytics — crowd counting and object detection with real-time visualization.",
    technologies: ["PyTorch", "TensorFlow", "React.js", "OpenCV"],
    points: [
      "Constructed deep learning pipeline for crowd counting and object detection",
      "Engineered object detection models achieving 85% mAP",
      "Designed React.js dashboard for real-time visualization"
    ],
    githubUrl: "https://github.com/nyarram"
  }
];

const ExternalLinkIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

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
            className="group relative bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:border-blue-400/40 dark:hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/[0.04] group-hover:to-indigo-500/[0.04] transition-all pointer-events-none" />

            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-base font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <div className="flex items-center gap-2 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <GithubIcon />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 leading-relaxed">{project.description}</p>

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
