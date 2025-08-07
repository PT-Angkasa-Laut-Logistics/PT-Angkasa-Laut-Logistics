"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const featuredCategories = [
  {
    id: 1,
    name: "Laboratory Furniture",
    image: "/images/product-list1.png",
    productCount: 5,
    href: "/products#furniture",
  },
  {
    id: 2,
    name: "Fume Hoods",
    image: "/image-product/fume1.png",
    productCount: 2,
    href: "/products#fume-hoods",
  },
  {
    id: 3,
    name: "Safety Storage Cabinet",
    image: "/image-product/safetystoragecabinet.png",
    productCount: 2,
    href: "/products#storage",
  },
  {
    id: 4,
    name: "Clean Room & Containment",
    image: "/images/product-list4.jpg",
    productCount: 7,
    href: "/products#clean-room",
  },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {featuredCategories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={category.href} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4 dark:bg-gray-800">
                <h3 className="mb-1 text-lg font-medium">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.productCount} products
                </p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
