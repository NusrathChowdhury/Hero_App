"use client";

import { TApp } from "@/types/app.type";
import React, {
  ReactNode,
  useEffect,
  useState,
  createContext,
} from "react";

type TAppContext = {
  installedApps: TApp[];
  setInstalledApps: React.Dispatch<React.SetStateAction<TApp[]>>;
};

export const ApppContext = createContext<TAppContext>({
  installedApps: [],
  setInstalledApps: () => {},
});

const AppContext = ({ children }: { children: ReactNode }) => {
  const [installedApps, setInstalledApps] = useState<TApp[]>([]);

  // Load installed apps from localStorage
  useEffect(() => {
    const savedApps = localStorage.getItem("installedApps");

    if (savedApps) {
      setInstalledApps(JSON.parse(savedApps));
    }
  }, []);

  // Save installed apps to localStorage
  useEffect(() => {
    localStorage.setItem(
      "installedApps",
      JSON.stringify(installedApps)
    );
  }, [installedApps]);

  return (
    <ApppContext.Provider
      value={{
        installedApps,
        setInstalledApps,
      }}
    >
      {children}
    </ApppContext.Provider>
  );
};

export default AppContext;