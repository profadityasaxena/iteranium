import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CTASection } from "@/components/sections/CTASection";
import { Building2, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Iteranium leadership team — experienced professionals in industrial automation, AI, data science, and manufacturing technology based in Ontario, Canada.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-500">
              Our Team
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              People Who Build Things
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Our team brings hands-on experience from the factory floor, the
              data centre, and the research lab. We hire practitioners—people
              who have built, deployed, and operated manufacturing systems,
              not just studied them.
            </p>
          </div>
        </Container>
      </section>

      {/* Team Grid */}
      <TeamGrid />

      {/* Partnerships */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Partnerships"
            heading="Industry & Academic Collaboration"
            description="We are actively seeking partnerships with manufacturing companies and academic institutions to strengthen the Ontario advanced manufacturing ecosystem."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-500">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Industry Partners
              </h3>
              <p className="text-slate-600">
                We partner with manufacturers, automation integrators, and
                technology providers to co-develop solutions, validate
                approaches in production environments, and create shared value
                across the supply chain. If you are a manufacturer looking to
                modernize or a technology company seeking domain expertise, we
                want to hear from you.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-500">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Academic Partners
              </h3>
              <p className="text-slate-600">
                We collaborate with universities and research institutions on
                applied research in manufacturing AI, industrial data systems,
                and intelligent automation. Our goal is to bridge the gap
                between academic innovation and production-ready deployment,
                creating pathways for knowledge transfer and talent development.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Interested in Partnering?"
        description="Whether you represent a manufacturer, technology provider, or academic institution, we'd love to explore how we can collaborate."
        primaryCTA={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCTA={{ label: "View Our Services", href: "/services" }}
        variant="dark"
      />
    </>
  );
}
