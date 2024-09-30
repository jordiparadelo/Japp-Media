"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext, useRef } from "react";
import { anim } from "@/libs/utils";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const perspectiveVariants = {
  initial: {
    scale: 1,
    y: 150,
    opacity: 0,
  },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
  },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0,
  },
};

const transition = {
  ease: [0.76, 0, 0.24, 1],
  duration: 0.5,
};

function FrozenRouter({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence
      mode='wait'
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.main
        className='flex-grow transform-origin-top'
        {...anim(perspectiveVariants)}
        transition={transition}
        key={pathname}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.main>
    </AnimatePresence>
  );
}