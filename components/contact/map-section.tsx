export default function MapSection() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Location
          </h2>
          <p className="text-lg text-muted-foreground">
            Visit our facility to see our products and equipment in person.
          </p>
        </div>

        <div className="h-[400px] overflow-hidden rounded-lg border border-border shadow-md">
          <iframe
            src=""
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Advance Lab Global Location"
          />
        </div>
      </div>
    </section>
  );
}
