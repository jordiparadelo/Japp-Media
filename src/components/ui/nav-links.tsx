import { cn } from "@/lib/utils";
import Link from "next/link";

type NavLink = {
  name: string;
  path: string;
};

type NavLinksProps = {
  links: NavLink[];
  className?: string;
};

function NavLinks({ links, className }: NavLinksProps) {
  return (
    <ul className={cn("flex gap-4 text-sm font-medium", className)}>
      {links.map((link: NavLink) => (
        <li key={link.name}>
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export { NavLinks };
