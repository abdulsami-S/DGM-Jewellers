// import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }


// src/lib/utils.js
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
