import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CTASection } from "@/components/sections/CTASection";
import { jobOpenings } from "@/content/careers";
import { MapPin, Briefcase, Users, Rocket, GraduationCap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Iteranium and help build the future of smart manufacturing. We’re hiring engineers, data scientists, and consultants in Ontario, Canada.",
};

const perks = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Cutting-Edge Work",
    description:
      "Work on reinforcement learning, IIoT, and real-time manufacturing systems—not CRUD apps.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Small Team, Big Impact",
    description:
      "Your work directly impacts manufacturing operations for global companies. No bureaucracy.",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Continuous Learning",
    description:
      "Conference budget, learning stipend, and mentorship from experienced manufacturing technologists.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Work-Life Balance",
    description:
      "Flexible hybrid work, competitive compensation, comprehensive benefits, and generous PTO.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-500">
              Careers
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Build the Future of Manufacturing
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Join a team of manufacturing technologists, AI researchers, and
              systems engineers who are transforming how the world makes things.
              Based in Ontario, Canada.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Join */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Iteranium"
            heading="Why Join Our Team"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <Card key={perk.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-500">
                  {perk.icon}
                </div>
                <h3 className="mb-2 font-semibold">{perk.title}</h3>
                <p className="text-sm text-slate-600">{perk.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <div className="bg-slate-50">
        <TeamGrid />
      </div>

      {/* Open Positions */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Open Positions"
            heading="Current Opportunities"
            description="We’re growing our Ontario-based team. All positions contribute to building Canadian IP in manufacturing AI."
          />
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">
                      {job.description}
                    </p>
                    <Badge className="mt-3">{job.type}</Badge>
                  </div>
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    className="shrink-0"
                  >
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* General Application */}
      <CTASection
        heading="Don’t See Your Role?"
        description="We’re always looking for talented people who are passionate about manufacturing technology. Send us your resume."
        primaryCTA={{ label: "Send General Application", href: "/contact" }}
        secondaryCTA={{ label: "View Our Services", href: "/services" }}
        variant="dark"
      />
    </>
  );
}
