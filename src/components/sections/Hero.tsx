"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "./HeroBackground";
import { useRegion } from "@/context/RegionContext";

const CONTENT = {
  ca: {
    eyebrow: "Industry 4.0 · Advisory · Transformation",
    headline: (
      <>
        Strategic Advisory for{" "}
        <span className="text-primary-400">
          Industry 4.0 & Industry 5.0 Transformation
        </span>
      </>
    ),
    sub: "We help manufacturing organizations design, govern, and execute digital transformation strategies grounded in first-principles engineering and AI-driven intelligence.",
    cta1: "Our Advisory Services",
    cta2: "Start a Conversation",
  },
  global: {
    eyebrow: "Industry 4.0 · AI · Intelligent Systems",
    headline: (
      <>
        Intelligent Systems for the{" "}
        <span className="text-primary-400">
          Next Era of Manufacturing
        </span>
      </>
    ),
    sub: "We combine deep manufacturing domain expertise with IIoT, MES, and reinforcement-learning AI to help discrete manufacturers evolve from connected factories to truly intelligent operations.",
    cta1: "Explore Our Capabilities",
    cta2: "Start a Conversation",
  },
};

export function Hero() {
  const { region } = useRegion();
  // Default to global while region cookie is being read — avoids flash
  const content = region === "ca" ? CONTENT.ca : CONTENT.global;

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-primary-900 py-24 lg:py-36">
      <HeroBackground />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Image
            src="/images/logo-hero.png"
            alt="Iteranium"
            width={1200}
            height={300}
            className="mx-auto mb-8 h-48 w-auto sm:h-56 lg:h-72"
            priority
          />
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-300">
            {content.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {content.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 lg:text-xl">
            {content.sub}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/services" size="lg">
              {content.cta1}
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              {content.cta2}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
