import ProductsHero from "@/components/products/products-hero";
import ProductCategories from "@/components/products/product-categories";
// import ProductGrid from "@/components/products/product-grid";
import ProductConsumables from "@/components/products/product-consumables";
import { Button } from "@/components/ui/button";
import { Download, MailIcon } from "lucide-react";
import ProductService from "@/components/products/product-service";
import Link from "next/link";
import dynamic from "next/dynamic";
export const metadata = {
  title: "Products & Equipment | PT Symbiocon Solusi Integra",
  description:
    "Explore our comprehensive range of laboratory equipment, instruments, and supplies for research and industrial applications.",
};

// Muat ProductGrid secara dinamis
const ProductGrid = dynamic(
  () => import("@/components/products/product-grid"),
  {
    loading: () => <p>Loading products...</p>, // Tampilkan pesan loading
    ssr: false, // Jika tidak butuh data ini di server-side render
  },
);

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ProductsHero />

      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Laboratory Furniture
            </h2>
          </div>

          <ProductCategories />
        </div>
      </section>

      <section id="laboratory" className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Fume Hoods
            </h2>
          </div>

          <ProductGrid category="fumehoods" />
        </div>
      </section>

      <section id="analytical" className="bg-white py-16 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Safety Storage Cabinet
            </h2>
          </div>

          <ProductGrid category="safetycabinets" />
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Clean Room & Containment
            </h2>
          </div>

          <ProductConsumables />
        </div>
        <section className="mt-8 flex w-full items-center justify-center gap-4">
          <Link
            href={
              "https://drive.google.com/drive/folders/1SOz2HCxASUO3dvAPzvDwSynAEJoy3osB?usp=sharing"
            }
          >
            <Button className="bg-cobalt text-white hover:bg-cobalt/80">
              <Download className="mr-2 h-4 w-4" />
              Catalog Download
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-cobalt text-white hover:bg-cobalt/80">
              <MailIcon className="mr-2 h-4 w-4" />
              Send Inquiry
            </Button>
          </Link>
        </section>
        <ProductService />
      </section>
    </div>
  );
}
