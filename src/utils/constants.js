export const APP_NAME = 'Prologue';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export const WAITLIST_MESSAGES = {
  SUCCESS: "You're on the list! We'll be in touch.",
  DUPLICATE: 'This email is already registered.',
  ERROR: 'Something went wrong. Please try again.',
};

export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};
