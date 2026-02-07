import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cpu, Layers, TrendingUp, MapPin } from "lucide-react";

const differentiators = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "AI That Learns From YOUR Data",
    description:
      "Reinforcement-learning models trained on live shop-floor data—not generic algorithms. Our AI adapts to your unique operational patterns.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "End-to-End, Not Piecemeal",
    description:
      "Full-stack from edge sensors to executive dashboards. We own the entire technology stack so nothing falls through the cracks.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Proven at Scale",
    description:
      "Deployed for large global manufacturers across automotive, EVs, electronics, and food and beverage sectors.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Canadian Innovation",
    description:
      "R&D and intellectual property developed in Canada. Contributing to Ontario’s advanced manufacturing ecosystem and local economic growth.",
  },
];

const stats = [
  { value: "50+", label: "Manufacturing Lines Optimized" },
  { value: "30%", label: "Average Throughput Increase" },
  { value: "99.5%", label: "System Uptime" },
  { value: "45%", label: "Downtime Reduction" },
];

export function ValueProposition() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Iteranium"
          heading="Built Different for Manufacturing"
          description="We’re not a generic IT consultancy. We’re manufacturing technology specialists who understand the shop floor."
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

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-200 pt-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary-500 lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
