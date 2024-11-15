import Link from "next/link";

type NavLink = {
	name: string;
	path: string;
};

function NavLinks({ links }: { links: NavLink[] }) {
	return(
		<ul>
			{links.map((link) => (
				<li key={link.name}>
					<Link href={link.path}>{link.name}</Link>
				</li>
			))}
		</ul>
	)
}

export { NavLinks };