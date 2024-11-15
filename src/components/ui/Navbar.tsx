import { Logo, NavLinks } from "@/components/ui";
import { ROUTES } from "@/data/config";
import { Suspense } from "react";

function Navbar() {
  return (
    <nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Logo />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <NavLinks links={ROUTES} />
      </Suspense>
    </nav>
  );
}

export { Navbar };
