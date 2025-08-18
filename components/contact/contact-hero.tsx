"use client";

import {
  ANIMATE_DOWN,
  ANIMATE_UP,
  CONTAINER_ANIMATION,
} from "@/lib/animation-config";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ContactHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative bg-gradient-to-br from-white via-white to-white pb-24 pt-40 dark:from-white dark:to-slate-900">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-blue-100">
              Get in touch with our team for inquiries about our products and
              services.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-sky-500 from-5% to-cobalt pb-24 pt-32 dark:bg-slate-900 dark:text-white">
      {/* Abstract background shapes */}
      <div className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl" />
      <div className="absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-blue-400 opacity-20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={CONTAINER_ANIMATION}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl space-y-4 text-center"
        >
          <motion.h2
            variants={ANIMATE_UP}
            className="mx-auto w-fit rounded-full bg-slate-100 px-4 py-2 font-semibold text-cobalt"
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.h1
            variants={ANIMATE_UP}
            className="mb-6 font-sans text-4xl font-medium tracking-tight text-white dark:text-gray-200 sm:text-5xl md:text-6xl"
          >
            Start Your Logistics Journey
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
