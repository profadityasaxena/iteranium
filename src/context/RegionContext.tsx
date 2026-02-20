"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type Region = "ca" | "global" | null;

interface RegionContextValue {
  region: Region;
  setRegion: (r: "ca" | "global") => void;
}

const RegionContext = createContext<RegionContextValue>({
  region: null,
  setRegion: () => {},
});

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegionState] = useState<Region>(null);

  useEffect(() => {
    // Try to read from cookie
    const match = document.cookie.match(/(?:^|;\s*)region=([^;]+)/);
    if (match) {
      setRegionState(match[1] as "ca" | "global");
    } else if (
      typeof window !== "undefined" &&
      window.location.hostname.endsWith(".ca")
    ) {
      // .ca domain: auto-set to Canada
      writeRegionCookie("ca");
      setRegionState("ca");
    }
  }, []);

  const setRegion = (r: "ca" | "global") => {
    writeRegionCookie(r);
    setRegionState(r);
  };

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
}

function writeRegionCookie(r: string) {
  document.cookie = `region=${r};max-age=${60 * 60 * 24 * 30};path=/;SameSite=Lax`;
}

export function useRegion() {
  return useContext(RegionContext);
}
