import { digitalTransformation } from "./digital-transformation";
import { industry4Solutions } from "./industry-4-0";
import { aiIntelligentSystems } from "./ai-intelligent-systems";
import type { Service } from "@/types/content";

export const services: Service[] = [
  digitalTransformation,
  industry4Solutions,
  aiIntelligentSystems,
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export { digitalTransformation, industry4Solutions, aiIntelligentSystems };
