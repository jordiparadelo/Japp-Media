"use client";

import { useInterval, useMediaQuery, useWindowSize } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { WorkStep } from "@/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui";

type StepsListProps = {
  steps: WorkStep[];
  className?: string;
};

type StepProps = {
  step: WorkStep;
  index?: number | 1;
  activeStep: number;
  setActiveStep: (index: number) => void;
  onStepChange: (event: React.MouseEvent<HTMLElement>) => void;
  isMobile: boolean;
};

function StepsList({ steps, className }: StepsListProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const delay = 5000;
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
      // Your custom logic here
      setActiveStep((prev) => (prev + 1) % steps.length);
    },
    // Delay in milliseconds or null to stop it
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
    <ul className={cn("flex flex-col gap-y-3 px-3 md:flex-row min-h-[300px]", className)}>
      {steps.map((step, index) => (
        <Step
          key={step.title}
          step={step}
          index={index}
          activeStep={activeStep}
          onStepChange={handleStepChange}
          setActiveStep={setActiveStep}
          isMobile={isMobile}
        />
      ))}
    </ul>
  );
}

const animation = {
  card: {
    inactive: { opacity: 0.5, scale: 0.9 },
    active: { opacity: 1, scale: 1 },
  },
  description: {
    inactive: { opacity: 0, height: 0, backdropFilter: "blur(10px)", },
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

function Step({
  step,
  index,
  activeStep,
  onStepChange,
  setActiveStep,
  isMobile,
}: StepProps) {
  const indexNumber = index ? index + 1 : 1;

  return (
    <motion.li
      aria-current={activeStep === index}
      data-index={index}
      className="flex w-full flex-grow flex-col justify-between gap-4 rounded-lg border-1 border-black bg-gradient-to-b from-gray-950 to-gray-600 align-top max-h-auto"
      variants={animation.card}
      initial="inactive"
      animate={activeStep === index ? "active" : "inactive"}
      transition={animation.transition}
      onMouseEnter={onStepChange}
      onMouseLeave={onStepChange}
      onViewportEnter={() => {
        if (!isMobile) return;
        setActiveStep(index as number);
      }}
      viewport={{ margin: "-50%" }}
    >
      <div className="flex flex-col gap-y-2 p-4 md:p-6">
        <span className="leading-0 backdrop-blur-2 flex aspect-square max-h-fit flex-col items-center justify-center gap-y-2 self-start rounded-lg border-1 border-slate-700 bg-foreground p-[.75em] font-heading text-2xl">
          {indexNumber}
        </span>
      </div>
      <div className="flex flex-col gap-y-2 p-4 md:p-6">
        <h3 className="heading-h6">{step.title}</h3>
        <motion.p
          className="overflow-hidden text-sm"
          variants={animation.description}
          initial="inactive"
          animate={activeStep === index ? "active" : "inactive"}
          transition={animation.transition}
        >
          {step.description}
        </motion.p>

        <div className="pt-6">
          <Button variant="link">Learn more</Button>
        </div>
      </div>
    </motion.li>
  );
}

export { StepsList, Step };
