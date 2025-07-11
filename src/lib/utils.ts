import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow, format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function intToHexColor(
  num: number | null | undefined | ""
): string | null {
  if (num === null || num === undefined || num === "" || num === 0) {
    return null;
  }
  if (typeof num !== "number" || num < 0 || num > 0xffffff) {
    return null;
  }
  const hex = num.toString(16).padStart(6, "0");
  return `#${hex}`;
}

export function formatDateElapsed(dateString: string | undefined): string {
  const date = new Date(dateString ?? "");

  const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");
  const elapsedStr = formatDistanceToNow(date, { addSuffix: true });

  return `${formattedDate} (UTC) (${elapsedStr})`;
}
