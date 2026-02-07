import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  heading?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: "light" | "dark";
}

export function CTASection({
  heading = "Ready to Transform Your Operations?",
  description = "Let’s discuss how Iteranium can help modernize your manufacturing processes with Industry 4.0 technology.",
  primaryCTA = { label: "Schedule a Consultation", href: "/contact" },
  secondaryCTA = { label: "Explore Our Services", href: "/services" },
  variant = "dark",
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "py-16 lg:py-24",
        variant === "dark" ? "bg-slate-900 text-white" : "bg-primary-50"
      )}
    >
      <Container className="text-center">
        <h2
          className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl",
            variant === "dark" ? "text-white" : "text-slate-900"
          )}
        >
          {heading}
        </h2>
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-lg",
            variant === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryCTA.href}>{primaryCTA.label}</Button>
          <Button
            href={secondaryCTA.href}
            variant="secondary"
            className={
              variant === "dark"
                ? "border-white text-white hover:bg-white/10"
                : ""
            }
          >
            {secondaryCTA.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
