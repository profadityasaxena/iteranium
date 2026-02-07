import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 py-24 lg:py-36">
      {/* Animated industrial background */}
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
            Industry 4.0 &middot; AI &middot; Intelligent Systems
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Intelligent Systems for the{" "}
            <span className="text-primary-400">
              Next Era of Manufacturing
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 lg:text-xl">
            We combine deep manufacturing domain expertise with IIoT, MES, and
            reinforcement-learning AI to help discrete manufacturers evolve from
            connected factories to truly intelligent operations.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/services" size="lg">
              Explore Our Capabilities
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
