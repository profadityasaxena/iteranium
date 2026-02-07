import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/content/case-studies";

export function FeaturedCaseStudy() {
  const featured = caseStudies[0];

  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-500">
              Featured Case Study
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {featured.strategicIntervention}
            </p>

            <div className="mt-8 space-y-3">
              {featured.businessImpact.map((impact) => (
                <div key={impact} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  <p className="text-slate-700">{impact}</p>
                </div>
              ))}
            </div>

            <Button href="/case-studies" className="mt-8">
              View All Case Studies
            </Button>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Why This Matters
            </p>
            <blockquote className="text-lg italic text-slate-700">
              &ldquo;{featured.whyThisMatters}&rdquo;
            </blockquote>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-500">
                {featured.industryContext}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                {featured.function}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
