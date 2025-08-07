"use client";

import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ANIMATE_LEFT, CONTAINER_ANIMATION } from "@/lib/animation-config";
/**
 * A component that displays the contact information of Company.
 *
 * @returns The ContactInformation component.
 */
export default function ContactInfo() {
  const phone_number = "+6281995515519";
  const message =
    "Halo Symbiocon, saya tertarik dengan produk dan layanan anda...";
  const wa_url = `https://wa.me/${phone_number}?text=${encodeURIComponent(message)}`;

  return (
    <div className="space-y-8">
      <motion.div
        variants={CONTAINER_ANIMATION}
        initial="hidden"
        animate="visible"
      >
        <h2 className="mb-2 text-2xl font-bold md:mb-6">Contact Information</h2>
        <p className="mb-8 text-muted-foreground max-md:text-sm">
          Feel free to contact us with any questions about our products and
          services. Our team is always ready to assist you.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="mt-1 flex-shrink-0">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <motion.div variants={ANIMATE_LEFT} className="ml-4">
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-muted-foreground max-md:text-sm">
                Kawasan Industri Jababeka
                <br />
                Blok K No.8A, Jl. Jababeka XI A, Harja Mekar, Cikarang Utara,
                Bekasi Regency, West Java 17530, Indonesia
              </p>
            </motion.div>
          </div>

          <div className="flex items-start">
            <div className="mt-1 flex-shrink-0">
              <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <motion.div variants={ANIMATE_LEFT} className="ml-4">
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-muted-foreground max-md:text-sm">
                +62 21 5010 6780
              </p>
            </motion.div>
          </div>
          <div className="flex items-start">
            <div className="mt-1 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-blue-600 dark:text-blue-400"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                ></path>
              </svg>
            </div>
            <motion.div variants={ANIMATE_LEFT} className="ml-4">
              <h3 className="text-lg font-semibold">WhatsApp</h3>
              <p className="text-muted-foreground max-md:text-sm">
                +62 819 9551 5519
              </p>
            </motion.div>
          </div>

          <div className="flex items-start">
            <div className="mt-1 flex-shrink-0">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <motion.div variants={ANIMATE_LEFT} className="ml-4">
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-muted-foreground max-md:text-sm">
                info@symbiocon.com
              </p>
            </motion.div>
          </div>

          <div className="flex items-start">
            <div className="mt-1 flex-shrink-0">
              <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <motion.div variants={ANIMATE_LEFT} className="ml-4">
              <h3 className="text-lg font-semibold">Business Hours</h3>
              <p className="text-muted-foreground max-md:text-sm">
                Monday - Friday: 9:00 AM - 5:00 PM
                <br />
                Saturday - Sunday: Closed
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Card className="border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/30">
        <div className="flex items-start">
          <div className="mt-1 flex-shrink-0">
            <MessageSquare className="h-10 w-10 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold max-md:text-base">
              WhatsApp Support
            </h3>
            <p className="mb-4 text-muted-foreground max-md:text-sm">
              Contact us directly on WhatsApp for quick responses to your
              inquiries.
            </p>

            <Link href={wa_url} target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 max-md:text-sm">
                Chat on WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
