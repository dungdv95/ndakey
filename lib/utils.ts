import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isEnglish = (locale: string) => {
  if (locale === "/en") {
    return true;
  }
  return false;
};
