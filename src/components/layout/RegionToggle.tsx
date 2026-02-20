"use client";

import Image from "next/image";
import { Globe } from "lucide-react";
import { useRegion } from "@/context/RegionContext";

interface RegionToggleProps {
  variant?: "header" | "footer";
}

export function RegionToggle({ variant = "header" }: RegionToggleProps) {
  const { region, setRegion } = useRegion();

  if (!region) return null;

  const isCA = region === "ca";

  const handleSwitch = () => {
    setRegion(isCA ? "global" : "ca");
  };

  if (variant === "footer") {
    return (
      <button
        onClick={handleSwitch}
        className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-400 transition-colors hover:border-slate-500 hover:text-slate-300"
        title={`Switch to ${isCA ? "Global" : "Canada"} mode`}
      >
        {isCA ? (
          <Image
            src="/images/canada.png"
            alt="Canada"
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
          />
        ) : (
          <Globe className="h-3.5 w-3.5" />
        )}
        <span>{isCA ? "Canada" : "Global"}</span>
        <span className="ml-1 text-slate-600">· Switch</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleSwitch}
      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600"
      title={`Switch to ${isCA ? "Global" : "Canada"} mode`}
    >
      {isCA ? (
        <Image
          src="/images/canada.png"
          alt="Canada"
          width={18}
          height={18}
          className="h-4 w-4 object-contain"
        />
      ) : (
        <Globe className="h-4 w-4" />
      )}
      <span>{isCA ? "Canada" : "Global"}</span>
    </button>
  );
}
