"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme-toggle";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products & Equipment", href: "/products" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const getLinkStyle = (href: string) => {
    const isActive = pathname === href;

    if (scrolled) {
      return cn(
        "text-sm font-semibold transition-colors",
        isActive
          ? "text-cobalt"
          : "text-gray-600 dark:text-gray-300 dark:hover:text-cobalt hover:text-cobalt",
      );
    }

    if (isHome) {
      return cn(
        "text-sm font-semibold transition-colors",
        href === "/"
          ? "text-blue-700 dark:text-blue-400"
          : "text-gray-900 hover:text-blue-700 dark:text-gray-600 dark:hover:text-blue-400",
      );
    }

    return cn(
      "text-sm font-semibold transition-colors",
      isActive
        ? "text-cobalt"
        : "text-gray-900 hover:text-cobalt dark:text-gray-200  dark:hover:text-blue-400",
    );
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-sm dark:bg-gray-900" : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">PT Symbiocon Solusi Integra</span>
            <div className="flex items-center">
              <span
                className={cn(
                  "text-xl font-bold transition-colors",
                  scrolled
                    ? "text-white"
                    : isHome
                      ? "text-blue-700 dark:text-blue-400"
                      : "text-white",
                )}
              >
                <Image
                  src="/images/logo-animated.png"
                  alt="Logo"
                  width={120}
                  height={120}
                  className="dark:brightness-150"
                />
              </span>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu
              className={cn(
                "h-6 w-6",
                scrolled ? "text-cobalt dark:text-blue-100" : "",
              )}
              aria-hidden="true"
            />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={getLinkStyle(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-4">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden",
          mobileMenuOpen ? "fixed inset-0 z-50" : "hidden",
        )}
      >
        <div className="fixed inset-0 bg-gray-900/80" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 dark:bg-slate-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">angkasa laut compro</span>
              <div className="flex items-center">
                <span className="text-lg font-bold text-blue-700 dark:text-blue-400">
                  angkasa laut compro
                </span>
              </div>
            </Link>
            <Button
              variant="ghost"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                      pathname === item.href
                        ? pathname === "/"
                          ? "bg-gray-50 text-blue-700 dark:bg-slate-800 dark:text-blue-400"
                          : "bg-gray-50 text-cobalt dark:bg-slate-800"
                        : "text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-slate-800",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
