import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how Iteranium helps manufacturers solve real operational challenges through AI-driven Industry 4.0 solutions.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-500">
              Case Studies
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Real-World Manufacturing Intelligence
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              How Iteranium applies AI, machine learning, and data-driven
              decision systems to solve critical operational challenges in
              discrete manufacturing.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {caseStudies.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`}>
                <Card className="group h-full p-8">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant="primary">{cs.industryContext}</Badge>
                    <Badge>{cs.function}</Badge>
                  </div>
                  <h2 className="mb-3 text-xl font-semibold">{cs.title}</h2>
                  <p className="mt-3 line-clamp-3 text-slate-600">
                    {cs.businessProblem}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Key Impact
                    </p>
                    <ul className="space-y-1">
                      {cs.businessImpact.map((impact) => (
                        <li
                          key={impact}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                          <span className="line-clamp-1">{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-500 transition-all group-hover:gap-2">
                    Read case study
                    <ArrowUpRight className="h-4 w-4" />
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Want Results Like These?"
        description="Let&rsquo;s discuss how Iteranium can address similar challenges in your manufacturing environment."
      />
    </>
  );
}
