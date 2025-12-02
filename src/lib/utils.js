import clsx from "clsx";

/**
 * `cn` (classNames) helper — thin wrapper around clsx for templates.
 * Allows importing `cn` from `@/lib/utils` in components.
 */
export function cn(...inputs) {
  return clsx(...inputs);
}

export default cn;
