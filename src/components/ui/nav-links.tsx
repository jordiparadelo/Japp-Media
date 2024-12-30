"use client";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

type NavLink = {
  name: string;
  path: string;
};

type NavLinksProps = {
  links: NavLink[];
  className?: string;
};

function NavLinks({ links, className }: NavLinksProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <Suspense fallback={<NavLinksSkeleton links={links} />}>
      <ul className={cn("flex text-sm font-medium", className)}>
        {links.map((link: NavLink) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={cn(
                "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-3 text-sm font-medium leading-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                {
                  "border border-muted bg-background font-semibold": isActive(
                    link.path,
                  ),
                },
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </Suspense>
  );
}

function NavLinksSkeleton({ links }: { links: NavLink[] }) {
  return (
    <ul className="flex text-sm font-medium">
      {links.map((link: NavLink) => (
        <li key={link.name}>
          <Skeleton className="h-4 w-80" />
        </li>
      ))}
    </ul>
  );
}

export { NavLinks };
