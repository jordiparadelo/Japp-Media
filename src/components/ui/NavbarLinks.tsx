"use client";

import { useNavbar } from '@/contexts/NavbarContext';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Link from 'next/link';
import React, { Suspense, useEffect } from 'react'
import { ROUTES } from "@/data/config";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import styles from "@/styles/Navbar.module.scss";
import { useSearchParams } from 'next/navigation';

export default function NavbarLinks() {
	const query = useSearchParams().get("modal");
    const { pathname, toggleMenu, setIsMenuOpen } = useNavbar();
	const isMobile = useMediaQuery("(max-width: 768px)");

	useEffect(() => {
		if (query) {
			setIsMenuOpen(false);
		}
	}, [query, setIsMenuOpen]);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className={styles.navigation}>
				{Object.values(ROUTES).map((link) => (
					<Link
						key={link.name}
						href={link.path}
						className={styles.link}
						aria-current={pathname === link.path ? "page" : undefined}
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
		</Suspense>
	);
}
