"use client";

import { useContext } from "react";
import { toast } from "react-toastify";
import { ApppContext } from "@/context/AppContext";
import { TApp } from "@/types/app.type";

type Props = {
  app: TApp;
};

const InstallAppButton = ({ app }: Props) => {
  const { installedApps, setInstalledApps } = useContext(ApppContext);

  const handleInstall = () => {
    const alreadyInstalled = installedApps.some(
      (item) => item.id === app.id
    );

    if (alreadyInstalled) {
      toast.info(`${app.title} is already installed!`);
      return;
    }

    setInstalledApps((prev) => [...prev, app]);

    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <button
      onClick={handleInstall}
      className="btn btn-primary rounded-full px-7 shadow-lg shadow-purple-200"
    >
      Install
    </button>
  );
};

export default InstallAppButton;