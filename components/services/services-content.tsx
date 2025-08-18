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
    image: "/images/services/service1.jpg",
  },
  {
    title: "Air Freight",
    desc: "For urgent and time-sensitive shipments, we deliver secure and timely air freight solutions. From planning to final documentation, we coordinate with trusted airlines for both domestic and international routes.",
    image: "/images/services/service2.jpg",
    reverse: true,
  },
  {
    title: "Domestic Shipping",
    desc: "We handle domestic shipments across Indonesia, by sea, air, or land. Offering flexible routing options, we ensure goods arrive safely and on time.",
    image: "/images/services/service3.jpg",
  },
  {
    title: "Project Cargo (Heavy Equipment)",
    desc: "We have extensive experience in handling large-scale and heavy cargo, including industrial, construction, and energy equipment, as well as over-dimension and overload (ODOL) shipments. Our services cover planning, multimodal transportation coordination, supervision, and on-site monitoring.",
    image: "/images/services/service2.jpg",
    reverse: true,
  },
  {
    title: "Customs Clearance",
    desc: "We ensure smooth customs clearance by handling documentation, permits, and inspection assistance. With a transparent process, we help clients release their goods efficiently and without delays.",
    image: "/images/services/service3.jpg",
  },
];

export default function ServicesContent() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16">
          {services.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-between rounded-[4rem] bg-gradient-to-r from-cobalt to-blue-600 p-8 text-white shadow-xl md:flex-row ${
                item.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-[3rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="mt-6 w-full md:mt-0 md:w-1/2 md:px-8">
                <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
