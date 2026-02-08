import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
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
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Image
              src="/images/logo-white-bg.png"
              alt="Iteranium"
              width={200}
              height={50}
              className="mx-auto mb-6 h-12 w-auto"
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

      <CTASection
        heading={`Transform Your ${industry.name} Operations`}
        description={`Let’s discuss how Iteranium can address your ${industry.name.toLowerCase()} manufacturing challenges.`}
      />
    </>
  );
}
