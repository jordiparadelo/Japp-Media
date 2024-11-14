import { cn } from "@/libs/utils";

type GridSpanType = {
	children: React.ReactNode;
	span?: number | 'auto';
	start?: number;
	className?: string;
};

export default function GridSpan({ children, span = 12, className }: GridSpanType) {
	return (
		<div className={cn(span && `col-span-${span}`, className)}>{children}</div>
	);
}
