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
		<a
			className={"button" + " " + className}
			href={href}
			{...(props as AnchorProps)}
		>
			{children}
		</a>
	) : (
		<button
			className={"button" + " " + className}
			data-Variant={variant}
			{...(props as ButtonProps)}
		>
			{children}
		</button>
	);
}

export default Button;
