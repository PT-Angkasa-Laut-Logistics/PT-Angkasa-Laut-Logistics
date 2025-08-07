"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative bg-white pb-24 pt-40">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              About Us
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-blue-100">
              Learn about our story, mission, and commitment to advancing
              laboratory science.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-40 dark:bg-slate-900 dark:text-white">
      <div className="absolute inset-0 opacity-30">
        {/* <div className="bg-grid-white/[0.2] absolute inset-0" /> */}
        <Image
          src="/images/about-header.jpg"
          alt="Laboratory equipment"
          fill
          className="object-cover"
        />
      </div>
      {/* Abstract background shapes */}
      <div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl" />
      <div className="absolute right-10 top-1/3 h-60 w-60 rounded-full bg-blue-400 opacity-20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-bold tracking-tight text-cobalt dark:text-gray-200 sm:text-5xl md:text-6xl"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-xl text-cobalt dark:text-gray-200"
          >
            Learn about our story, mission, and commitment to advancing
            laboratory science.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
