import Link from "next/link";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: "primary" | "secondary" | "accent";
	href?: string;
}

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	variant?: "primary" | "secondary" | "accent";
}

type Props = ButtonProps | AnchorProps;

export function Button({
	children,
	variant = "primary",
	href,
	className,
	...props
}: Props) {

	return href ? (
		<Link
			className={`button ${className && className}`}
			href={href}
			data-variant={variant}
			{...(props as AnchorProps)}
		>
			{children}
		</Link>
	) : (
		<button
			className={`button ${className && className}`}
			data-variant={variant}
			{...(props as ButtonProps)}
		>
			{children}
		</button>
	);
}

export default Button;
