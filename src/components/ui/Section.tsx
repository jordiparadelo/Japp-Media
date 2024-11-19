import { cn } from "@/lib/utils";
import React from "react";

type SectionType = {
	className?: string;
	id?: string;
	children: React.ReactNode;
};
export default function Section({ children, className, id }: SectionType) {
	return (
		<section
			className={cn("relative py-14 md:py-20 fade-in max-w-[100vw] overflow-x-clip", className)}
			id={id}
		>
			{children}
		</section>
	);
}
