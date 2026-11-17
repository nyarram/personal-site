'use client'

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "TypeScript", "SQL", "Kotlin"],
  },
  {
    title: "Backend & Architecture",
    skills: ["Spring Boot", "REST APIs", "GraphQL", "Microservices", "JPA / Hibernate", "JUnit / Mockito", "Gatling"],
  },
  {
    title: "Data & Messaging",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Flyway", "OpenSearch / Elasticsearch"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS (SNS, SQS, EC2, S3)", "Docker", "Kubernetes / EKS", "Terraform", "GitHub Actions", "Jenkins"],
  },
  {
    title: "AI & Tooling",
    skills: ["RAG pipelines", "LLM APIs", "Agent frameworks", "MCP", "LangChain", "LLM-as-judge evals", "OpenTelemetry", "Claude Code", "Cursor"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native"],
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
        <span className="text-gray-900 dark:text-white">
          Skills
        </span>
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xs font-semibold mb-4 uppercase tracking-widest text-blue-400">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-medium"
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
