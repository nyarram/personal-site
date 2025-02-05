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
    <section id="experience" className="py-20">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"
      >
        Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-700 dark:text-white">{exp.company}</h3>
            <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
            <p className="text-gray-500 dark:text-gray-400">{exp.duration} | {exp.location}</p>
            <ul className="mt-4 list-disc list-inside">
              {exp.points.map((point, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300 mb-2">{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 