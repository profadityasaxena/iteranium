import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { industry4Solutions } from "@/content/services";

export const metadata: Metadata = {
  title: "Industry 4.0 Solutions",
  description: industry4Solutions.shortDescription,
};

export default function Industry4Page() {
  return <ServiceDetailTemplate service={industry4Solutions} />;
}
