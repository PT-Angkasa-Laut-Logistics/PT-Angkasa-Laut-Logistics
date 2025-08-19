import AboutHero from "@/components/about/about-hero";
import AboutContent from "@/components/about/about-content";
import PartnerSection from "@/components/about/partner-section";
export const metadata = {
  title: "About Us | PT Symbiocon Solusi Integra",
  description:
    "Learn about PT Symbiocon Solusi Integra's history, mission, and vision for the future of laboratory science.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AboutHero />
      <section className="bg-white px-4 py-8 dark:bg-slate-950 lg:px-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 lg:gap-16">
            <AboutContent />
          </div>
        </div>
      </section>
      <PartnerSection />
    </div>
  );
}
