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