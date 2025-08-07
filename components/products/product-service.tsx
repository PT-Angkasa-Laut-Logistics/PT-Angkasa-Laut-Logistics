"use client";
import {
  ANIMATE_SCALE_DOWN,
  ANIMATE_UP,
  CONTAINER_ANIMATION,
  CONTAINER_NON_STAGGER,
} from "@/lib/animation-config";
import { motion } from "framer-motion";

export default function ProductService() {
  return (
    <motion.section
      variants={CONTAINER_NON_STAGGER}
      initial="hidden"
      whileInView="visible"
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            variants={ANIMATE_SCALE_DOWN}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Our Services
          </motion.h2>
          {/* <motion.p
            variants={ANIMATE_SCALE_DOWN}
            className="text-lg text-muted-foreground"
          >
            Browse our diverse range of laboratory equipment and supplies
            organized by category to find exactly what you need.
          </motion.p> */}
        </div>
      </div>
      <motion.ul
        variants={CONTAINER_ANIMATION}
        initial="hidden"
        whileInView="visible"
        className="grid gap-8 px-4 md:grid-cols-4 md:px-16"
      >
        <motion.figure
          variants={ANIMATE_UP}
          className="space-y-6 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800"
        >
          <motion.div
            variants={ANIMATE_SCALE_DOWN}
            className="flex items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8"
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                d="M5.25 30.1875V36.75H11.8125L31.1675 17.3775L24.605 10.815L5.25 30.1875ZM39.5675 32.13L32.13 39.5675L23.03 30.4675L26.1275 27.37L27.8775 29.12L32.2 24.78L34.685 27.265L32.13 29.75L33.985 31.5L36.47 29.05L39.5675 32.13ZM11.5675 18.9525L2.4325 9.87L9.87 2.4325L12.95 5.53L8.62749 9.87L10.5 11.725L14.805 7.38499L17.29 9.87L14.805 12.3375L16.555 14.0875L11.5675 18.9525ZM36.2425 12.25C36.925 11.5675 36.925 10.5 36.2425 9.7825L32.1475 5.7575C31.5 5.075 30.3625 5.075 29.68 5.7575L26.46 8.96L33.0225 15.5225L36.2425 12.25Z"
                fill="#004AAD"
              />
            </svg>
            <h2 className="text-xl font-semibold dark:text-gray-200">
              Interior Design
            </h2>
          </motion.div>
          <motion.p
            variants={ANIMATE_SCALE_DOWN}
            className="text-muted-foreground max-md:text-sm"
          >
            Our interior design service focusing on creating functional, safe,
            and inspiring laboratory spaces tailored to your specific needs. We
            meticulously plan layouts, optimize workflow, and select materials
            that meet stringent laboratory requirements, including durability,
            cleanability, and chemical resistance. Our designs prioritize
            ergonomics and user comfort, ensuring a productive and healthy
            environment that supports scientific discovery and innovation.
          </motion.p>
        </motion.figure>
        <motion.figure
          variants={ANIMATE_UP}
          className="space-y-6 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800"
        >
          <motion.div
            variants={ANIMATE_SCALE_DOWN}
            className="flex items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8"
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                d="M5.25 30.1875V36.75H11.8125L31.1675 17.3775L24.605 10.815L5.25 30.1875ZM39.5675 32.13L32.13 39.5675L23.03 30.4675L26.1275 27.37L27.8775 29.12L32.2 24.78L34.685 27.265L32.13 29.75L33.985 31.5L36.47 29.05L39.5675 32.13ZM11.5675 18.9525L2.4325 9.87L9.87 2.4325L12.95 5.53L8.62749 9.87L10.5 11.725L14.805 7.38499L17.29 9.87L14.805 12.3375L16.555 14.0875L11.5675 18.9525ZM36.2425 12.25C36.925 11.5675 36.925 10.5 36.2425 9.7825L32.1475 5.7575C31.5 5.075 30.3625 5.075 29.68 5.7575L26.46 8.96L33.0225 15.5225L36.2425 12.25Z"
                fill="#004AAD"
              />
            </svg>
            <h2 className="text-xl font-semibold dark:text-gray-200">
              Specialized Consultancy
            </h2>
          </motion.div>
          <motion.p
            variants={ANIMATE_SCALE_DOWN}
            className="text-muted-foreground max-md:text-sm"
          >
            We offer specialized consultancy services, leveraging our deep
            expertise in critical laboratory environments such as Cara Pembuatan
            Obat yang Baik (CPOB), Stem Cell Processing Facility, Animal
            Research Facility, Bio-containment facilities, and Cleanrooms. Our
            consultants provide comprehensive guidance on regulatory compliance,
            risk assessment, containment strategies, and the implementation of
            specific environmental controls. We ensure your facility adheres to
            the highest safety standards and operational requirements, providing
            you with the knowledge and strategies for a successful and compliant
            laboratory.
          </motion.p>
        </motion.figure>
        <motion.figure
          variants={ANIMATE_UP}
          className="space-y-6 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800"
        >
          <motion.div
            variants={ANIMATE_SCALE_DOWN}
            className="flex items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8"
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                d="M5.25 30.1875V36.75H11.8125L31.1675 17.3775L24.605 10.815L5.25 30.1875ZM39.5675 32.13L32.13 39.5675L23.03 30.4675L26.1275 27.37L27.8775 29.12L32.2 24.78L34.685 27.265L32.13 29.75L33.985 31.5L36.47 29.05L39.5675 32.13ZM11.5675 18.9525L2.4325 9.87L9.87 2.4325L12.95 5.53L8.62749 9.87L10.5 11.725L14.805 7.38499L17.29 9.87L14.805 12.3375L16.555 14.0875L11.5675 18.9525ZM36.2425 12.25C36.925 11.5675 36.925 10.5 36.2425 9.7825L32.1475 5.7575C31.5 5.075 30.3625 5.075 29.68 5.7575L26.46 8.96L33.0225 15.5225L36.2425 12.25Z"
                fill="#004AAD"
              />
            </svg>
            <h2 className="text-xl font-semibold dark:text-gray-200">
              Project Management
            </h2>
          </motion.div>
          <motion.p
            variants={ANIMATE_SCALE_DOWN}
            className="text-muted-foreground max-md:text-sm"
          >
            Our dedicated project management team provides seamless oversight
            from project inception to final handover. We meticulously plan
            timelines, manage budgets, coordinate with all stakeholders, and
            ensure efficient execution of every phase of your laboratory
            construction or renovation project. Our proactive approach, clear
            communication, and commitment to quality control guarantee a smooth
            and successful project delivery, minimizing disruption and
            maximizing value.
          </motion.p>
        </motion.figure>
        <motion.figure
          variants={ANIMATE_UP}
          className="space-y-6 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800"
        >
          <motion.div
            variants={ANIMATE_SCALE_DOWN}
            className="flex items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8"
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                d="M5.25 30.1875V36.75H11.8125L31.1675 17.3775L24.605 10.815L5.25 30.1875ZM39.5675 32.13L32.13 39.5675L23.03 30.4675L26.1275 27.37L27.8775 29.12L32.2 24.78L34.685 27.265L32.13 29.75L33.985 31.5L36.47 29.05L39.5675 32.13ZM11.5675 18.9525L2.4325 9.87L9.87 2.4325L12.95 5.53L8.62749 9.87L10.5 11.725L14.805 7.38499L17.29 9.87L14.805 12.3375L16.555 14.0875L11.5675 18.9525ZM36.2425 12.25C36.925 11.5675 36.925 10.5 36.2425 9.7825L32.1475 5.7575C31.5 5.075 30.3625 5.075 29.68 5.7575L26.46 8.96L33.0225 15.5225L36.2425 12.25Z"
                fill="#004AAD"
              />
            </svg>
            <h2 className="text-xl font-semibold dark:text-gray-200">
              Construction and Renovation
            </h2>
          </motion.div>
          <motion.p
            variants={ANIMATE_SCALE_DOWN}
            className="text-muted-foreground max-md:text-sm"
          >
            Our construction and renovation services are executed with precision
            and a deep understanding of laboratory-specific requirements. Our
            skilled tradespeople adhere to the highest standards of workmanship,
            utilizing appropriate materials and techniques to build or modify
            your laboratory spaces according to the agreed-upon design and
            specifications. We are committed to delivering durable, functional,
            and compliant facilities, whether it&apos;s a new build or a complex
            renovation, ensuring your laboratory infrastructure supports your
            scientific endeavors for years to come
          </motion.p>
        </motion.figure>
      </motion.ul>
    </motion.section>
  );
}
