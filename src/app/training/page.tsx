import type { Metadata } from "next";
import Image from "next/image";
import {
  Brain,
  BarChart3,
  Cpu,
  Cloud,
  Network,
  GraduationCap,
  Building2,
  Users,
  Lightbulb,
  Rocket,
  DollarSign,
  Target,
  Handshake,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Boxes,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { trainingPrograms } from "@/content/training";

export const metadata: Metadata = {
  title: "Training & Incubation",
  description:
    "Iteranium provides industry training in AI, Data Science, ML, and Cloud Computing, plus an Industry 4.0 incubation program to help SMBs build smart manufacturing businesses in Ontario.",
};

const iconMap: Record<string, React.ElementType> = {
  Brain,
  BarChart3,
  Cpu,
  Cloud,
  Network,
};

const incubationPhases = [
  {
    phase: "01",
    title: "Discovery & Assessment",
    description:
      "We evaluate your manufacturing concept, technology readiness, and market opportunity. Together, we define a clear roadmap for building a viable Industry 4.0 business.",
    duration: "2–4 weeks",
  },
  {
    phase: "02",
    title: "Funding & Grant Strategy",
    description:
      "Our team helps identify and apply for relevant federal and provincial funding programs—including IRAP, OCI, FedDev Ontario, and SRED—to de-risk your investment and accelerate growth.",
    duration: "4–8 weeks",
  },
  {
    phase: "03",
    title: "Product & Technology Development",
    description:
      "We co-develop your product or platform using our Industry 4.0 technology stack—IIoT, MES, AI/ML, and cloud infrastructure—so you launch with production-grade capability.",
    duration: "3–6 months",
  },
  {
    phase: "04",
    title: "Go-to-Market & Scale",
    description:
      "We support your market entry with customer acquisition strategy, pilot program design, pricing frameworks, and introductions to our manufacturing industry network.",
    duration: "Ongoing",
  },
];

const incubationBenefits = [
  "Access to Iteranium's Industry 4.0 technology stack and development tools",
  "Guidance from manufacturing domain experts and solution architects",
  "Funding application support (IRAP, OCI, FedDev, SRED)",
  "Go-to-market strategy and customer introduction support",
  "Shared infrastructure and development environments",
  "Mentorship from senior Industry 4.0 practitioners",
  "Connection to Ontario's advanced manufacturing ecosystem",
  "Product validation and go-to-market support",
];

export default function TrainingPage() {
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
              Training & Incubation
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Build Capability. Build Companies.
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              From upskilling teams in AI and Industry 4.0 technologies to
              incubating the next generation of smart manufacturing businesses in
              Ontario—we invest in people and ideas that strengthen Canada’s
              industrial future.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#training-programs" size="lg">
                Training Programs
              </Button>
              <Button href="#incubation" variant="secondary" size="lg">
                Incubation Program
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── TRAINING SECTION ─── */}

      {/* Audience Cards */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                <Building2 className="h-6 w-6 text-primary-500" />
              </div>
              <h2 className="mb-3 text-2xl font-bold">
                For Industry Professionals
              </h2>
              <p className="text-slate-600">
                Upskill your engineering, operations, and IT teams with
                practical, production-context training. Our programs are designed
                around real manufacturing challenges and deliver skills that
                translate directly to measurable operational improvements.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  Hands-on labs with real industrial datasets
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  Taught by practitioners with manufacturing experience
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  Customizable to your industry and operational context
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                <GraduationCap className="h-6 w-6 text-primary-500" />
              </div>
              <h2 className="mb-3 text-2xl font-bold">
                For Academic Institutions
              </h2>
              <p className="text-slate-600">
                Partner with Iteranium to bring industry-relevant curriculum to
                your students. Our programs bridge the gap between academic
                theory and industrial practice, preparing graduates for careers
                in smart manufacturing and digital transformation.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  Curriculum-aligned modules and guest lectures
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  Research collaboration opportunities
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  Access to industry tools and lab environments
                </li>
              </ul>
            </Card>

            <Card className="relative overflow-hidden border-primary-200 p-8">
              <div className="absolute top-0 right-0 rounded-bl-lg bg-primary-500 px-3 py-1">
                <span className="text-xs font-semibold text-white">New</span>
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-50">
                <Rocket className="h-6 w-6 text-accent-600" />
              </div>
              <h2 className="mb-3 text-2xl font-bold">For SMB Founders</h2>
              <p className="text-slate-600">
                Have an idea for a smart manufacturing product or service? Our
                incubation program provides the technology, funding support, and
                industry network to help you build a viable Industry 4.0
                business right here in Ontario.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  Funding strategy and grant application support
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  Access to our Industry 4.0 technology platform
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  Go-to-market and customer acquisition support
                </li>
              </ul>
              <div className="mt-6">
                <Button href="#incubation" variant="secondary" size="sm">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Training Programs */}
      <section id="training-programs" className="bg-slate-50 py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Programs"
            heading="Training Programs"
            description="Comprehensive training across the core technologies powering Industry 4.0 and digital transformation."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trainingPrograms.map((program) => {
              const Icon = iconMap[program.icon] || Brain;
              return (
                <Card key={program.slug} className="p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                    <Icon className="h-6 w-6 text-primary-500" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    {program.title}
                  </h3>
                  <p className="line-clamp-3 text-sm text-slate-600">
                    {program.description}
                  </p>

                  <div className="mt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Key Topics
                    </p>
                    <ul className="space-y-1">
                      {program.topics.slice(0, 4).map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                          <span className="line-clamp-1">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {program.deliveryFormats.map((format) => (
                      <Badge key={format} variant="outline">
                        {format}
                      </Badge>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-slate-500">
                    Duration: {program.duration}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Train with Iteranium */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Iteranium"
            heading="Why Train with Us"
            description="Our training programs are built on real-world manufacturing experience and a deep commitment to building local capability."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Taught by Practitioners",
                description:
                  "Our instructors bring hands-on experience from real manufacturing AI projects, not just academic theory.",
              },
              {
                icon: Building2,
                title: "Real Manufacturing Data",
                description:
                  "Training exercises use realistic industrial datasets and scenarios drawn from production environments.",
              },
              {
                icon: Lightbulb,
                title: "Canadian IP Focus",
                description:
                  "Programs emphasize building local talent and intellectual property to support Ontario’s innovation ecosystem.",
              },
              {
                icon: GraduationCap,
                title: "Customizable Curriculum",
                description:
                  "Programs can be tailored to your industry context, technology stack, and organizational maturity level.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50">
                  <item.icon className="h-7 w-7 text-primary-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── INCUBATION SECTION ─── */}

      {/* Incubation Hero */}
      <section
        id="incubation"
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 py-16 lg:py-24"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-4 border-primary-400/30 bg-primary-500/10 text-primary-300">
                Incubation Program
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Building the Next Generation of Smart Manufacturing Businesses
                in Ontario
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Canada’s manufacturing sector needs more than technology
                adoption—it needs new ventures that create local IP,
                high-value jobs, and export-ready products. Our incubation
                program helps small and medium businesses turn Industry 4.0
                ideas into funded, market-ready companies.
              </p>
              <div className="mt-8 flex items-center gap-5">
                <div className="rounded-xl bg-white/95 p-3">
                  <Image
                    src="/images/canada.png"
                    alt="Canada"
                    width={160}
                    height={160}
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <div className="rounded-xl bg-white/95 p-3">
                  <Image
                    src="/images/ontario.png"
                    alt="Ontario"
                    width={160}
                    height={160}
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-slate-300">
                  Supporting Ontario's Advanced Manufacturing Ecosystem
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: DollarSign,
                  label: "Funding Support",
                  detail: "IRAP, OCI, FedDev, SRED",
                },
                {
                  icon: Boxes,
                  label: "Technology Platform",
                  detail: "IIoT, MES, AI/ML, Cloud",
                },
                {
                  icon: Handshake,
                  label: "Industry Network",
                  detail: "Customer introductions",
                },
                {
                  icon: TrendingUp,
                  label: "Go-to-Market",
                  detail: "Strategy & execution",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <item.icon className="mb-3 h-6 w-6 text-primary-400" />
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Who Is This For */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Who Is This For"
            heading="Ideal Incubation Candidates"
            description="Our program is designed for ambitious entrepreneurs and small businesses ready to build scalable Industry 4.0 products and services."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Manufacturing Entrepreneurs",
                description:
                  "Founders with a vision for solving real manufacturing problems using IIoT, AI, automation, or data analytics.",
              },
              {
                icon: Building2,
                title: "SMBs Entering Industry 4.0",
                description:
                  "Existing small and medium manufacturers looking to develop proprietary smart manufacturing products or services.",
              },
              {
                icon: Lightbulb,
                title: "Technology Innovators",
                description:
                  "Teams with innovative technology concepts applicable to manufacturing—from edge computing to AI-driven quality systems.",
              },
              {
                icon: GraduationCap,
                title: "Academic Spin-offs",
                description:
                  "University research teams commercializing manufacturing technology innovations with industry-ready applications.",
              },
              {
                icon: Users,
                title: "Industry Veterans",
                description:
                  "Experienced manufacturing professionals launching ventures to solve pain points they’ve witnessed firsthand.",
              },
              {
                icon: ShieldCheck,
                title: "Regulated Sector Startups",
                description:
                  "Ventures targeting regulated industries like life sciences, food safety, or aerospace where compliance expertise matters.",
              },
            ].map((item) => (
              <Card key={item.title} className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                  <item.icon className="h-5 w-5 text-primary-500" />
                </div>
                <h3 className="mb-2 font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Incubation Process */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            heading="Incubation Process"
            description="A structured, milestone-driven program that takes you from concept to market with expert support at every stage."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-4">
            {incubationPhases.map((item, index) => (
              <div key={item.phase} className="relative">
                {index < incubationPhases.length - 1 && (
                  <div className="absolute top-8 right-0 hidden h-0.5 w-full translate-x-1/2 bg-gradient-to-r from-primary-200 to-primary-100 lg:block" />
                )}
                <div className="relative rounded-xl border border-slate-200 bg-white p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
                    {item.phase}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wider text-primary-500">
                    {item.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What You Get */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="What You Get"
                heading="Incubation Benefits"
                align="left"
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {incubationBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                    <span className="text-sm text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-8 lg:p-10">
              <Rocket className="mb-4 h-10 w-10 text-primary-500" />
              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                Why Ontario?
              </h3>
              <p className="text-slate-600">
                Ontario is home to one of North America’s largest
                manufacturing ecosystems, world-class universities, and a
                growing cluster of AI talent. Combined with federal and
                provincial funding programs designed to support innovation,
                it’s the ideal environment to build a smart manufacturing
                company.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Access to $2B+ in annual manufacturing R&D funding programs",
                  "Proximity to major automotive, aerospace, and food manufacturing clusters",
                  "Strong talent pipeline from Ontario’s universities and colleges",
                  "Growing ecosystem of AI labs, accelerators, and industry partners",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                    <span className="text-sm text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src="/images/canada.png"
                  alt="Canada"
                  width={140}
                  height={140}
                  className="h-14 w-14 object-contain"
                />
                <Image
                  src="/images/ontario.png"
                  alt="Ontario"
                  width={140}
                  height={140}
                  className="h-14 w-14 object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Ready to Build Something Extraordinary?"
        description="Whether you’re upskilling your team or launching the next great Canadian manufacturing venture, let’s talk."
        primaryCTA={{ label: "Apply to Incubation Program", href: "/contact" }}
        secondaryCTA={{ label: "Explore Training Programs", href: "#training-programs" }}
      />
    </>
  );
}
