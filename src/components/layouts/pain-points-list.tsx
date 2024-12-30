"use client";

import { cn } from "@/lib/utils";
import { PainPoint } from "@/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

function PainPointsList({
  painPoints,
  className,
}: {
  painPoints: PainPoint[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "flex w-[100vw] flex-row place-items-center gap-x-6 gap-y-6 overflow-x-auto sm:w-auto md:gap-x-2 scroll-snap-x scroll-snap-mandatory",
        className,
      )}
    >
      {painPoints.map((painPoint) => (
        <PainPointsCard painPoint={painPoint} key={painPoint.title} />
      ))}
    </ul>
  );
}

const animations = {
  description: {
    initial: {
      opacity: 0,
      height: 0,
      filter: "blur(5px)",
      y: 10,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
    hover: {
      opacity: 1,
      y: 0,
      height: "auto",
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        opacity: {
          delay: 0.2,
        },
      },
    },
  },
};

function PainPointsCard({ painPoint }: { painPoint: PainPoint }) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <motion.li
      className="flex min-h-96 min-w-96 flex-col place-items-center place-self-center rounded-3xl border border-gray-200/50 bg-white text-center transition-all duration-300 hover:border-gray-200 hover:shadow-lg sm:min-h-[max(480px,30vw)] md:min-w-0 md:flex-grow md:basis-1/3 scroll-snap-center"
      onViewportEnter={() => {
        if (!isMobile) return;

        setIsHovered((prev) => !prev);
      }}
      viewport={{ margin: "-50%" }}
    >
      <div className="flex min-h-fit flex-shrink-0 flex-col place-items-center gap-y-3 bg-white p-6">
        <h3 className="lg:heading-h5 heading-h6 max-w-[20ch]">
          {painPoint.title}
        </h3>
        <motion.p
          variants={animations.description}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          className="text-base text-gray-500"
        >
          {painPoint.description}
        </motion.p>
      </div>
    </motion.li>
  );
}

export { PainPointsList };
