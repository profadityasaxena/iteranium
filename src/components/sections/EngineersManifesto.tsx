import { Container } from "@/components/ui/Container";

export function EngineersManifesto() {
  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-400">
              Our Belief
            </p>
            <h2 className="text-4xl font-bold text-white">We Are Engineers</h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-slate-300">
              We believe that the most complex systems in the world — the ones
              that feed, transport, and build civilization — deserve the same
              rigour, intelligence, and precision that we bring to any great
              engineering challenge.
            </p>

            <p className="text-lg font-semibold leading-relaxed text-white">
              We are not consultants who parachute in with frameworks. We are
              engineers who walk factory floors, understand the hum of a CNC
              machine, and know why a three-second cycle time matters.
            </p>

            <p className="text-lg leading-relaxed text-slate-300">
              We think in first principles. We design from constraints. We
              validate against production reality — not presentation decks.
            </p>

            <p className="text-lg leading-relaxed text-slate-300">
              We believe automation is not about replacing people. It is about
              freeing people to do the work that only people can do.
            </p>

            <p className="text-lg font-semibold leading-relaxed text-white">
              We believe data without decisions is noise. Intelligence means
              acting on what you know — with the confidence that your systems
              have earned it.
            </p>

            <p className="text-lg leading-relaxed text-slate-300">
              We believe every manufacturer — regardless of size — deserves
              access to world-class engineering thinking. The competitive edge
              of precision and intelligence should not belong only to the
              largest corporations.
            </p>

            <p className="text-lg leading-relaxed text-slate-300">
              We build for the long run. Not for the demo.
            </p>

            <p className="border-t border-slate-800 pt-8 text-xl font-bold text-primary-400">
              We are Iteranium. We are engineers.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
