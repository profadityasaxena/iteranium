import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Battery,
  Cpu,
  UtensilsCrossed,
  Package,
  Wrench,
  Mountain,
  Pill,
  Leaf,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Deep domain expertise across automotive, EV, electronics, food & beverage, consumer goods, industrial equipment, metals & mining, life sciences, and renewable energy manufacturing.",
};

const iconMap: Record<string, React.ReactNode> = {
  automotive: <Car className="h-8 w-8" />,
  "ev-battery": <Battery className="h-8 w-8" />,
  "electronics-semiconductor": <Cpu className="h-8 w-8" />,
  "food-beverage": <UtensilsCrossed className="h-8 w-8" />,
  "consumer-goods": <Package className="h-8 w-8" />,
  "industrial-equipment": <Wrench className="h-8 w-8" />,
  "metals-mining": <Mountain className="h-8 w-8" />,
  "life-sciences": <Pill className="h-8 w-8" />,
  "renewable-energy": <Leaf className="h-8 w-8" />,
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Image
              src="/images/logo-white-bg.png"
              alt="Iteranium"
              width={400}
              height={100}
              className="mx-auto mb-6 h-24 w-auto"
            />
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-500">
              Industries
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Industries We Serve
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Deep domain expertise across nine core manufacturing and
              industrial verticals. We understand the unique challenges,
              regulations, and operational realities of each sector.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
              >
                <Card className="group h-full p-8">
                  <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-500">
                    {iconMap[industry.slug] || <Zap className="h-8 w-8" />}
                  </div>
                  <h2 className="mb-3 text-xl font-semibold">
                    {industry.name}
                  </h2>
                  <p className="text-slate-600">{industry.description}</p>
                  <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-500 transition-all group-hover:gap-2">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Don&rsquo;t See Your Industry?"
        description="We&rsquo;ve worked across many manufacturing verticals. Let&rsquo;s discuss your specific challenges."
      />
    </>
  );
}
