"use client";

import { motion } from "framer-motion";

export default function QuotesSection() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl text-center"
        >
          <div className="w-full rounded-lg bg-blue-600 py-10 shadow-lg sm:rounded-full sm:px-[150px] sm:py-20">
            <p className="text-lg font-medium tracking-tight text-white sm:text-4xl">
              “We are more than just a logistics service. We connect countries
              and opportunities. Global solutions for your local needs.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
