"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Facility = {
  name: string;
  description: string;
  iconPath: string;
  imagePath: string;
};

const facilities: Facility[] = [
  {
    name: "Consultation & Initial Planning",
    description: "Consultation & Initial Planning.",
    iconPath: "/svg/Group.svg",
    imagePath: "/images/facility1.jpg",
  },
  {
    name: "Custom Clearance & Documentation",
    description: "Your Goods Clear, Fast, Compliant",
    iconPath: "/svg/qc.svg",
    imagePath: "/images/facility2.jpg",
  },
  {
    name: "Shipping & Receiving Simplified",
    description: "Effortless Cargo Flow, Every Time",
    iconPath: "/svg/Molecular.svg",
    imagePath: "/images/facility3.jpg",
  },
];

const FacilityCard = ({
  name,
  description,
  iconPath,
  isSelected,
  onClick,
}: Facility & { isSelected: boolean; onClick: () => void }) => (
  <div
    onClick={onClick}
    className={`flex h-full min-h-[90px] cursor-pointer items-center rounded-xl border p-4 shadow-md transition-all duration-300 sm:p-6 ${
      isSelected
        ? "bg-cobalt text-white"
        : "bg-slate-100 text-gray-800 dark:border-gray-800 dark:bg-slate-900"
    } hover:shadow-lg`}
  >
    <div className="mr-5 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-100">
      <Image
        src={iconPath}
        alt={name}
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />
    </div>
    <div className="flex flex-1 flex-col justify-center">
      <h3
        className={`text-left text-base font-semibold sm:text-lg ${
          isSelected ? "text-white" : "text-cobalt dark:text-gray-300"
        }`}
      >
        {name}
      </h3>
      <p
        className={`text-left text-sm ${
          isSelected ? "text-gray-200" : "text-gray-500"
        }`}
      >
        {description}
      </p>
    </div>
  </div>
);

export default function FeaturesSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-x-hidden bg-slate-100 py-24 dark:bg-slate-950">
      <Image
        src="/images/world.png"
        alt="Background image"
        width={100}
        height={100}
        className="absolute -top-16 left-48 h-[720px] w-[1200px] object-cover"
      />

      <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-gray-600 sm:text-4xl">
            How <span className="text-aqua">Angkasa Laut</span>{" "}
            <span className="text-cobalt">Logistics</span> Streamlines Your
            International Business
          </h2>
          <p className="mb-4 text-sm font-normal tracking-tight text-gray-500 md:text-lg">
            We're here to streamline every step of your international freight
            shipment.
          </p>
        </motion.div>

        {/* Grid Card */}
        <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full w-full"
            >
              <FacilityCard
                {...facility}
                isSelected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
              />
            </motion.div>
          ))}
        </div>

        {/* Gambar besar */}
        <AnimatePresence mode="wait">
          {selectedIndex !== null && (
            <motion.div
              key={facilities[selectedIndex].imagePath} // biar trigger animasi tiap ganti gambar
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-12 flex justify-center"
            >
              <Image
                src={facilities[selectedIndex].imagePath}
                alt={facilities[selectedIndex].name}
                width={1000}
                height={500}
                className="rounded-xl object-cover shadow-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
