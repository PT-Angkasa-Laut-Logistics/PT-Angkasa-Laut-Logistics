"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductsHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative bg-gradient-to-r from-white to-white pb-24 pt-40 dark:from-white dark:to-slate-900">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Products and Services
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-white pb-40 pt-52 dark:bg-slate-900 dark:text-white">
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <Image
          src={"/images/slide2.png"}
          alt={"Background image"}
          fill
          className={"object-cover"}
        ></Image>
        <div className="bg-grid-white/[0.2] absolute inset-0" />
      </div>

      {/* Abstract background shapes */}
      <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl" />
      <div className="absolute bottom-10 left-1/4 h-60 w-60 rounded-full bg-blue-400 opacity-20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-bold tracking-tight text-cobalt dark:text-gray-200 sm:text-5xl md:text-6xl"
          >
            Products and Services
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
