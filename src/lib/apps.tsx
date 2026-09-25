import { TApp } from "@/types/app.type";

export const getApps = async (): Promise<TApp[]> => {
  const res = await fetch("http://localhost:3001/data.json");

  const data: TApp[] = await res.json();

  return data;
};