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
    a: "We provide end-to-end import/export handling: consultation & planning, customs clearance and documentation, international shipping, warehousing, and last-mile delivery. Services can be bundled or taken separately sesuai kebutuhan proyek.",
  },
  {
    q: "What types of goods can be shipped via Angkasa Laut Logistics?",
    a: "General cargo, laboratory equipment, pharmaceutical supplies, temperature-controlled items, and oversized goods. Untuk kategori khusus (hazmat/regulated), tim compliance kami bantu cek izin & packing standardnya.",
  },
  {
    q: "How long does customs clearance usually take?",
    a: "Umumnya 1–3 hari kerja setelah dokumen lengkap dan pemeriksaan selesai. Waktu bisa berubah tergantung jenis barang, pelabuhan/bandara, serta antrian pemeriksaan otoritas.",
  },
  {
    q: "Can you handle door-to-door shipments?",
    a: "Bisa. Kami urus pick-up, export formalities, international freight, import clearance, sampai delivery ke lokasi tujuan—satu PIC, satu tracking.",
  },
  {
    q: "How do I get a quotation?",
    a: "Kirim detail barang (HS code kalau ada), dimensi/berat, asal-tujuan, incoterms, dan timeline via halaman Contact. Tim sales akan kirim proposal & ETA dalam bentuk breakdown biaya transparan.",
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
