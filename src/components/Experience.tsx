'use client'

import { motion } from 'framer-motion';

type ExperienceItem = {
  company: string;
  companyUrl: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Chewy",
    companyUrl: "https://www.chewy.com/",
    role: "Software Engineer",
    duration: "Apr 2025 – Present",
    location: "Minneapolis, MN",
    points: [
      "Built an allocation-level fulfillment engine sourcing single SKUs across multiple fulfillment centers (partial shipments, floor denials); scaled to 100% of production, unlocking $2M in savings",
      "Architected a Spring Boot EKS module bridging SNS to Kafka for real-time order notifications, with at-least-once delivery, order-keyed partitioning, and DLQ redrive; targets ~$2.2M in annual cost deflection",
      "Engineered a zero-downtime V1-to-V2 order-event migration across 50 SNS subscriptions, using a transactional outbox with stable order-ID bucketing to keep lifecycle schemas consistent without coordinated cutovers",
      "Developed an async payment-resiliency state machine on FIFO SQS/SNS and DLQs, decoupling Checkout from 3 synchronous payment gateways during 5xx outages to preserve order intake with a 3-day recovery SLA",
      "Led remediation of a distributed tax defect, using Snowflake lineage analysis to cut a 1.25M-line blast radius to 1,009 lines, and designed an FC-keyed consistency path across 3 core services to resolve a $391K historical variance"
    ]
  },
  {
    company: "Verizon (via Indigo Systems)",
    companyUrl: "http://indigoconsulting.com/",
    role: "Software Engineer",
    duration: "Sept 2023 – Apr 2025",
    location: "Chicago, IL",
    points: [
      "Built a distributed log-correlation engine (Spring Boot) over OpenSearch streams processing 100K+ daily audit events, using iterative connected-components to stitch fragmented events into IAM journeys; cut debugging time 50%",
      "Architected an LDAP identity-resolution module with a custom UnboundID connection pool (leak tracking, auto-rebinds), deployed on Docker/Kubernetes to support millions of monthly authentication operations",
      "Engineered custom Java authentication nodes for ForgeRock AM, enabling risk-based authentication and session state management through shared-state logic",
      "Automated ForgeRock AM deployments with Kubernetes and Helm, streamlining GCP-hosted upgrades, rollbacks, and multi-environment releases"
    ]
  },
  {
    company: "Oshkosh Corporation",
    companyUrl: "https://www.oshkoshcorp.com/",
    role: "Software Engineer Co-op",
    duration: "Jun 2022 – May 2023",
    location: "Oshkosh, WI",
    points: [
      "Architected GraphQL API endpoints with FastAPI for a fleet management platform, improving real-time analytics performance by 20%",
      "Crafted a fleet management platform in Python, enabling real-time vehicle telemetry and predictive maintenance to reduce fleet costs by 25%",
      "Implemented AWS S3 & EC2 for scalable data storage, lowering infrastructure costs by 15% while enhancing data accessibility",
      "Built RESTful APIs to integrate vehicle logs, streamlining fleet data processing and real-time monitoring"
    ]
  },
  {
    company: "University of Wisconsin, Department of IT (DoIT)",
    companyUrl: "https://it.wisc.edu/",
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
        <span className="text-gray-900 dark:text-white">
          Experience
        </span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/40 to-transparent" />

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
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/company"
                >
                  <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover/company:text-blue-500 dark:group-hover/company:text-blue-400 transition-colors">
                    {exp.company}
                  </h3>
                </a>
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
