"use client";
import { cn } from "@/lib/utils";
import { Download, Eye } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ANIMATE_DOWN,
  ANIMATE_UP,
  CONTAINER_ANIMATION,
} from "@/lib/animation-config";

const corevalue = [
  {
    title: "Expertise",
    description:
      "Our foundation is built upon a deep well of expertise in laboratory construction. Our team comprises seasoned professionals, including experienced designers, skilled engineers, and meticulous project managers, each possessing a comprehensive understanding of the unique demands of laboratory environments. This collective knowledge ensures that every project benefits from informed decision-making, precise execution, and a commitment to delivering solutions that meet the highest standards of functionality and performance.",
  },
  {
    title: "Compliance",
    description:
      "Adherence to stringent safety regulations and industry standards is paramount in all our endeavors. We are dedicated to ensuring that every laboratory facility we construct not only meets but often exceeds all relevant local, national, and international compliance requirements. Our meticulous attention to detail in areas such as biosafety, chemical handling, ventilation, and emergency egress guarantees a safe and secure working environment for researchers and personnel.",
  },
  {
    title: "Innovation",
    description:
      "We are committed to staying at the forefront of laboratory design and construction methodologies. We continuously explore and integrate cutting-edge technologies, sustainable practices, and forward-thinking design concepts to create laboratory spaces that are not only functional today but also adaptable to the evolving needs of scientific advancement. Our innovative approach ensures efficient workflows, optimized resource utilization, and the creation of inspiring environments that foster scientific discovery.",
  },
];

export default function AboutContent() {
  const [showPdf, setShowPdf] = useState(false);
  const pdfUrl = "/pdf/SYMBIOCON COMP PROFILE 2025.pdf";
  return (
    <div className="flex flex-col">
      <section className="grid gap-16 lg:grid-cols-2">
        <motion.article
          className="flex flex-col gap-4 max-lg:order-2 lg:gap-8"
          variants={CONTAINER_ANIMATION}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <motion.h2
              variants={ANIMATE_UP}
              className="mb-4 text-xl font-bold lg:text-2xl"
            >
              Integrated Solution for Laboratory Facility Construction
            </motion.h2>
            <motion.p
              variants={ANIMATE_UP}
              className="text-muted-foreground max-lg:text-sm"
            >
              In 2025, we commenced our initial endeavors to establish ourselves
              as a company capable of providing comprehensive solutions for the
              construction of laboratory facilities. Our mission is to offer a
              business model wherein clients can access an encompassing suite of
              services, ranging from initial planning and construction to the
              procurement of interior components and laboratory equipment. All
              services supported by a team of expert possessing a thorough
              understanding of prevailing laboratory standards and regulations.
            </motion.p>
          </div>
          <motion.p
            variants={ANIMATE_UP}
            className="text-muted-foreground max-lg:text-sm"
          >
            Our vision is to actualize our clients requirements for laboratory
            facilities that are innovatively planned, compliant with safety
            imperatives, and operationally efficient, thereby fostering the
            advancement of science and technology.
          </motion.p>
          <div className="flex items-center gap-4">
            <a target="_blank" href={pdfUrl} rel="noopener noreferrer">
              <Button
                variant="default"
                className="flex items-center gap-2 bg-cobalt hover:bg-cobalt/90 dark:text-gray-200"
              >
                <Eye className="h-4 w-4" /> View Profile
              </Button>
            </a>
            {/* <a download="company-profile.pdf" href={pdfUrl}>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" /> Download PDF
              </Button>
            </a> */}
          </div>
        </motion.article>

        <figure className="relative mb-6 flex h-40 w-full overflow-hidden rounded-2xl bg-gray-100 max-lg:order-1 md:h-56 lg:h-96">
          {/* <Image
            src="/images/logo.svg"
            alt="Laboratory equipment"
            fill
            className="object-contain"
          /> */}
          <video
            src="/images/logo-video.mp4"
            className="w-full rounded-lg object-cover"
            autoPlay
            muted
          ></video>
        </figure>
      </section>

      <section className="mt-8 flex flex-col rounded-3xl bg-gray-100 px-4 py-4 dark:bg-gray-200/10 md:mt-16 md:px-16 md:py-12">
        <h1 className="text-center text-2xl font-bold lg:text-3xl">
          Our Core Values
        </h1>

        <motion.div
          variants={CONTAINER_ANIMATION}
          initial="hidden"
          whileInView="visible"
          className="mt-8 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-16"
        >
          {corevalue.map((item, index) => (
            <motion.article
              variants={ANIMATE_UP}
              key={index}
              className="flex flex-col gap-2 rounded-xl bg-white p-4 dark:bg-gray-600/10 lg:gap-4"
            >
              <motion.h2
                variants={ANIMATE_UP}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg font-semibold text-cobalt lg:text-2xl"
              >
                {item.title}
              </motion.h2>
              <motion.p
                variants={ANIMATE_UP}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-muted-foreground max-lg:text-sm"
              >
                {item.description}
              </motion.p>
            </motion.article>
          ))}
        </motion.div>
      </section>
      {/* {showPdf && (
        <div className="mt-8 overflow-hidden rounded-lg border border-border">
          <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2">
            <h4 className="font-medium">Company Profile Preview</h4>
            <Button variant="ghost" size="sm" onClick={() => setShowPdf(false)}>
              Close
            </Button>
          </div>
          <iframe
            src={`${pdfUrl}#toolbar=0`}
            className="h-[500px] w-full"
            title="Company Profile"
          />
        </div>
      )} */}
    </div>
  );
}
