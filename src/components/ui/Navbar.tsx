"use client";

import { Logo, NavLinks, Button, NavMenu } from "@/components/ui";
import { NavbarProvider, useNavbar } from "@/context/navbar-provider";
import { ROUTES } from "@/data/config";
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
  const { isMenuOpen } = useNavbar();
  return (
    <nav
      className="sm:h-navbar fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-foreground/5 px-4 py-4 backdrop-blur-sm sm:px-8 md:px-12"
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
          <Button>Obtén tu Consulta Gratis</Button>
        </div>
        <NavMenu className="block sm:hidden"/>
      </div>
    </nav>
  );
}
