"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Sample timeline data - this would typically come from a CMS or database
const timelineEvents = [
  {
    year: "2005",
    title: "Foundation",
    description: "Advance Lab Global was founded with the mission to provide high-quality laboratory equipment.",
  },
  {
    year: "2008",
    title: "Expansion",
    description: "Expanded product range and opened our first international office.",
  },
  {
    year: "2012",
    title: "Innovation Award",
    description: "Received industry recognition for our innovative laboratory solutions.",
  },
  {
    year: "2015",
    title: "Global Network",
    description: "Established a global distribution network reaching over 50 countries.",
  },
  {
    year: "2018",
    title: "Strategic Partnerships",
    description: "Formed strategic partnerships with leading manufacturers and research institutions.",
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Implemented advanced digital solutions to enhance customer experience and operational efficiency.",
  },
];

export default function CompanyTimeline() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          {timelineEvents.map((event, index) => (
            <div key={event.year} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-1/2">
                <div className={`${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                    {event.year}
                  </div>
                  <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
                  <p className="mt-2 text-muted-foreground">{event.description}</p>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-0">
                <div className="h-full w-0.5 bg-blue-200 dark:bg-blue-800 absolute" />
                <div className="h-6 w-6 rounded-full bg-blue-600 dark:bg-blue-500 z-10 border-4 border-white dark:border-slate-900" />
              </div>
              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-16">
        {timelineEvents.map((event, index) => (
          <motion.div 
            key={event.year} 
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-1/2">
              <div className={`${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  {event.year}
                </div>
                <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
                <p className="mt-2 text-muted-foreground">{event.description}</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center w-0">
              <div className="h-full w-0.5 bg-blue-200 dark:bg-blue-800 absolute" />
              <div className="h-6 w-6 rounded-full bg-blue-600 dark:bg-blue-500 z-10 border-4 border-white dark:border-slate-900" />
            </div>
            <div className="w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}