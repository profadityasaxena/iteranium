import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.businessProblem.slice(0, 160),
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);

  if (!cs) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="primary">{cs.industryContext}</Badge>
              <Badge>{cs.function}</Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {cs.title}
            </h1>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Business Problem</h2>
              <p className="text-lg text-slate-600">{cs.businessProblem}</p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">
                Strategic Intervention
              </h2>
              <p className="text-lg text-slate-600">
                {cs.strategicIntervention}
              </p>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold">Solution Architecture</h2>
              <ul className="space-y-3">
                {cs.solutionArchitecture.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary-500" />
                    <span className="text-lg text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold">Business Impact</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {cs.businessImpact.map((impact) => (
                  <Card key={impact} className="flex items-start gap-3 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                    <span className="text-slate-700">{impact}</span>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-l-4 border-l-primary-500 bg-slate-50 p-8">
              <h2 className="mb-3 text-xl font-bold">Why This Matters</h2>
              <p className="text-lg text-slate-600">{cs.whyThisMatters}</p>
            </Card>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Explore How This Applies to Your Operations"
        description="Let&rsquo;s discuss how Iteranium can address similar challenges in your manufacturing environment."
      />
    </>
  );
}
