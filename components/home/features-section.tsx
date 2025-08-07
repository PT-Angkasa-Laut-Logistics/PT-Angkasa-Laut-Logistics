"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Facility = {
  name: string;
  iconPath: string;
};

const facilities: Facility[] = [
  { name: "Stem Cell Processing Facility", iconPath: "/svg/Group.svg" },
  { name: "Industrial QC Laboratory", iconPath: "/svg/qc.svg" },
  { name: "Molecular Biology Laboratory", iconPath: "/svg/Molecular.svg" },
  { name: "Educational Teaching Laboratory", iconPath: "/svg/Educational.svg" },
  { name: "Clinical Laboratory", iconPath: "/svg/Clinical.svg" },
  { name: "Clean Room", iconPath: "/svg/Cleanroom.svg" },
  { name: "Pharmaceutical Manufacturing", iconPath: "/svg/Pharma.svg" },
  { name: "Biocontainment Laboratory", iconPath: "/svg/Picture6.svg" },
  { name: "Animal Research Facility", iconPath: "/svg/Animal.svg" },
  { name: "Modular Operating Theater", iconPath: "/svg/Modular.svg" },
  { name: "Research Laboratory", iconPath: "/svg/Research.svg" },
  { name: "Mobile Laboratory on Container", iconPath: "/svg/Mobile.svg" },
];

const FacilityCard = ({ name, iconPath }: Facility) => (
  <div className="flex min-h-[90px] items-center rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-slate-900 sm:p-6">
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
      <h3 className="text-left text-base font-semibold text-gray-900 dark:text-gray-300 sm:text-lg">
        {name}
      </h3>
    </div>
  </div>
);

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-xl font-bold tracking-tight text-blue-800 sm:text-4xl">
            We Don&apos;t Just Build… <br />
            ...We Actualize Your Concepts
          </h2>
        </motion.div>

        <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full w-full"
            >
              <FacilityCard name={facility.name} iconPath={facility.iconPath} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
