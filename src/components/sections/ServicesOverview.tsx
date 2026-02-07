import Link from "next/link";
import { ArrowUpRight, Factory, Brain } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { services } from "@/content/services";

const iconMap: Record<string, React.ReactNode> = {
  ArrowUpRight: <ArrowUpRight className="h-8 w-8" />,
  Factory: <Factory className="h-8 w-8" />,
  Brain: <Brain className="h-8 w-8" />,
};

export function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Capabilities"
          heading="End-to-End Industry 4.0 Solutions"
          description="From strategic roadmapping to AI-driven optimization, we deliver the full technology stack that modern manufacturers need."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="group h-full p-8">
                <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-500">
                  {iconMap[service.icon] || (
                    <ArrowUpRight className="h-8 w-8" />
                  )}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-slate-600">{service.shortDescription}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-500 group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
