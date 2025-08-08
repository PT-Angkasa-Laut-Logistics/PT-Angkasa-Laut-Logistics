import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT Symbiocon Solusi Integra",
  description:
    "We are an Integrated Solution Provider for Scientific Facility Construction",
  keywords:
    "laboratory equipment, lab supplies, scientific instruments, research equipment",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={urbanist.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 bg-slate-100">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
