"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/mock/product-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
const consumables = products.cleanrooms;

export default function ProductConsumables({
  consumables: consumablesProp,
}: {
  consumables?: typeof consumables;
}) {
  const data = consumablesProp || consumables;
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  return (
    <div className="relative w-full">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          observer={true}
          observeParents={true}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{ clickable: true, el: ".custom-swiper-pagination2" }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-24"
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            setSwiperInstance(swiper);
          }}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={item.id + idx} className="!h-auto pb-2">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="group block h-full w-full text-left">
                    <div className="mb-10 flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg dark:bg-gray-900">
                      <div className="relative h-40 w-full md:h-44 lg:h-48 xl:h-52">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="h-full w-full rounded-t-xl object-cover"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      </div>
                      <div className="flex flex-col p-5">
                        <h3 className="mb-1 text-lg font-bold dark:text-gray-200">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                <DialogContent className="max-w-4xl overflow-y-auto rounded-2xl px-6 py-8 max-md:h-[calc(100vh-10rem)] sm:px-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="relative aspect-square w-full max-md:h-40">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="rounded-lg object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-start pr-4 md:h-[calc(100vh-8rem)] md:pr-4">
                      <DialogHeader>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                          {item.name}
                        </h2>
                      </DialogHeader>
                      <div className="my-4 space-y-2">
                        <div className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-slate-900 dark:text-gray-200">
                          <span>Brand</span>
                          <span className="text-right font-normal text-gray-500">
                            {item.brand}
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-slate-900 dark:text-gray-200">
                          <span>Model</span>
                          <span className="text-right font-normal text-gray-500">
                            {item.model}
                          </span>
                        </div>
                      </div>
                      <p
                        className="pb-4 text-sm leading-relaxed text-gray-500"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {item.description}
                      </p>
                      <section className="mt-4 space-y-2">
                        {item.benefits?.map((feature, index) => (
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
                              <AccordionTrigger className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-cobalt shadow-sm transition-all data-[state=open]:bg-cobalt data-[state=open]:text-white">
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
            </SwiperSlide>
          ))}

          <button
            ref={prevRef}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white/80 p-2 shadow transition-colors hover:bg-blue-100 focus:outline-none"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button
            ref={nextRef}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white/80 p-2 shadow transition-colors hover:bg-blue-100 focus:outline-none"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </Swiper>

        <div className="custom-swiper-pagination2 mt-6 flex items-center justify-center gap-2" />
      </div>

      <style jsx global>{`
        .custom-swiper-pagination2 .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #e5e7eb;
          opacity: 1;
          margin: 0 6px !important;
          border-radius: 9999px;
          transition: background 0.2s;
        }
        .custom-swiper-pagination2 .swiper-pagination-bullet-active {
          background: #2563eb;
        }
      `}</style>
    </div>
  );
}
