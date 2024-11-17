"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { NavLinks } from "./nav-links";
import { ROUTES } from "site.config";
import { EasingFunction, motion, stagger, useAnimate } from "framer-motion";
import { Button } from "./button";
import { WEBSITE_INFO } from "site.config";
import { useNavbar } from "@/context/navbar-provider";
import { useIsMounted, useEventListener, useUnmount } from "usehooks-ts";

const animVariants = {
  open: { translateY: "-100%" },
  closed: { translateY: 0 },
  transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
};

type NavMenuProps = {
  className?: string;
};

const NavMenu = ({ className }: NavMenuProps) => {
  const { isMenuOpen, toggleMenu, setIsMenuOpen } = useNavbar();
  const [scope, animate] = useAnimate();

  const handleAnimate = useCallback(
    async ({ showMenu = true }: { showMenu?: boolean }) => {
      animate(
        "*",
        {
          opacity: showMenu ? 0 : 1,
          transform: showMenu ? "translateY(-100%)" : "none",
        },
        {
          delay: showMenu
            ? 0
            : stagger(0.05, {
                startDelay: animVariants.transition.duration,
                ease: "easeOut",
              }),
          duration: showMenu ? 0 : animVariants.transition.duration,
          ease: animVariants.transition.ease as unknown as EasingFunction[],
        },
      );

      animate(
        scope.current,
        {
          translateY: showMenu ? "-100%" : "none",
          opacity: showMenu ? 0 : 1,
        },
        {
          duration: animVariants.transition.duration,
          ease: animVariants.transition.ease as unknown as EasingFunction[],
        },
      );
    },
    [scope, animate],
  );

  const handleOpen = async () => {
    toggleMenu();
    // if (isMounted()) handleAnimate({ showMenu: isMenuOpen });
  };

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    },
    [setIsMenuOpen],
  );
  // add event listener
  useEventListener("keydown", handleEscape);
  // remove event listener on unmount
  useUnmount(() => {
    window.removeEventListener("keydown", handleEscape);
  });

  useNavAnimate(isMenuOpen, handleAnimate);

  // useEffect(() => {
  //   if (isMenuOpen) {
  //     window.addEventListener("keydown", handleEscape);
  //   } else {
  //     window.removeEventListener("keydown", handleEscape);
  //   }
  //   if (isMounted()) handleAnimate({ showMenu: isMenuOpen });
  // }, [isMenuOpen, handleEscape, isMounted, handleAnimate]);

  return (
    <menu className={className}>
      <Button
        variant="secondary"
        onClick={handleOpen}
        data-open={isMenuOpen}
        className="flex shrink-0 flex-col justify-start gap-0 overflow-hidden py-0"
        aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
      >
        <motion.span
          animate={isMenuOpen ? "open" : "closed"}
          variants={animVariants}
          className="inline-flex min-h-full w-fit items-center"
        >
          Menu
        </motion.span>
        <motion.span
          animate={isMenuOpen ? "open" : "closed"}
          variants={animVariants}
          className="inline-flex min-h-full w-fit items-center"
        >
          Cerrar
        </motion.span>
      </Button>

      <motion.div
        ref={scope}
        className="fixed inset-0 top-0 z-[-1] flex h-[100vh] translate-y-[-100%] transform-gpu flex-col justify-between bg-foreground px-4 py-4 pb-10 pt-28 text-background sm:px-8 md:px-12"
      >
        <NavLinks
          links={ROUTES}
          className="flex flex-col gap-4 text-2xl font-extralight"
        />

        <div className="flex flex-col gap-4">
          <a href={`tel:${WEBSITE_INFO.phone}`}>{WEBSITE_INFO.phone}</a>
          <div className="w-full">
            <Button variant="default" size="lg" className="w-full">
              Contactar un cita
            </Button>
          </div>
        </div>
      </motion.div>
    </menu>
  );
};

export { NavMenu };

function useNavAnimate(
  state: boolean,
  animation: (state: { showMenu: boolean }) => void,
) {
  const isMounted = useIsMounted();
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) animation({ showMenu: !state });
  }, [state, isMounted, animation]);
  
  mounted.current = isMounted();
  return { isMounted };
}
