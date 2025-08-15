"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ANIMATE_DOWN,
  ANIMATE_UP,
  CONTAINER_ANIMATION,
} from "@/lib/animation-config";

export default function LocationSection() {
  return (
    <section className="relative my-10 grid gap-8 overflow-x-hidden px-20 lg:grid-cols-2">
      <motion.article
        className="flex flex-col justify-center gap-4 max-lg:order-2 lg:gap-8"
        variants={CONTAINER_ANIMATION}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div>
          <motion.h2
            variants={ANIMATE_UP}
            className="mb-4 text-xl font-semibold lg:text-4xl"
          >
            <span className="text-aqua">Start your</span>
            <span className="text-cobalt"> logistics journey!</span>
          </motion.h2>
          <motion.p
            variants={ANIMATE_UP}
            className="text-muted-foreground max-lg:text-sm"
          >
            Your Global Business Begins Here
          </motion.p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button
              size="sm"
              variant="outline"
              className="bg-cobalt font-medium text-white hover:bg-cobalt/80 hover:text-white dark:bg-gray-800 dark:text-white"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </motion.article>

      <Image
        src="/images/location-addons.png"
        alt="Location-addons"
        width={1000}
        height={500}
        className="absolute left-1/3 top-1/3 object-cover"
      />

      <figure className="relative mb-6 flex h-40 w-full overflow-hidden rounded-2xl border-4 border-aqua bg-gray-100 max-lg:order-1 md:h-56 lg:h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5937.0363462383775!2d106.99501481456106!3d-6.237636714776724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d64f0fdd235%3A0xc65033968635c51e!2sStasiun%20bekasi!5e0!3m2!1sid!2sid!4v1754665938214!5m2!1sid!2sid"
          width="650"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </figure>
    </section>
  );
}
