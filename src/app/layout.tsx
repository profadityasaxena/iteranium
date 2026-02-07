import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iteranium.com"),
  title: {
    default: "Iteranium — Industry 4.0 & AI",
    template: "%s — Iteranium",
  },
  description:
    "We help discrete manufacturers modernize and optimize operations through full-stack Industry 4.0 transformation. IIoT, MES, and reinforcement-learning-driven AI for scheduling, downtime reduction, and throughput optimization.",
  keywords: [
    "Industry 4.0",
    "digital transformation",
    "smart manufacturing",
    "IIoT",
    "MES",
    "manufacturing AI",
    "reinforcement learning",
    "discrete manufacturing",
    "OEE optimization",
    "predictive maintenance",
    "Canadian manufacturing technology",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://iteranium.com",
    siteName: "Iteranium",
    title: "Iteranium | Industry 4.0 Digital Transformation",
    description:
      "Full-stack Industry 4.0 transformation for discrete manufacturers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iteranium | Industry 4.0 Digital Transformation",
    description:
      "Full-stack Industry 4.0 transformation for discrete manufacturers.",
  },
  icons: {
    icon: { url: "/images/favicon.png", type: "image/png" },
    apple: "/images/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main className="min-h-screen pt-20 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
