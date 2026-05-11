import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Google Fonts via next/font (no layout shift, cached) ── */
const cormorant = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hornung & Kasel – Rechtsanwälte in Trier",
  description:
    "Kompetente Rechtsberatung in Trier. Hans-Georg Hornung und Roman Kasel, Rechtsanwälte in Bürogemeinschaft.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body
        className={`${cormorant.variable} ${inter.variable} bg-zinc-950 text-zinc-50 font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
