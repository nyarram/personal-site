'use client'

import { motion } from 'framer-motion';

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Indigo Systems & Technology Consulting Inc",
    role: "Software Engineer",
    duration: "Sept 2023 – Present",
    location: "Chicago, IL",
    points: [
      "Architected a Kafka-integrated log analysis backend with Java Spring Boot & OpenSearch, processing 100K+ daily log entries and improving log query efficiency",
      "Developed a React dashboard on a Node.js server, enabling real-time authentication tracking and log visualization, reducing debugging time by 50%",
      "Engineered custom Java authentication nodes for Forgerock AM, facilitating risk-based authentication and session state management through shared-state logic",
      "Designed a high-throughput, low-latency CRUD API on Docker, supporting 1M+ monthly identity operations across multi-team microservices",
      "Automated ForgeRock AM deployments via Kubernetes and Helm, streamlining GCP-hosted upgrades, rollbacks, and multi-environment deployments",
      "Developing a Python-based fraud detection system, integrating IP analysis, login patterns, and anomaly detection, reducing false-positive security flags by 10%"
    ]
  },
  {
    company: "Oshkosh Corporation",
    role: "Co-op Software Engineer",
    duration: "Jun 2022 – May 2023",
    location: "Oshkosh, WI",
    points: [
      "Crafted a fleet management platform in Python, enabling real-time vehicle telemetry and predictive maintenance to reduce fleet costs by 25%",
      "Implemented AWS S3 & EC2 for scalable data storage, lowering infrastructure costs by 15% while enhancing data accessibility",
      "Optimized PostgreSQL indexing strategies, improving query performance and real-time analytics by 20%",
      "Built RESTful APIs to integrate vehicle logs, streamlining fleet data processing and real-time monitoring"
    ]
  },
  {
    company: "University of Wisconsin, Department of IT (DoIT)",
    role: "Identity and Access Management (IAM) Intern",
    duration: "Oct 2021 – May 2022",
    location: "Madison, WI",
    points: [
      "Enhanced MFA reliability by implementing secure access solutions in C++, reducing unauthorized access incidents by 15%",
      "Automated identity data management tasks using SQL and Azure, improving data accuracy and efficiency by 20%",
      "Increased system reliability by 30% through MSTest-driven security API validation",
      "Contributed to Agile development in a Scrum environment, participating in biweekly sprints, sprint planning, and daily standups"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-14"
      >
        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/60 via-indigo-500/30 to-transparent" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            className="relative pl-14 mb-10 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-5 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/40 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
            </div>

            {/* Card */}
            <div className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:border-blue-400/30 dark:hover:border-blue-500/30 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                <span className="text-xs text-gray-500 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              <div className="flex flex-wrap gap-x-4 mb-4">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{exp.role}</p>
                <p className="text-sm text-gray-400">{exp.location}</p>
              </div>
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
