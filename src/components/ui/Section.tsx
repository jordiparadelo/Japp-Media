import { cn } from "@/lib/utils";
import React from "react";

type SectionType = {
  className?: string;
  id?: string;
  children: React.ReactNode;
  props?: React.ComponentProps<"section">;
};
export default function Section({ children, className, id, props }: SectionType) {
  return (
    <section
      className={cn(
        "relative max-w-[100vw] overflow-x-clip py-14 fade-in md:py-20 lg:py-28",
        className,
      )}
      id={id}
      {...props}
    >
      {children}
    </section>
  );
}
