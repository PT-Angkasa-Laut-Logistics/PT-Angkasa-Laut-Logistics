import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import QuotesSection from "@/components/contact/quotes-section";

export const metadata = {
  title: "Contact Us | PT Symbiocon Solusi Integra",
  description:
    "Get in touch with PT Symbiocon Solusi Integra for inquiries about our laboratory equipment and supplies. Our team is ready to assist you.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ContactHero />

      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      {/* <MapSection /> */}
    </div>
  );
}
