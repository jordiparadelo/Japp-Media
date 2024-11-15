"use client";

import React from "react";
import Link from "next/link";
import LogoIcon from "@/assets/logo.svg";
import { usePathname } from "next/navigation";
import { navigateToElement } from "@/lib/utils";

type LogoProps = {
  href?: string;
};

function Logo({ href = "/" }: LogoProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const HomeLogo = () => (
    <div aria-label="Go to home page" role="button" onClick={() => navigateToElement(0)}>
      <LogoIcon style={{ height: "32px" }} />
    </div>
  );

  if (isHome) return <HomeLogo />;

  return (
    <Link href={href} aria-label="Go to home page">
      <LogoIcon style={{ height: "32px" }} />
    </Link>
  );
}

export { Logo };
