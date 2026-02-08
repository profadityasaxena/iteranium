import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { industries, getIndustryBySlug } from "@/content/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: industry.name,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

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
              Industries
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {industry.name}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              {industry.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Process Flow */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            heading="How We Deliver Value"
            description="A structured, iterative process tailored to your operations — from discovery through scale."
          />
          <div className="mx-auto max-w-3xl">
            {industry.processSteps.map((step, index) => (
              <div key={step.title} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Vertical connector line */}
                {index < industry.processSteps.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-linear-to-b from-primary-300 to-primary-100" />
                )}
                {/* Step number circle */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
                  {index + 1}
                </div>
                {/* Step content */}
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-slate-600">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading={`Transform Your ${industry.name} Operations`}
        description={`Let's discuss how Iteranium can address your ${industry.name.toLowerCase()} manufacturing challenges.`}
      />
    </>
  );
}
