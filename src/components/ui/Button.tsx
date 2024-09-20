import React from "react";
import { cn } from "../../libs/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: 'primary' | 'secondary' | 'accent';
	href?: string;
}

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	variant?: 'primary' | 'secondary' | 'accent';
}

type Props = ButtonProps | AnchorProps;

export function Button({ children, className, variant = 'primary', href, ...props }: Props) {
	const BTN_BASE_CLASS = 'px-4 py-3 text-center text-sm font-semibold inline-block cursor-pointer transition duration-200 ease-in-out rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95';

	const VARIANT_CLASSES = {
		'primary': cn(`${BTN_BASE_CLASS} bg-white text-[#00252E] hover:bg-blue-600 focus:ring-blue-300 min-h-10`),
		'secondary': cn(`${BTN_BASE_CLASS} bg-gray-500 hover:bg-gray-600 focus:ring-gray-300`),
		'accent': cn(`${BTN_BASE_CLASS} bg-[--color-secondary] text-[--color-font] focus:ring-gray-300`),
	}

	const classes = cn(VARIANT_CLASSES[variant], className);

	return href ? (
		<a
			className={classes}
			href={href}
			{...(props as AnchorProps)}
		>
			{children}
		</a>
	) : (
		<button
			className={classes}
			{...(props as ButtonProps)}
		>
			{children}
		</button>
	);
}

export default Button;
