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
        "flex flex-col place-items-center gap-y-6 md:flex-row md:gap-x-2 mx-auto",
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
      className="flex min-h-96 max-w-96 flex-col place-items-center place-self-center rounded-3xl border border-gray-200/50 text-center transition-all duration-300 hover:border-gray-200 hover:shadow-lg sm:min-h-[max(480px,30vw)] md:flex-grow md:basis-1/3"
      onViewportEnter={() => {
        if (!isMobile) return;

        setIsHovered((prev) => !prev);
      }}
      viewport={{ margin: "-50%" }}
    >
      <div className="flex min-h-fit flex-shrink-0 flex-col place-items-center gap-y-3 p-6">
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
