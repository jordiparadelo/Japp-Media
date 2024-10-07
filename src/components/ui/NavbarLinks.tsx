"use client";

import { useNavbar } from "@/contexts/NavbarContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Link from "next/link";
import React from "react";
import { ROUTES } from "@/data/config";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import styles from "@/styles/Navbar.module.scss";

export default function NavbarLinks() {
	const { pathname, toggleMenu } = useNavbar();
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<div className={styles.navbar_links}>
			{ROUTES.map((link) => (
				<Link
					key={link.name}
					href={link.path}
					className={styles.navbar_link}
					aria-current={pathname === link.path}
					onClick={() => {
						if (isMobile) {
							toggleMenu();
						}
					}}
				>
					{link.name}
					{isMobile && <ArrowRightIcon />}
				</Link>
			))}
		</div>
	);
}
