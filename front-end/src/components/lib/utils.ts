import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dateFormat = (date: string) => {
  const original = new Date(date);

  const newDate = original.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    day: '2-digit',
  });
  return newDate;
};
