import { REGEX } from './constants';

export const isValidEmail = (email) => REGEX.EMAIL.test(email.trim());

export const isNonEmpty = (value) => value.trim().length > 0;
