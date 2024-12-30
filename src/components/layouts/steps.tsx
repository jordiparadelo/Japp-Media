"use client";
import { createContext, useContext } from "react";
import { useInterval, useMediaQuery, useWindowSize } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { WorkStep } from "@/types";
import { motion } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";

// Create a context for the steps
const StepsContext = createContext<
  | {
      activeStep: number;
      setActiveStep: (index: number) => void;
      handleStepChange: (event: React.MouseEvent<HTMLElement>) => void;
    }
  | undefined
>(undefined);

type StepsListProps = {
  steps: WorkStep[];
  className?: string;
  duration?: number;
  children: ReactNode; // Allow children to be passed
};

type StepProps = {
  index: number;
  children: ReactNode; // Allow children to be passed
  className?: string;
};

function StepsList({ steps, duration, className, children }: StepsListProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const delay = duration || 5000;
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { width } = useWindowSize();

  const handleStepChange = (event: React.MouseEvent<HTMLElement>) => {
    const index = event.currentTarget.dataset.index || null;
    const indexNumber = parseInt(index as string);
    const eventType = event.type;

    if (eventType === "mouseenter") {
      setActiveStep(indexNumber);
      setIsPlaying(false);
    }

    if (eventType === "mouseleave") {
      setIsPlaying(true);
    }
  };

  useInterval(
    () => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    },
    isPlaying ? delay : null,
  );

  useEffect(() => {
    if (isMobile) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  }, [isMobile, width]);

  return (
    <StepsContext.Provider
      value={{ activeStep, setActiveStep, handleStepChange }}
    >
      <ul
        className={cn(
          "col-span-12 mx-auto flex w-full flex-col gap-y-3 px-0 sm:px-3 lg:flex-row",
          className,
        )}
      >
        {children}
      </ul>
    </StepsContext.Provider>
  );
}

const animation = {
  card: {
    inactive: { opacity: 0.5, scale: 0.9 },
    active: { opacity: 1, scale: 1 },
  },
  description: {
    inactive: { opacity: 0, height: 0, backdropFilter: "blur(10px)" },
    active: {
      opacity: 1,
      backdropFilter: "blur(0px)",
      height: "auto",
      transition: { opacity: { duration: 0.5, delay: 0.2 } },
    },
  },
  initial: "inactive",
  transition: { duration: 0.5 },
};

// Step component that uses the context
function Step({ index, children, className }: StepProps) {
  const context = useContext(StepsContext);
  if (!context) {
    throw new Error("Step must be used within a StepsList");
  }

  const isMobile = useMediaQuery("(max-width: 768px)");
  const { activeStep, setActiveStep, handleStepChange } = context;

  return (
    <motion.div
      aria-current={activeStep === index}
      data-index={index}
      className={className}
      variants={animation.card}
      initial="inactive"
      animate={activeStep === index ? "active" : "inactive"}
      transition={animation.transition}
      onMouseEnter={handleStepChange}
      onMouseLeave={handleStepChange}
      onViewportEnter={() => {
        if (!isMobile) return;
        setActiveStep(index as number);
      }}
      viewport={{ margin: "-50%" }}
    >
      {children}
    </motion.div>
  );
}

// Export the components
export { StepsList, Step };
