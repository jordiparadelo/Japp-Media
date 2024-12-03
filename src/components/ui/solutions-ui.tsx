"use client";

import { SolutionType } from "@/types";
import { CustomImage, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

function SolutionCard({
  solution,
  index,
  range,
  targetScale,
  progress,
}: {
  solution: SolutionType;
  index: number;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
}) {

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className={cn(
        "sticky top-0 flex h-[100vh] flex-col place-content-center",
      )}
    >
      <motion.div
        className={
          "transform-origin-bottom relative flex min-h-[50vh] origin-center flex-col gap-4 overflow-hidden rounded-3xl  md:rounded-[40px] border border-slate-200 bg-background md:flex-row lg:gap-[2.5vw] lg:p-[2.5vw]"
        }
        style={{ top: `${(index + 1) * 40}px`, scale: scale }}
      >
        <div className="flex flex-grow basis-[50%] flex-col place-content-center gap-6 p-6 md:p-8">
          <Badge label={solution.id as string} />
          <CustomImage
            src={solution.image}
            alt={solution.title}
            width={500}
            height={500}
            className="block max-h-[280px] w-full object-contain md:hidden"
          />
          <h3 className="heading-h3 sm:text-[3.5vw]">{solution.title}</h3>
          <p>{solution.description}</p>
        </div>
        <CustomImage
          src={solution.image}
          alt={solution.title}
          width={500}
          height={500}
          className="hidden h-full w-1 flex-grow basis-[50%] object-contain md:block"
        />
      </motion.div>
    </div>
  );
}

function SolutionsList({ solutions }: { solutions: SolutionType[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        `z-1 relative col-span-12 flex flex-col`,
        `md:grid-rows-[${solutions.length}]`,
      )}
    >
      {solutions.map((solution, index, array) => {
        // const targetScale = 0.5;
        const length = array.length;
        const targetScale = 1 - (array.length - index) * 0.05;
        const progressByIndex = 1 / length;

        return (
          <SolutionCard
            key={solution.id}
            solution={solution}
            index={index}
            range={[index * progressByIndex, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
    </div>
  );
}

export { SolutionCard, SolutionsList };
