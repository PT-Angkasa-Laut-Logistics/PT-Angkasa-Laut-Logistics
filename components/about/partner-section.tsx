"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ANIMATE_DOWN,
  ANIMATE_SCALE_UP,
  ANIMATE_UP,
  CONTAINER_ANIMATION,
} from "@/lib/animation-config";
import Link from "next/link";

const partner = [
  {
    id: 1,
    text: "Turnkey Solutions",
  },
  {
    id: 2,
    text: "Experienced and Certified Professionals",
  },
  {
    id: 3,
    text: "Commitment to Quality and Safety",
  },
  {
    id: 4,
    text: "Innovative Solutions to Meet Specific Needs",
  },
  {
    id: 5,
    text: "Experienced and Certified Professionals",
  },
  {
    id: 6,
    text: "Providing High Quality Product for Laboratory Outfitting",
  },
];
const sponsor = [
  {
    img: "/images/advance-lab-sponsor.png",
    href: "https://advancelabglobal.com/",
  },
  {
    img: "/images/sponsor2.png",
    href: "http://www.adikaryabakti.com/",
  },
  {
    img: "/images/sponsor3.png",
    href: "https://www.shd.it/en/company/",
  },
];
export default function PartnerSection() {
  return (
    <section className="p-8 dark:bg-slate-900 lg:p-16">
      <div className="container mx-auto">
        <div className="mx-auto mb-8 lg:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold tracking-tight sm:text-4xl lg:text-3xl">
            Why Partner with Us?
          </h2>
          <section className="mt-8 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-16">
            <motion.figure
              variants={ANIMATE_SCALE_UP}
              initial="hidden"
              whileInView="visible"
            >
              <Image
                src={"/images/meeting.jpg"}
                width={600}
                height={440}
                alt={"meeting"}
                className="rounded-xl object-cover max-lg:mx-auto max-lg:h-[220px]"
              ></Image>
            </motion.figure>
            <motion.div
              variants={CONTAINER_ANIMATION}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col gap-4"
            >
              {partner.map((item, index) => (
                <article
                  className="h-fit rounded-2xl border border-gray-200 p-3 dark:border-gray-200/10 lg:p-4"
                  key={index}
                >
                  <div className="flex items-center gap-4">
                    <h2 className="flex aspect-square w-fit items-center justify-center rounded-full bg-gray-100 px-1 py-1 dark:bg-gray-100/30 md:px-2 md:py-2"></h2>
                    <motion.p
                      variants={ANIMATE_UP}
                      className="font-semibold max-lg:text-sm"
                    >
                      {item.text}
                    </motion.p>
                  </div>
                </article>
              ))}
            </motion.div>
          </section>
          <section className="mt-16">
            <figure className="flex items-center justify-around gap-2">
              {sponsor.map((item, index) => (
                <motion.figure
                  variants={ANIMATE_SCALE_UP}
                  initial="hidden"
                  whileInView="visible"
                  key={index}
                >
                  <Link href={item.href}>
                    <Image
                      src={item.img}
                      width={200}
                      height={50}
                      alt={"sponsor"}
                      className="aspec-auto h-10 object-contain md:h-16"
                    ></Image>
                  </Link>
                </motion.figure>
              ))}
            </figure>
          </section>
        </div>
      </div>
    </section>
  );
}
