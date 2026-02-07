import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PROCESS_STANDARDS } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";

export function SocialProof() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-12">
      <Container>
        <div className="flex flex-col items-center gap-10">
          {/* Canada & Ontario logos */}
          <div className="flex items-center gap-8 sm:gap-12">
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/images/canada.png"
                alt="Canada"
                width={140}
                height={140}
                className="h-20 w-20 object-contain sm:h-24 sm:w-24"
              />
              <span className="text-xs font-medium text-slate-500">
                Proudly Canadian
              </span>
            </div>
            <div className="h-16 w-px bg-slate-300" />
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/images/ontario.png"
                alt="Ontario"
                width={140}
                height={140}
                className="h-20 w-20 object-contain sm:h-24 sm:w-24"
              />
              <span className="text-xs font-medium text-slate-500">
                Ontario-Based
              </span>
            </div>
          </div>

          {/* Process Standards */}
          <div className="w-full border-t border-slate-200 pt-8">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
              Built to Enterprise Standards
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {PROCESS_STANDARDS.map((standard) => (
                <div
                  key={standard.name}
                  className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm"
                >
                  <ShieldCheck className="h-6 w-6 shrink-0 text-primary-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      {standard.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {standard.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
