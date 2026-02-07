import type { Industry } from "@/types/content";

export const industries: Industry[] = [
  {
    slug: "automotive",
    name: "Automotive & Auto Components",
    description:
      "We help automotive manufacturers improve production efficiency, quality consistency, and asset utilization through intelligent MES integration, predictive quality analytics, and AI-driven production and maintenance optimization across high-volume, high-variant environments.",
  },
  {
    slug: "ev-battery",
    name: "Electric Vehicles & Battery Manufacturing",
    description:
      "We support EV and battery plants with traceability, genealogy, and process intelligence, enabling tighter quality control, yield optimization, energy efficiency, and lifecycle data management for safety-critical manufacturing processes.",
  },
  {
    slug: "electronics-semiconductor",
    name: "Electronics & Semiconductor Manufacturing",
    description:
      "We deliver high-precision manufacturing intelligence for complex, fast-cycle production lines, combining real-time data integration, predictive quality models, and anomaly detection to reduce defects and improve throughput.",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    description:
      "We enable operational visibility, quality compliance, and energy optimization across packaging, processing, and discrete production lines, supporting traceability, waste reduction, and consistent product quality.",
  },
  {
    slug: "consumer-goods",
    name: "Consumer Goods & Packaging",
    description:
      "We help manufacturers manage high product mix and demand variability through intelligent production scheduling, performance analytics, and adaptive decision-support systems that improve responsiveness and cost control.",
  },
  {
    slug: "industrial-equipment",
    name: "Industrial Equipment & Heavy Manufacturing",
    description:
      "We support complex build-to-order and engineered products with production tracking, asset reliability intelligence, and predictive maintenance, improving delivery reliability and equipment availability.",
  },
  {
    slug: "metals-mining",
    name: "Metals, Mining & Process-Intensive Discrete Operations",
    description:
      "We provide end-to-end operational intelligence spanning production execution, energy monitoring, and asset health, enabling data-driven decisions in capital-intensive, regulation-heavy environments.",
  },
  {
    slug: "life-sciences",
    name: "Life Sciences & Regulated Manufacturing",
    description:
      "We enable compliance-ready digital manufacturing, combining traceability, quality intelligence, and explainable analytics to support validated processes, audit readiness, and continuous improvement.",
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy & Clean Manufacturing",
    description:
      "We help manufacturers align sustainability goals with operational performance through energy optimization, predictive analytics, and intelligent monitoring of production and asset efficiency.",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
