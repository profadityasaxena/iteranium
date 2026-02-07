import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { digitalTransformation } from "@/content/services";

export const metadata: Metadata = {
  title: "Digital Transformation",
  description: digitalTransformation.shortDescription,
};

export default function DigitalTransformationPage() {
  return <ServiceDetailTemplate service={digitalTransformation} />;
}
