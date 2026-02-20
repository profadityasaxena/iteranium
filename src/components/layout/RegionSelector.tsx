"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import { useRegion } from "@/context/RegionContext";

export function RegionSelector() {
  const { region, setRegion } = useRegion();
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Only show on .com (or localhost for dev) when no region is set yet
    const isCA =
      typeof window !== "undefined" &&
      (window.location.hostname.endsWith(".ca") ||
        window.location.hostname.includes(".ca:"));

    if (!isCA && region === null) {
      setVisible(true);
    }
  }, [region]);

  if (!visible) return null;

  const handleSelect = (r: "ca" | "global") => {
    setFadeOut(true);
    setTimeout(() => {
      setRegion(r);
      setVisible(false);
    }, 350);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center px-6"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, #0d1b2e 0%, #060d14 100%)",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 350ms ease",
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,160,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(100,160,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative flex w-full max-w-lg flex-col items-center text-center">
        {/* Logo */}
        <Image
          src="/images/logo-hero.png"
          alt="Iteranium"
          width={600}
          height={150}
          className="mb-12 h-40 w-auto opacity-95"
          priority
        />

        {/* Divider */}
        <div className="mb-10 h-px w-24 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

        {/* Heading */}
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Choose Your Region
        </h1>
        <p className="mb-12 text-base text-slate-400">
          Engineering the Future of Industry.
        </p>

        {/* Region buttons */}
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-6">
          <button
            onClick={() => handleSelect("ca")}
            className="group flex-1 rounded-xl border border-slate-700 bg-slate-800/60 px-8 py-5 text-center transition-all duration-200 hover:border-primary-500/60 hover:bg-slate-800 hover:shadow-lg hover:shadow-primary-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/10">
              <Image
                src="/images/canada.png"
                alt="Canada"
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
            </div>
            <span className="block text-lg font-semibold text-white transition-colors group-hover:text-primary-300">
              Canada
            </span>
            <span className="mt-1 block text-xs text-slate-500">
              Advisory & Transformation
            </span>
          </button>

          <button
            onClick={() => handleSelect("global")}
            className="group flex-1 rounded-xl border border-slate-700 bg-slate-800/60 px-8 py-5 text-center transition-all duration-200 hover:border-primary-500/60 hover:bg-slate-800 hover:shadow-lg hover:shadow-primary-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Globe className="h-7 w-7 text-slate-300 transition-colors group-hover:text-primary-300" />
            </div>
            <span className="block text-lg font-semibold text-white transition-colors group-hover:text-primary-300">
              Global
            </span>
            <span className="mt-1 block text-xs text-slate-500">
              Engineering & Systems
            </span>
          </button>
        </div>

        <p className="mt-8 text-xs text-slate-600">
          Your selection will personalize your experience.
        </p>
      </div>
    </div>
  );
}
