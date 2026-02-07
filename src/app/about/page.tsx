import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CTASection } from "@/components/sections/CTASection";
import { CERTIFICATIONS } from "@/lib/constants";
import {
  Target,
  Eye,
  Lightbulb,
  Handshake,
  ShieldCheck,
  MapPin,
  Briefcase,
  Cpu,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Iteranium’s mission to drive Canadian innovation in Industry 4.0 digital transformation for manufacturers worldwide.",
};

const values = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation",
    description:
      "We push the boundaries of what’s possible in manufacturing technology, developing proprietary AI that learns from real production data.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Impact",
    description:
      "Every engagement must deliver measurable operational improvement. We measure success in throughput gains, downtime reduction, and ROI.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Integrity",
    description:
      "We give honest assessments, set realistic expectations, and stand behind our work with transparent reporting and accountability.",
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Partnership",
    description:
      "We embed with your team, transfer knowledge, and build your internal capability—not dependency on external consultants.",
  },
];

const canadianImpact = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Canadian IP Development",
    description:
      "Our reinforcement-learning AI models and manufacturing optimization algorithms are developed and owned in Canada, contributing to the nation’s growing portfolio of advanced manufacturing IP.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Ontario Operations",
    description:
      "Headquartered in Ontario with our executive leadership, solution architects, and client engagement teams. We’re building a growing team of Canadian technology professionals.",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Local Industry Partnerships",
    description:
      "We work directly with Canadian manufacturers to strengthen the domestic advanced manufacturing ecosystem and improve global competitiveness.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Talent Development",
    description:
      "Creating high-value technology jobs in Ontario and investing in the next generation of Canadian AI and manufacturing systems engineers.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-500">
              About Iteranium
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Canadian Innovation Powering the Next Generation of Smart
              Manufacturing
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              We help discrete manufacturers modernize and optimize operations
              through full-stack Industry 4.0 transformation. Our solutions
              combine IIoT, MES, and reinforcement-learning AI that learns from
              live shop-floor data.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                heading="Built by Manufacturing Technologists"
                align="left"
              />
              <div className="space-y-4 text-slate-600">
                <p>
                  Iteranium was founded with a clear conviction: discrete
                  manufacturers deserve technology partners who understand the
                  shop floor as well as the server room. Too many Industry 4.0
                  initiatives fail because they’re led by IT generalists
                  who don’t understand manufacturing operations.
                </p>
                <p>
                  We assembled a team of manufacturing systems engineers, AI
                  researchers, and operational technology specialists who have
                  worked inside factories—not just consulted for them. Our
                  reinforcement-learning AI doesn’t rely on historical data
                  alone; it learns continuously from live production, adapting
                  to the realities of changeovers, material variability, and
                  equipment aging.
                </p>
                <p>
                  Based in Ontario, Canada, we’re committed to developing
                  world-class manufacturing AI right here at home—creating
                  Canadian intellectual property that helps our manufacturers
                  compete on the global stage.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-slate-100 p-8 lg:p-12">
              <div className="space-y-8">
                <div>
                  <Eye className="mb-2 h-8 w-8 text-primary-500" />
                  <h3 className="text-lg font-semibold">Mission</h3>
                  <p className="mt-1 text-slate-600">
                    To accelerate the adoption of Industry 4.0 technologies
                    among discrete manufacturers, creating measurable
                    operational improvements through intelligent systems.
                  </p>
                </div>
                <div>
                  <Target className="mb-2 h-8 w-8 text-primary-500" />
                  <h3 className="text-lg font-semibold">Vision</h3>
                  <p className="mt-1 text-slate-600">
                    A future where every manufacturing floor operates with the
                    precision, adaptability, and intelligence of a modern
                    software system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            heading="What Guides Us"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-500">
                  {value.icon}
                </div>
                <h3 className="mb-2 font-semibold">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Canadian Economic Impact */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mb-8 flex items-center justify-center gap-8">
            <Image
              src="/images/canada.png"
              alt="Canada"
              width={240}
              height={240}
              className="h-48 w-48 object-contain sm:h-60 sm:w-60"
            />
            <Image
              src="/images/ontario.png"
              alt="Ontario"
              width={240}
              height={240}
              className="h-48 w-48 object-contain sm:h-60 sm:w-60"
            />
          </div>
          <SectionHeading
            eyebrow="Canadian Innovation"
            heading="Driving Local Economic Development"
            description="We’re building world-class manufacturing AI in Canada, creating high-value jobs and intellectual property that strengthens Ontario’s advanced manufacturing ecosystem."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {canadianImpact.map((item) => (
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

      {/* Team */}
      <TeamGrid />

      {/* Certifications */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Compliance"
            heading="Certifications & Standards"
            description="We maintain the highest standards of quality and security in everything we deliver."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <Card key={cert.name} className="text-center">
                <ShieldCheck className="mx-auto mb-3 h-10 w-10 text-primary-500" />
                <h3 className="text-lg font-semibold">{cert.name}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {cert.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
