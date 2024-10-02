import { Variants } from 'framer-motion';

import { ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function anim(variants: Variants) {
	return {
		initial: "initial",
		animate: "enter",
		exit: "exit",
		variants,
	};
}

export function formatPhoneNumber(phoneNumber: string, country: 'ES' | 'US' = 'ES'): string {
	// Remove any non-digit characters from the phone number
	const cleaned = phoneNumber.replace(/\D/g, '');
	
	if (country === 'ES') {
	  // Spanish phone number format
	  if (cleaned.length === 9) {
		// Standard Spanish mobile or landline number
		return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
	  } else if (cleaned.length === 11 && cleaned.startsWith('34')) {
		// Spanish number with country code
		return `(+34) ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
	  }
	} else if (country === 'US') {
	  // US phone number format (keeping the existing logic)
	  if (cleaned.length === 10) {
		return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
	  } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
		return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
	  }
	}
	
	// If the number doesn't match expected formats, return it as-is
	return phoneNumber;
  }