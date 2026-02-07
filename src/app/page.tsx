import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { FeaturedInsights } from "@/components/sections/FeaturedInsights";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ServicesOverview />
      <ValueProposition />
      <IndustriesGrid />
      <FeaturedInsights />
      <CTASection />
    </>
  );
}
