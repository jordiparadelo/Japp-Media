"use client";

import { Logo, NavLinks, Button, NavMenu } from "@/components/ui";
import { NavbarProvider, useNavbar } from "@/context/navbar-provider";
import { ROUTES } from "@/site.config";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
// import { Suspense } from "react";

function Navbar() {
  return (
    <NavbarProvider>
      <NavbarContent />
    </NavbarProvider>
  );
}

export { Navbar };

function NavbarContent() {
  const { scrollY } = useScroll();

  const [isVisible, setIsVisible] = useState(true);

  const { isMenuOpen } = useNavbar();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() as number;
    
    if (isMenuOpen) return;
    
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: {
          y: 0,
        },
        hidden: {
          y: "-100%",
        },
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-slate-100/10 px-4 py-4 backdrop-blur-sm sm:h-navbar sm:px-8 md:px-12"
      data-open={isMenuOpen}
    >
      <div className="flex w-full items-center gap-4">
        <div className="mr-auto flex items-center gap-8">
          <Logo className={isMenuOpen ? "text-background" : "text-initial"} />
          <div className="hidden sm:block">
            <NavLinks links={ROUTES} />
          </div>
        </div>
        <div className="hidden sm:block">
          <Button variant="secondary">Obtén tu Consulta Gratis</Button>
        </div>
        <NavMenu className="block sm:hidden" />
      </div>
    </motion.nav>
  );
}
