"use client";

import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/mock/product-data";

import {
  AccordionContent,
  AccordionTrigger,
  Accordion,
  AccordionItem,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export default function ProductGrid({ category }: { category: string }) {
  const [mounted, setMounted] = useState(false);
  const productList = products[category as keyof typeof products] || [];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {productList.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <button className="group block w-full text-left">
                <div className="mb-3 flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg dark:bg-gray-900">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="h-full w-full rounded-t-xl object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 text-lg font-bold dark:text-gray-200">
                      {product.name}
                    </h3>
                    <p className="flex-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                  </div>
                </div>
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-4xl overflow-y-auto rounded-2xl px-6 py-8 max-md:max-h-[calc(100vh-8rem)] sm:px-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* LEFT: Product Image */}
                <div className="relative aspect-square w-full max-md:h-40">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>

                {/* RIGHT: Details */}
                <div className="flex flex-col justify-start md:max-h-[calc(100vh-10rem)] md:pr-4">
                  <DialogHeader>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {product.name}
                    </h2>
                  </DialogHeader>

                  <div className="my-4 space-y-2">
                    <div className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                      <span>Brand</span>
                      <span className="text-right font-normal">
                        {product.brand}
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                      <span>Model</span>
                      <span className="text-right font-normal">
                        {product.model}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-200">
                    {product.description}
                  </p>
                  <h1 className="mt-4 text-base font-semibold">
                    {product.value}
                  </h1>
                  <section className="mt-4 space-y-2">
                    {product.benefits?.map((feature, index) => (
                      <Accordion
                        className="transition-all"
                        key={index}
                        type="single"
                        collapsible
                      >
                        <AccordionItem
                          className="AccordionItem group transition-all"
                          value="item-1"
                        >
                          <AccordionTrigger className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-cobalt shadow-sm transition-all data-[state=open]:bg-cobalt data-[state=open]:text-white dark:text-blue-400 dark:data-[state=open]:text-white">
                            {feature.name}{" "}
                            <ChevronDown className="transition-all group-data-[state=open]:rotate-180" />
                          </AccordionTrigger>
                          <AccordionContent className="mt-2 px-4 py-2 text-sm text-gray-500 transition-all">
                            {feature.description}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ))}
                  </section>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      ))}
    </div>
  );
}
