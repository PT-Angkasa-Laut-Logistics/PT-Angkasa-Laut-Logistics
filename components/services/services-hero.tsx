"use client";

export default function ServicesHero() {
  return (
    <section className="mt-24 py-20 text-center dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Label / Badge */}
        <span className="inline-block rounded-full bg-cobalt/10 px-4 py-1 text-sm font-semibold text-cobalt">
          Angkasa Laut Logistics
        </span>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-semibold text-cobalt sm:text-4xl">
          Our Services
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-300">
          Reliable Logistics Partnership for Your Global Growth.
        </p>
      </div>
    </section>
  );
}
