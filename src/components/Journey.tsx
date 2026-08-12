'use client'

import { motion } from 'framer-motion';

type JourneyItem = {
  place: string;
  institution?: string;
  duration: string;
  description: string;
};

const journey: JourneyItem[] = [
  {
    place: "Allentown, PA",
    duration: "Born",
    description: "Born in Allentown, Pennsylvania, and grew up nearby in Bethlehem, PA."
  },
  {
    place: "Bethlehem, PA",
    institution: "Asa Packer Elementary School",
    duration: "2007 – 2011",
    description: "Started school back home in Bethlehem."
  },
  {
    place: "Madhapur, Hyderabad",
    institution: "Manthan International School",
    duration: "2011 – 2013",
    description: "Moved to Hyderabad, India when I was 10. Finished 5th grade at Manthan International School."
  },
  {
    place: "Kompally, Hyderabad",
    institution: "Sadhu Vaswani International School",
    duration: "2013 – 2014",
    description: "7th grade at Sadhu Vaswani International School, Kompally."
  },
  {
    place: "Jubilee Hills, Hyderabad",
    institution: "P Obul Reddy Public School",
    duration: "2014 – 2017",
    description: "8th through 10th grade at P Obul Reddy Public School."
  },
  {
    place: "Gurgaon, Haryana",
    institution: "Lotus Valley International School",
    duration: "2017 – 2019",
    description: "Moved to Gurgaon and finished 11th and 12th grade at Lotus Valley International School."
  },
  {
    place: "Seattle, Washington",
    institution: "University of Washington",
    duration: "2019 – 2021",
    description: "Started my undergraduate degree before transferring."
  },
  {
    place: "Madison, Wisconsin",
    institution: "University of Wisconsin",
    duration: "2021 – 2023",
    description: "Completed my undergraduate degree."
  }
];

export const Journey = () => {
  return (
    <section id="journey" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-14"
      >
        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Journey
        </span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/60 via-indigo-500/30 to-transparent" />

        {journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-14 mb-10 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-5 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/40 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
            </div>

            {/* Card */}
            <div className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:border-blue-400/30 dark:hover:border-blue-500/30 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{item.place}</h3>
                <span className="text-xs text-gray-500 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                  {item.duration}
                </span>
              </div>
              {item.institution && (
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">{item.institution}</p>
              )}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
