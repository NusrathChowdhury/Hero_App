"use client";

import { TApp } from "@/types/app.type";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";

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

  const sharedData = {
    installedApps,
    setInstalledApps,
  };

  return (
    <ApppContext.Provider value={sharedData}>
      {children}
    </ApppContext.Provider>
  );
};

export default AppContext;