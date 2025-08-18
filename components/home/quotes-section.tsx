"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function QuotesSection() {
  return (
    <section className="mb-10 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl text-center"
        >
          <div className="relative w-full overflow-y-hidden rounded-lg bg-gradient-to-r from-aqua to-cobalt py-10 shadow-lg sm:rounded-full sm:px-[150px] sm:py-20">
            <Image
              src="/images/plane-home.png"
              alt="Background image"
              width={100}
              height={100}
              className="absolute top-0 mx-auto h-[450px] w-[960px] object-cover opacity-20"
            />
            <p className="relative text-lg font-medium tracking-tight text-white sm:text-4xl">
              "Borders are just lines on a map. We turn them into pathways,
              ensuring your business reaches every market with confidence and
              trust."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
