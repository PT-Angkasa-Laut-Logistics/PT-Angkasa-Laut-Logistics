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
      <section className="relative flex h-[90vh] items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bg-about.png"
            alt="Laboratory equipment"
            fill
            className="object-cover"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex h-[90vh] items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/bg-about.png"
          alt="Laboratory equipment"
          fill
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto flex items-center justify-center gap-x-16 lg:gap-x-96">
        <div className="max-w-md">
          <p className="mb-6 text-lg text-white dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            iste aperiam nulla explicabo expedita commodi at corrupti, fuga
            maxime ullam officiis molestias provident facere, debitis nesciunt
            nam aliquam laudantium pariatur itaque accusantium nobis magnam
            tenetur. Non aut cum deleniti minima fuga optio nam deserunt minus
            velit sed iusto, hic dolor.
          </p>
        </div>

        <div className="h-auto">
          <Image
            src="/images/al-full-logo.png"
            alt="Logo Perusahaan"
            width={350}
            height={350}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
