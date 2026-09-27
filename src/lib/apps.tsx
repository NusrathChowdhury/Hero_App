import { TApp } from "@/types/app.type";

export const getApps = async (): Promise<TApp[]> => {
  const res = await fetch("http://localhost:3000/data.json");

  if (!res.ok) {
    throw new Error(`Failed to fetch apps: ${res.status}`);
  }

  const data: TApp[] = await res.json();

  return data;
};