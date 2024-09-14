import React from "react";
import { cn } from "../../libs/utils";
type Props = {
	className?: string;
	type?: 'submit' | 'reset' | 'button';
    variant?: 'primary' | 'secondary'
	href?: string;
	children?: React.ReactNode;
};

function Button({ className, type = 'button', href, children, variant= 'primary' }: Props) {
	const BTN_BASE_CLASS = ' bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block cursor-pointer transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95';

    const VARIANT_CLASSES = {
        'primary': cn(`${BTN_BASE_CLASS} bg-white text-[#00252E] hover:bg-blue-600 focus:ring-blue-300 min-h-10 `),
        'secondary': cn(`${BTN_BASE_CLASS} bg-gray-500 hover:bg-gray-600 focus:ring-gray-300`)
    }

	return href ? (
		<a
		className={cn(
			`${VARIANT_CLASSES[variant]}`,
			className
		)}
			type={type}
			href={href}
		></a>
	) : (
		<button
			className={cn(
				`${VARIANT_CLASSES[variant]}`,
				className
			)}
			type={type}
		>
			{children}
		</button>
	);
}

export default Button;
