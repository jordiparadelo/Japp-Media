"use client";

import React from "react";
import Link from "next/link";
import LogoIcon from "@/assets/logo.svg";
import { usePathname } from "next/navigation";
import { navigateToElement } from "@/lib/utils";

type LogoProps = {
  href?: string;
  className?: string;
};

function Logo({ href = "/",  className }: LogoProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const HomeLogo = () => (
    <div
      aria-label="Go to home page"
      role="button"
      onClick={() => navigateToElement(0)}
      className={className}
    >
      <LogoIcon style={{ height: "32px" }} />
    </div>
  );

  if (isHome) return <HomeLogo />;

  return (
    <Link href={href} aria-label="Go to home page" className={className}>
      <LogoIcon style={{ height: "32px" }} />
    </Link>
  );
}

export { Logo };
