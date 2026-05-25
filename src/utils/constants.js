export const APP_NAME = 'Prologue';

// import.meta.env is Vite-only; process.env.NEXT_PUBLIC_* is Next.js-only
export const API_BASE_URL =
  (typeof import.meta !== 'undefined' ? import.meta.env?.VITE_API_BASE_URL : undefined) ||
  (typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_API_BASE_URL : undefined) ||
  '';

export const WAITLIST_MESSAGES = {
  SUCCESS: "You're on the list! We'll be in touch.",
  DUPLICATE: 'This email is already registered.',
  ERROR: 'Something went wrong. Please try again.',
};

export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};
