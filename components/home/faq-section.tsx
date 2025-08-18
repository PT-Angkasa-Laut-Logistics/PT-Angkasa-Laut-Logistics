"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";

type FaqItem = { q: string; a: string };

const faqs: FaqItem[] = [
  {
    q: "What are the main services offered by Angkasa Laut Logistics?",
    a: "We offer comprehensive logistics solutions that cover domestic and international freight forwarding, customs clearance, warehousing, and last-mile delivery. Every service is tailored to ensure your goods move seamlessly across borders, on time, and with maximum reliability.",
  },
  {
    q: "What type of goods can be shipped via Angkasa Laut Logistics?",
    a: "Everything, from general goods and daily consumer products to heavy industrial machinery, we can handle a broad range of cargo. For regulated or hazardous items, our team ensures all necessary compliance and documentation are met, giving you peace of mind.",
  },
  {
    q: "How do I submit a bid or start shipping",
    a: "Simply reach out to us via our official website, email, phone, WhatsApp, or social media. Provide the shipment details, type of goods, quantity, origin, and destination, and our experts will prepare a competitive quote and walk you through every step until your cargo is safely delivered and received in good condition.",
  },
  {
    q: "How will I be updated about my shipment status?",
    a: "With full transparency, we actively monitor every stage of your shipment’s journey and provide personalized updates directly to you. Through phone, email, messaging apps, or social media, our team ensures you are always informed about your cargo’s location and condition.",
  },
  {
    q: "What makes Angkasa Laut Logistics different from other logistics providers?",
    a: "We don’t just move goods, we build pathways for your business. With us, borders become opportunities, and every shipment is handled with a blend of expertise, trust, and personal attention. Our commitment to reliability, competitive pricing, and strong partnerships ensures your business can confidently reach any market.",
  },
];

export default function FaqSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-aqua to-cobalt py-24">
      <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-4xl text-center"
        >
          <h2 className="mb-2 text-xl font-semibold text-white sm:text-4xl">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-sm text-slate-200 md:text-base">
            Find answers to your questions about our logistics services
          </p>
        </motion.div>

        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-5xl space-y-4"
        >
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <AccordionItem
                value={`item-${i + 1}`}
                className="rounded-xl border-0 bg-white text-slate-900 shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-[15px] font-semibold text-slate-900 transition-colors data-[state=open]:text-cobalt sm:text-base [&>svg]:text-slate-400 data-[state=open]:[&>svg]:text-cobalt">
                  {item.q}
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6 pt-0 text-sm leading-relaxed text-slate-600">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
