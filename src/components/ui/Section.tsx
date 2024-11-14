import { cn } from "@/libs/utils";
import React from "react";

type SectionType = {
	className?: string;
	id?: string;
	children: React.ReactNode;
};
export default function Section({ children, className, id }: SectionType) {
	return (
		<section
			className={cn("relative py-8 md:py-12 fade-in", className)}
			id={id}
		>
			{children}
		</section>
	);
}
