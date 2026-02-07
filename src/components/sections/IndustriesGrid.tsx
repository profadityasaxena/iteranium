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
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/content/industries";

const iconMap: Record<string, React.ReactNode> = {
  automotive: <Car className="h-6 w-6" />,
  "ev-battery": <Battery className="h-6 w-6" />,
  "electronics-semiconductor": <Cpu className="h-6 w-6" />,
  "food-beverage": <UtensilsCrossed className="h-6 w-6" />,
  "consumer-goods": <Package className="h-6 w-6" />,
  "industrial-equipment": <Wrench className="h-6 w-6" />,
  "metals-mining": <Mountain className="h-6 w-6" />,
  "life-sciences": <Pill className="h-6 w-6" />,
  "renewable-energy": <Leaf className="h-6 w-6" />,
};

export function IndustriesGrid() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          heading="Industries We Serve"
          description="Deep domain expertise across nine core manufacturing and industrial verticals."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-primary-200 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-500">
                {iconMap[industry.slug] || <Zap className="h-6 w-6" />}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {industry.name}
              </h3>
              <p className="text-sm text-slate-600 line-clamp-2">
                {industry.description}
              </p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-500 transition-all group-hover:gap-2">
                Explore
                <ArrowUpRight className="h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
