import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RefreshCw, ClipboardCheck, Users, Layers } from "lucide-react";

const differentiators = [
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: "Consulting-First, Always",
    description:
      "Every engagement begins with structured process discovery, current-state assessment, and constraint identification—before we propose a single solution.",
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Iterative by Design",
    description:
      "Solutions emerge through multiple reviews and progressive refinement. We iterate toward clarity and confidence, not one-shot guesswork.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Clients as Co-Creators",
    description:
      "We guide structured choices, not prescribe answers. Your stakeholders, technical leads, and delivery constraints shape every design decision.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Standards-Driven Rigour",
    description:
      "Our processes align with internationally recognized principles of quality management and process maturity—ensuring consistency, auditability, and trust.",
  },
];

export function ValueProposition() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Iteranium"
          heading="The Element of Improvement"
          description="We don't claim to have the answer upfront. We guide you through structured iteration—mapping, refining, and co-creating until the solution is one you can trust, operate, and grow with."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {differentiators.map((item) => (
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
  );
}
