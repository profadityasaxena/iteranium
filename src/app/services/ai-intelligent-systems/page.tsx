import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { aiIntelligentSystems } from "@/content/services";

export const metadata: Metadata = {
  title: "AI & Intelligent Systems",
  description: aiIntelligentSystems.shortDescription,
};

export default function AIIntelligentSystemsPage() {
  return <ServiceDetailTemplate service={aiIntelligentSystems} />;
}
