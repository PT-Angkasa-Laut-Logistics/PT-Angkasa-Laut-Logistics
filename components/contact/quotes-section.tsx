"use client";
import { ANIMATE_LEFT } from "@/lib/animation-config";
import { motion } from "framer-motion";
const text = `"QUALITY" without compromising "SAFETY", everlasting "INNOVATION" for a maximum "CLIENT SATISFACTION!"`;
const words = text.split(" ");
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export default function QuotesSection() {
  return (
    <motion.main
      whileInView="visible"
      initial="hidden"
      variants={ANIMATE_LEFT}
      className="rounded-2xl bg-gray-200 p-4 md:p-8"
    >
      <motion.h1
        variants={containerVariants}
        className="text-center text-sm text-cobalt md:text-2xl"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="mx-1 inline-block font-semibold"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </motion.main>
  );
}
