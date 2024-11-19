"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

type PainPointsCardProps = {
  className?: string;
  title: string;
  description: string;
};

const animations = {
  transition: {
    duration: 0.3,
  },
  card: {
    hover: { scale: 1.05 },
    initial: { scale: 1 },
  },
  description: {
    hover: { height: "auto", opacity: 1, translateY: 0 },
    initial: { height: 0, opacity: 0, translateY: 10 },
  },
};

const PainPointsCard = ({
  title,
  description,
  className,
}: PainPointsCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isTouchDevice = useMediaQuery("(pointer: coarse) and (hover: none) and (max-width: 768px)");

  console.log(isTouchDevice);

  return (
    <motion.figure
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover="hover"
      variants={animations.card}
      transition={animations.transition}
      className={cn(
        "card flex-end flex min-h-[300px] flex-col justify-end gap-4 p-5",
        className,
      )}
    >
      <h3 className="heading-h5">{title}</h3>
      <motion.p
        initial={!isTouchDevice ? "initial" : "hover"}
        animate={!isTouchDevice && isHovered ? "hover" : "initial"}
        variants={animations.description}
        transition={animations.transition}
        className="overflow-hidden text-sm"
      >
        {description}
      </motion.p>
    </motion.figure>
  );
};

export { PainPointsCard };
