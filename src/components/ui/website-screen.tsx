"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { Icon } from "./icon";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const SCREENS = [
  {
    id: 0,
    label: "Restaurante",
    icon: "home",
  },
  {
    id: 1,
    label: "Centro de Salud",
    icon: "home",
  },
  {
    id: 2,
    label: "Servicios Profesionales",
    icon: "home",
  },
  {
    id: 3,
    label: "Tienda Online",
    icon: "home",
  },
];

type WebsiteNavProps = {
  activeScreen: number;
  setActiveScreen: Dispatch<SetStateAction<number>>;
};

const WebsiteNav = ({ activeScreen, setActiveScreen }: WebsiteNavProps) => {
  return (
    <nav className="col-start-1 row-end-2 m-4 flex max-w-full flex-row items-center place-self-end justify-self-center overflow-x-auto rounded-full border border-gray-200/50 bg-white/50 p-2 backdrop-blur-sm">
      {SCREENS.map((screen) => (
        <button
          key={screen.id}
          onClick={() => setActiveScreen(screen.id)}
          className={cn(
            "flex flex-row items-center gap-x-2 rounded-full px-4 py-2 transition-all duration-300 hover:bg-slate-200/50",
            activeScreen === screen.id && "bg-white text-primary",
          )}
        >
          <span className="inline-flex md:hidden">
            <Icon name="AArrowUp" />
          </span>
          <span className="hidden text-sm md:block">{screen.label}</span>
        </button>
      ))}
    </nav>
  );
};

const WebsiteScreenContent = ({ activeScreen }: { activeScreen: number }) => {
  return (
    <div className="col-start-1 row-end-2 flex h-full min-h-full w-full flex-col items-center justify-center place-self-stretch rounded-lg border border-gray-200/50 bg-white">
      <AnimatePresence>
        {SCREENS.filter((screen) => screen.id === activeScreen).map(
          (screen) => (
            <motion.figure
              key={screen.id}
              className="flex flex-row items-center gap-x-2"
              exit={{ x: 100, opacity: 0, filter: "blur(10px)" }}
              initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, when: "beforeChildren" }}
              // layout
            >
              <h3 className="text-lg font-semibold">{screen.label}</h3>
            </motion.figure>
          ),
        )}
      </AnimatePresence>
    </div>
  );
};

const WebsiteScreen = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useSpring(useTransform(mouseX, [-1, 0, 1], [5, 0, -5]), {
    stiffness: 100,
    damping: 12,
  });
  const rotateX = useSpring(useTransform(mouseY, [-1, 0, 1], [0, 0, 10]), {
    stiffness: 100,
    damping: 12,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const valueX = clamp((x / width) * 2 - 1);
    const valueY = clamp((y / height) * 2 - 1);

    mouseX.set(valueX);
    mouseY.set(valueY);
  };

  const handleMouseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const clickOffset = 0.8;

    const valueX = clamp((e.clientX - left) / width * 2 - 1);
    const valueY = clamp((e.clientY - top) / height * 2 - 1);

    const prevValueX = mouseX.get();
    const prevValueY = mouseY.get();

    requestAnimationFrame(() => {
      mouseX.set(prevValueX + valueX * -clickOffset);
      mouseY.set(prevValueY + valueY * -clickOffset);

      setTimeout(() => {
        mouseX.set(prevValueX);
        mouseY.set(prevValueY);
      }, 100);
    });
  };

  // Helper function to clamp values between -1 and 1
  const clamp = (value: number) => Math.max(Math.min(value, 1), -1);

  return (
    <motion.div
      className="left-0 top-0 mx-auto grid aspect-[9/16] w-full max-w-80 origin-center grid-cols-1 grid-rows-1 items-center justify-center rounded-2xl border border-gray-200/50 bg-foreground bg-gradient-to-b from-gray-950 via-10% to-gray-600 p-6 shadow-lg sm:aspect-video sm:w-full sm:max-w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      onClick={handleMouseClick}
      style={{
        rotateY,
        rotateX,
      }}
    >
      <WebsiteScreenContent activeScreen={activeScreen} />
      <WebsiteNav
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />
    </motion.div>
  );
};

export { WebsiteScreen, WebsiteNav };
