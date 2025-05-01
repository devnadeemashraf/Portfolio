import { twMerge } from "tw-merge";
import { clsx } from "clsx";

/**
 * Utility function to merge class names using clsx and twMerge.
 * This function takes multiple class names as input, merges them into a single string,
 * @param inputs - The class names to merge. Can be a string, an array of strings, or undefined/null values.
 * @returns - A single string containing all the class names, merged and deduplicated.
 */
export function cn(...inputs: (string | undefined | null)[]) {
  return twMerge(clsx(inputs));
}
