import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ServicesOverview />
      <ValueProposition />
      <IndustriesGrid />
      <FeaturedCaseStudy />
      <CTASection />
    </>
  );
}
