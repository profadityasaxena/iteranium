import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 py-24 lg:py-36">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

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
            Canadian Innovation &middot; Global Impact
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Full-Stack Industry 4.0 Transformation for{" "}
            <span className="text-primary-400">Discrete Manufacturers</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 lg:text-xl">
            Our solutions combine IIoT, MES, and reinforcement-learning AI that
            learns from live shop-floor data to improve scheduling, reduce
            downtime, and maximize throughput.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/services" size="lg">
              Explore Our Solutions
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Book a Consultation
            </Button>
          </div>

          {/* Canada & Ontario trust badges */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-2xl bg-white/95 p-4 shadow-lg">
                <Image
                  src="/images/canada.png"
                  alt="Canada"
                  width={140}
                  height={140}
                  className="h-28 w-28 object-contain sm:h-36 sm:w-36"
                />
              </div>
              <span className="text-sm font-medium text-slate-200">
                Proudly Canadian
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-2xl bg-white/95 p-4 shadow-lg">
                <Image
                  src="/images/ontario.png"
                  alt="Ontario"
                  width={140}
                  height={140}
                  className="h-28 w-28 object-contain sm:h-36 sm:w-36"
                />
              </div>
              <span className="text-sm font-medium text-slate-200">
                Ontario-Based
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
