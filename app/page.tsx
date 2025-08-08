import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Beaker,
  Microscope,
  FlaskRound as Flask,
  Atom,
} from "lucide-react";
import ProductList from "@/components/home/product-list";
import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import QuotesSection from "@/components/home/quotes-section";
import LocationSection from "@/components/home/location-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Quotes Section */}
      <QuotesSection />

      {/* Location Section */}
      <LocationSection />

      {/* Products Preview Section */}
      <section className="bg-slate-100 py-16 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl">
              Our Featured Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse our range of high-quality laboratory equipment and supplies
              for your research and industrial needs.
            </p>
          </div>

          <ProductList />

          <div className="mt-12 text-center">
            <Link href="/products">
              <Button variant="outline" className="group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-16 dark:bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to equip your laboratory?
          </h2>

          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-semibold">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
