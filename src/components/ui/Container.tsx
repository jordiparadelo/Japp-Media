import { cn } from "@/lib/utils";

// Container Component
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  grid?: boolean;
};

const Container = ({
  children,
  className,
  grid = false,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-8",
        grid && "grid grid-flow-row grid-cols-12 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
