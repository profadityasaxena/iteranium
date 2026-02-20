import { Container } from "@/components/ui/Container";

export function EngineersManifesto() {
  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {/* Section label */}
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary-400">
            Manifesto
          </p>

          {/* Rule */}
          <div className="mb-10 h-px bg-linear-to-r from-transparent via-slate-700 to-transparent" />

          {/* Title */}
          <h2 className="mb-12 text-3xl font-bold uppercase tracking-widest text-white sm:text-4xl">
            We Are Engineers
          </h2>

          {/* Body */}
          <div className="space-y-8 text-slate-300">
            <p className="leading-relaxed">
              There are people who model economies.<br />
              There are people who write policies.<br />
              There are people who argue cases.
            </p>

            <p className="text-lg font-semibold text-white">
              Engineers build the systems that make civilization work.
            </p>

            <p className="leading-relaxed">
              Rockets do not reach orbit because someone drafted a strategy deck.<br />
              Factories do not become intelligent because a committee approved a roadmap.<br />
              AI does not transform industry because it sounds impressive.
            </p>

            <p className="font-medium text-slate-200">
              It happens when engineers sit down and design something that actually works.
            </p>

            <p className="leading-relaxed">
              Engineering is applied physics.<br />
              Applied mathematics.<br />
              Applied research.<br />
              Turned into machines, code, infrastructure, and production systems.
            </p>

            <p className="text-lg font-semibold text-white">
              We believe Industry 4.0 and Industry 5.0 are not consulting trends.<br />
              They are engineering problems.
            </p>

            <p className="leading-relaxed text-slate-400">
              Integrate machines.<br />
              Connect data.<br />
              Design architectures.<br />
              Train models.<br />
              Deploy systems.<br />
              Measure reality.<br />
              Improve it.
            </p>

            <p className="text-xl font-bold tracking-widest text-primary-400">
              Repeat.
            </p>

            <p className="leading-relaxed">
              Engineers take fundamental research and convert it into operating capability.<br />
              They build spacecraft.<br />
              They build power grids.<br />
              They build manufacturing systems.<br />
              They build the intelligence layer on top of industry.
            </p>

            <p className="leading-relaxed text-slate-400">
              We respect strategy.<br />
              We understand governance.<br />
              We align with business objectives.
            </p>

            <p className="text-lg font-semibold text-white">
              But none of it matters if the system doesn&apos;t run.
            </p>

            <p className="font-medium text-slate-200">
              We are here to build systems that run.
            </p>

            <p className="leading-relaxed text-slate-400">
              Production-ready.<br />
              Scalable.<br />
              Grounded in physics.<br />
              Auditable.<br />
              Real.
            </p>

            <div className="border-t border-slate-800 pt-8">
              <p className="mb-2 text-slate-400">That is how progress happens.</p>
              <p className="text-xl font-bold text-primary-400">
                And that is what we do.
              </p>
            </div>
          </div>

          {/* Rule */}
          <div className="mt-10 h-px bg-linear-to-r from-transparent via-slate-700 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
