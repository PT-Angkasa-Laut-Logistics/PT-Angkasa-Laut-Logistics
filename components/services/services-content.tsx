"use client";
import Image from "next/image";

interface ServiceItem {
  title: string;
  desc: string;
  image: string;
  reverse?: boolean;
}

const services: ServiceItem[] = [
  {
    title: "Sea Freight",
    desc: "We provide efficient sea freight services for export and import needs. Supported by trusted shipping partners, we reach major ports with services that include FCL, LCL, break bulk, quarantine, documentation handling, customs clearance, and route consultation tailored to your requirements.",
    image: "/image-services/service1.png",
  },
  {
    title: "Air Freight",
    desc: "For urgent and time-sensitive shipments, we deliver secure and timely air freight solutions. From planning to final documentation, we coordinate with trusted airlines for both domestic and international routes.",
    image: "/image-services/service2.png",
    reverse: true,
  },
  {
    title: "Domestic Shipping",
    desc: "We handle domestic shipments across Indonesia, by sea, air, or land. Offering flexible routing options, we ensure goods arrive safely and on time.",
    image: "/image-services/service3.png",
  },
  {
    title: "Project Cargo (Heavy Equipment)",
    desc: "We have extensive experience in handling large-scale and heavy cargo, including industrial, construction, and energy equipment, as well as over-dimension and overload (ODOL) shipments. Our services cover planning, multimodal transportation coordination, supervision, and on-site monitoring.",
    image: "/image-services/service4.png",
    reverse: true,
  },
  {
    title: "Customs Clearance",
    desc: "We ensure smooth customs clearance by handling documentation, permits, and inspection assistance. With a transparent process, we help clients release their goods efficiently and without delays.",
    image: "/image-services/service1.png",
  },
  {
    title: "PPJK (Customs Brokerage)",
    desc: "We provide licensed customs brokerage services to support clients in fulfilling all customs requirements. From document preparation and licensing to on-site assistance, we ensure accuracy and compliance with regulations.",
    image: "/image-services/service2.png",
    reverse: true,
  },
  {
    title: "Quarantine Services",
    desc: "We assist with quarantine procedures for export and import goods in compliance with government regulations, including inspection of animals, plants, and food products. This ensures smooth distribution without regulatory obstacles.",
    image: "/image-services/service3.png",
  },
  {
    title: "Special Permit Assistance",
    desc: "We provide assistance in obtaining special permits for various types of goods that require additional compliance under government regulations. Our service includes regulatory consultation, document preparation, and coordination with relevant authorities to ensure smooth, legal, and timely import or export processes.",
    image: "/image-services/service4.png",
    reverse: true,
  },
];

export default function ServicesContent() {
  return (
    <section className="py-16 dark:bg-slate-950">
      <div className="container mx-auto">
        <div className="flex flex-col gap-24">
          {services.map((item, i) =>
            item.reverse ? (
              // =======================
              // REVERSE (tanpa kapsul)
              // =======================
              <div
                key={i}
                className="grid items-center gap-8 p-24 md:grid-cols-2 md:gap-12"
              >
                {/* Text kiri */}
                <div className="order-2 px-4 md:order-1 md:px-0">
                  <h3 className="mb-4 text-2xl font-bold text-cobalt md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
                </div>

                {/* Image kanan */}
                <div className="relative order-1 w-full overflow-hidden rounded-full shadow-md md:order-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={500}
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority={i === 0}
                  />
                </div>
              </div>
            ) : (
              // =======================
              // NORMAL (kapsul kanan aja)
              // =======================
              <div
                key={i}
                className="overflow-hidden rounded-r-full bg-gradient-to-r from-aqua to-cobalt p-20 text-white shadow-lg"
              >
                <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
                  {/* Gambar dalam kapsul */}
                  <div className="relative w-full md:w-1/2">
                    <div className="overflow-hidden rounded-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={500}
                        className="h-full w-full object-cover"
                        priority={i === 0}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="md:w-1/2 md:px-6">
                    <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-blue-100">{item.desc}</p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
