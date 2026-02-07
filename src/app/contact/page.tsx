"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  RefreshCw,
  ClipboardCheck,
  Users,
  Target,
} from "lucide-react";

const industries = [
  "Automotive & Auto Components",
  "Electric Vehicles & Battery Manufacturing",
  "Electronics & Semiconductor Manufacturing",
  "Food & Beverage",
  "Consumer Goods & Packaging",
  "Industrial Equipment & Heavy Manufacturing",
  "Metals, Mining & Process-Intensive Operations",
  "Life Sciences & Regulated Manufacturing",
  "Renewable Energy & Clean Manufacturing",
  "Other",
];

const faqItems = [
  {
    question: "What industries do you serve?",
    answer:
      "We serve discrete manufacturers across automotive, EV & battery, electronics & semiconductor, food & beverage, consumer goods, industrial equipment, metals & mining, life sciences, and renewable energy sectors. Our solutions are adaptable to other manufacturing verticals as well.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Engagement timelines vary based on scope. A focused proof-of-concept can be delivered in 8–12 weeks. Full-scale Industry 4.0 transformations typically span 6–18 months, delivered in phased sprints with value at each milestone.",
  },
  {
    question: "Do you offer proof-of-concept engagements?",
    answer:
      "Yes. We recommend starting with a targeted PoC that demonstrates value on a single production line or process. This de-risks the investment and builds confidence before scaling across the operation.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are based in Ontario, Canada. Our team can be reached via email or through the contact form on this page.",
  },
  {
    question: "Do you offer training programs?",
    answer:
      "Yes. We provide training for both industry professionals and academic institutions in Artificial Intelligence, Data Science, Machine Learning, Cloud Computing, and core digitalization technologies. Programs are available as on-site workshops, virtual instructor-led sessions, and self-paced online courses.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const phone = (formData.get("phone") as string) || "Not provided";
    const industry = formData.get("industry") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(
      `Inquiry from ${name} - ${company}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Phone: ${phone}`,
        `Industry: ${industry}`,
        ``,
        `Message:`,
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-500">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s Discuss Your Transformation
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Ready to modernize your manufacturing operations? Get in touch and
              we&apos;ll schedule a consultation to discuss your specific
              challenges and goals.
            </p>
          </div>
        </Container>
      </section>

      {/* Philosophy & Approach */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-500">
              Our Philosophy
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Element of Improvement
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Iteranium is built on the belief that the right solution is rarely
              found in a single step. Through structured iteration, disciplined
              process mapping, and standards-driven design, we help organizations
              arrive at solutions they can trust, operate, and grow with.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-500">
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">
                Discover &amp; Map
              </h3>
              <p className="text-sm text-slate-600">
                Every engagement begins with structured process discovery,
                current-state assessment, and constraint identification.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-500">
                <RefreshCw className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">
                Iterate &amp; Refine
              </h3>
              <p className="text-sm text-slate-600">
                Solutions emerge through multiple reviews, progressive
                refinement, and increasing clarity—not one-shot guesswork.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-500">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">
                Co-Create
              </h3>
              <p className="text-sm text-slate-600">
                Clients are co-creators, not passive recipients. We guide
                structured choices toward the right-fit solution together.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary-50 p-3 text-primary-500">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">
                Optimal Outcome
              </h3>
              <p className="text-sm text-slate-600">
                We arrive at a point where trade-offs are understood, risks are
                explicit, and decisions are defensible.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Input
                    label="Full Name"
                    name="name"
                    placeholder="John Smith"
                    required
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Input
                    label="Company"
                    name="company"
                    placeholder="Your company name"
                    required
                  />
                  <Input
                    label="Phone (Optional)"
                    name="phone"
                    type="tel"
                    placeholder="+1 (437) 848-9595"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="industry"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    className="block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    required
                  >
                    <option value="">Select your industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>
                <Textarea
                  label="Message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your manufacturing challenges and what you're looking to achieve..."
                  required
                />
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 lg:col-span-2">
              <Card className="p-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 shrink-0 text-primary-500" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-sm text-primary-500 hover:underline"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 shrink-0 text-primary-500" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-sm text-primary-500 hover:underline"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary-500" />
                  <h3 className="font-semibold">Location</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Ontario, Canada
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white"
                >
                  <button
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                  >
                    <span className="font-medium text-slate-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="border-t border-slate-100 px-6 py-4">
                      <p className="text-slate-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
