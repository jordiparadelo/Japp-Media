import { cn } from "@/libs/utils";

// Container Component
type ContainerProps = {
    children: React.ReactNode;
    className?: string;
	id?: string;
	grid?: boolean;
};

const Container = ({ children, className, id, grid = false }: ContainerProps) => {
	return (
		<div className={cn("mx-auto max-w-5xl", "sm:p-8", grid && "grid grid-cols-12 gap-4 grid-flow-row", className)} id={id}>
			{children}
		</div>
    );
  };

export default Container;