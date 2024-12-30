"use client";

import React from "react";
import Link from "next/link";
import LogoIcon from "@/assets/logo.svg";
import { usePathname } from "next/navigation";
import { navigateToElement } from "@/lib/utils";

type LogoProps = {
  href?: string;
  className?: string;
  size?: "sm" | "lg" | number;
};

function Logo({ href = "/",  className, size = "sm" }: LogoProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const LOGO_SIZES = {
    sm: 32,
    lg: 40,
  }
  const logoHeight = LOGO_SIZES[size as keyof typeof LOGO_SIZES] || size;

  const HomeLogo = () => (
    <div
      aria-label="Go to home page"
      role="button"
      onClick={() => navigateToElement(0)}
      className={className}
    >
      <LogoIcon style={{ height: `${logoHeight}px` }} />
    </div>
  );

  if (isHome) return <HomeLogo />;

  return (
    <Link href={href} aria-label="Go to home page" className={className}>
      <LogoIcon style={{ height: `${logoHeight}px` }} />
    </Link>
  );
}

export default Logo;