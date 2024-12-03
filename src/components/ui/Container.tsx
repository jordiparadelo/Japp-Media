import { cn } from "@/lib/utils";

// Container Component
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  grid?: boolean;
  style?: React.CSSProperties;
};

const Container = ({ children, className, grid = false, style }: ContainerProps) => {
  return (
    <div
      className={cn(
        "px-8 max-w-7xl lg:max-w-none sm:px-[10vw] mx-auto",
        // "mx-auto w-full max-w-7xl px-8",
        grid && "grid grid-flow-row grid-cols-12 gap-4",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
