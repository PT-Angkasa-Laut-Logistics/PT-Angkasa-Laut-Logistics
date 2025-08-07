"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    alt: "Professional team working on building plans",
  },
  {
    id: 2,
    image: "/images/slide2.png",
    alt: "Construction site planning",
  },
  {
    id: 3,
    image: "/images/hero-image4.png",
    alt: "Architecture and planning",
  },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!mounted) {
    return (
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/80 via-white/50 to-white/60" />
        </div>
        <div className="relative flex h-full items-center justify-center">
          <div className="container relative z-20 mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              PT Symbiocon Solusi Integra
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-white">
              We are an Integrated Solution Provider for Scientific Facility
              Construction
            </p>
            <div className="space-x-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="hover:bg-cobalt-80 bg-cobalt font-semibold dark:text-white"
                >
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white font-semibold hover:bg-white/80 dark:bg-gray-800 dark:text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen">
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/80 via-white/50 to-white/60" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-[21] -translate-y-1/2 rounded-full bg-white p-2 text-blue-800 transition-colors hover:bg-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-blue-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-[21] -translate-y-1/2 rounded-full bg-white p-2 text-blue-800 transition-colors hover:bg-white/30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-blue-800" />
      </button>

      {/* Content */}
      <div className="relative flex h-full items-center justify-center">
        <div className="container relative z-20 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-blue-800 sm:text-5xl md:text-6xl">
              PT Symbiocon Solusi Integra
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-sm text-black md:text-xl">
              We are an{" "}
              <span className="font-semibold text-blue-600">
                Integrated Solution
              </span>{" "}
              Provider for{" "}
              <span className="font-semibold text-blue-600">
                Scientific Facility
              </span>{" "}
              Construction
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="gap-2 space-x-4 max-md:flex max-md:flex-col"
            >
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-cobalt font-semibold hover:bg-cobalt/80 dark:text-white max-md:text-sm"
                >
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-black hover:bg-white/80 dark:text-white dark:hover:bg-gray-800 max-md:text-sm"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
