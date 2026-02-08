"use client";

import { useEffect, useRef, useState } from "react";

interface Step {
  title: string;
  description: string;
}

interface ServiceProcessFlowProps {
  steps: Step[];
}

export function ServiceProcessFlow({ steps }: ServiceProcessFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="mx-auto max-w-3xl">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="relative flex gap-5 pb-10 last:pb-0 sm:gap-8"
        >
          {/* Vertical connector line */}
          {index < steps.length - 1 && (
            <div
              className="absolute left-5 top-12 bottom-0 w-px origin-top transition-transform duration-700 ease-out sm:left-6"
              style={{
                background:
                  "linear-gradient(to bottom, #93c5fd, #dbeafe)",
                transform: visible ? "scaleY(1)" : "scaleY(0)",
                transitionDelay: `${index * 300 + 200}ms`,
              }}
            />
          )}

          {/* Node */}
          <div
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white shadow-md shadow-primary-500/20 ring-4 ring-primary-100 transition-all duration-500 ease-out sm:h-12 sm:w-12 sm:text-base"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0)",
              transitionDelay: `${index * 300}ms`,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Content card */}
          <div
            className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 ease-out sm:p-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(12px)",
              transitionDelay: `${index * 300 + 100}ms`,
            }}
          >
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
