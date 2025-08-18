import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import QuotesSection from "@/components/home/quotes-section";
import LocationSection from "@/components/home/location-section";
import FaqSection from "@/components/home/faq-section";

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

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
