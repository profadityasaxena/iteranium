import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cpu, Layers, TrendingUp, MapPin } from "lucide-react";

const differentiators = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "AI Designed for Production Data",
    description:
      "Our approach uses reinforcement-learning models designed to train on live shop-floor data—adapting to unique operational patterns rather than relying on generic algorithms.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "End-to-End, Not Piecemeal",
    description:
      "Full-stack from edge sensors to executive dashboards. We design the entire technology stack so nothing falls through the cracks.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Systems Thinking at Every Level",
    description:
      "We approach manufacturing transformation as an interconnected system—bridging operations, technology, and strategy to deliver coherent, sustainable outcomes.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Ontario-Based, Industry-Focused",
    description:
      "Headquartered in Ontario, we are building deep expertise in manufacturing systems and AI—contributing to Canada's growing advanced manufacturing ecosystem.",
  },
];

export function ValueProposition() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Iteranium"
          heading="Built Different for Manufacturing"
          description="We are not a generic IT consultancy. We are manufacturing technology specialists who understand the shop floor."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                {item.icon}
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
