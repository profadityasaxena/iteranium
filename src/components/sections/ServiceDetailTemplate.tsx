import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceProcessFlow } from "@/components/sections/ServiceProcessFlow";
import type { Service } from "@/types/content";

interface ServiceDetailTemplateProps {
  service: Service;
}

export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Image
              src="/images/logo-white-bg.png"
              alt="Iteranium"
              width={400}
              height={100}
              className="mx-auto mb-6 h-24 w-auto"
            />
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-500">
              Our Services
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              {service.longDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            heading="What We Deliver"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {service.features.map((feature) => (
              <Card key={feature.title} className="p-8">
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Implementation Approach */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="How We Deliver"
            heading="Our Implementation Approach"
            description="Every engagement follows a consistent, proven framework — ensuring rigour, reliability, and measurable outcomes."
          />
          <ServiceProcessFlow steps={service.deliveryRoadmap} />
        </Container>
      </section>

      {/* Technologies */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Technology Stack"
            heading="Tools & Platforms"
            description="We work with industry-leading technologies to deliver robust, scalable solutions."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Results"
            heading="Measurable Impact"
            description="Our solutions deliver quantifiable improvements that impact your bottom line."
          />
          <div className="grid gap-8 sm:grid-cols-3">
            {service.benefits.map((benefit) => (
              <div key={benefit.description} className="text-center">
                <p className="text-4xl font-bold text-primary-500 lg:text-5xl">
                  {benefit.metric}
                  <span className="text-2xl">*</span>
                </p>
                <p className="mt-2 text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-slate-400">
            * Based on outcomes from 50+ implementations delivered by our
            founding team.
          </p>
        </Container>
      </section>

      <CTASection
        heading={`Ready to Get Started with ${service.title}?`}
        description="Let's discuss how we can transform your manufacturing operations."
      />
    </>
  );
}
