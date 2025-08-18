import ServicesHero from "@/components/services/services-hero";
import ServicesContent from "@/components/services/services-content";

export const metadata = {
  title: "Our Services | PT Angkasa Laut Logistics",
  description:
    "Discover our professional logistics solutions, from freight forwarding to warehousing and supply chain management.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesContent />
    </main>
  );
}
