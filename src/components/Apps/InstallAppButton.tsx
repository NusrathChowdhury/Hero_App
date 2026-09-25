"use client";

import { TApp } from "@/types/app.type";

type Props = {
  app: TApp;
};

const InstallAppButton = ({ app }: Props) => {
  const handleInstall = () => {
    console.log(app);
    console.log("whatever");
  };

  return (
    <button
      className="btn btn-primary rounded-full px-7 shadow-lg shadow-purple-200"
      onClick={handleInstall}
    >
      Install
    </button>
  );
};

export default InstallAppButton;