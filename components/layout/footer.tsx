import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-200 text-slate-800">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8 lg:pb-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <figure className="flex gap-4">
            <Image
              src="/images/al-logo.svg"
              width={100}
              height={100}
              alt="logo"
              className="h-14 w-auto max-md:h-10"
            />
            <div className="space-y-2 xl:col-span-1">
              <h2 className="text-base font-bold text-aqua md:text-2xl">
                Angkasa Laut <span className="text-cobalt">Logistics</span>
              </h2>
              <Image
                src="/svg/footer-signature.svg"
                width={200}
                height={100}
                className="mb-4 h-5 w-auto brightness-50 md:h-7"
                alt="signature"
              />
              <div className="flex space-x-6">
                <a
                  href="https://www.instagram.com/symbiocon.id/"
                  className="text-cobalt hover:text-white"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-cobalt">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </figure>

          <div className="mt-12 grid xl:mt-0">
            <div className="grid grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cobalt">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-4 max-md:text-xs">
                  <li>
                    <Link href="/" className="text-slate-600 hover:text-cobalt">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-slate-600 hover:text-cobalt"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-teams"
                      className="text-slate-600 hover:text-cobalt"
                    >
                      Our Teams
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-slate-600 hover:text-cobalt"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="text-slate-600 hover:text-cobalt"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-slate-600 hover:text-cobalt"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cobalt">
                  Contact Information
                </h3>
                <ul className="mt-4 space-y-4 max-md:text-xs">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-cobalt" />
                    <span className="ml-3 text-slate-600">
                      Jl. Gading Kirana Timur A.11/15, Desa/Kelurahan Kelapa
                      Gading Barat, Kec. Kelapa Gading, Kota Adm. Jakarta Utara,
                      DKI Jakarta 14240
                    </span>
                  </li>
                  <li className="flex">
                    <Phone className="h-5 w-5 flex-shrink-0 text-cobalt" />
                    <span className="ml-3 text-slate-600">021-31118055</span>
                  </li>
                  <li className="flex">
                    <Mail className="h-5 w-5 flex-shrink-0 text-cobalt" />
                    <span className="ml-3 text-slate-600 max-md:text-xs">
                      cs1.jkt@allogistik.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-400 pt-4 md:pt-8">
          <p className="text-center text-xs text-slate-600 md:text-sm">
            © {new Date().getFullYear()} Angkasa Laut Logistics. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
