import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Factory, Brain } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end Industry 4.0 capabilities from strategy through execution. Digital transformation, smart factory solutions, and AI-driven optimization.",
};

const iconMap: Record<string, React.ReactNode> = {
  ArrowUpRight: <ArrowUpRight className="h-10 w-10" />,
  Factory: <Factory className="h-10 w-10" />,
  Brain: <Brain className="h-10 w-10" />,
};

const methodology = [
  {
    step: "01",
    title: "Assess",
    description:
      "Current state evaluation and opportunity identification. We audit your production systems, data infrastructure, and operational processes.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture and roadmap development. We design the target state and build a phased execution plan aligned to your business outcomes.",
  },
  {
    step: "03",
    title: "Implement",
    description:
      "Agile delivery with continuous validation. We deploy in sprints, testing each component against real production conditions.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "Ongoing AI-driven improvement. Our reinforcement-learning systems continuously learn and adapt to optimize your operations.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-500">
              Our Services
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              End-to-End Industry 4.0 Capabilities
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              From strategic roadmapping to AI-driven optimization, we deliver
              the full technology stack that modern discrete manufacturers need
              to compete globally.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-500">
                    {iconMap[service.icon] || (
                      <ArrowUpRight className="h-10 w-10" />
                    )}
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="mt-4 text-lg text-slate-600">
                    {service.longDescription}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    href={`/services/${service.slug}`}
                    className="mt-6"
                  >
                    Explore {service.title}
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="p-8">
                    <h3 className="mb-4 font-semibold text-slate-900">
                      Key Capabilities
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature.title} className="flex gap-3">
                          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary-500" />
                          <div>
                            <p className="font-medium text-slate-900">
                              {feature.title}
                            </p>
                            <p className="text-sm text-slate-600">
                              {feature.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Methodology */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            heading="How We Work"
            description="A proven methodology that delivers results at every phase."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {methodology.map((step) => (
              <div key={step.step}>
                <p className="text-4xl font-bold text-primary-200">
                  {step.step}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
