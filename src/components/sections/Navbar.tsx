"use client";

import { LINKS, PERSONAL_INFO } from "@/libs/constants";
import { BookButton } from "@/components/ui";
import styles from "@/styles/Navbar.module.scss";
import { cn } from "@/libs/utils";
import PhoneIcon from '@/assets/icons/phone.svg';
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className={styles.navbar}>
			<div className={cn(styles.navbar_container, 'container mx-auto')}>
				<Link href='/' className={styles.navbar_logo}>Logo</Link>
				
				<button className="md:hidden" onClick={toggleMenu}>
					{isMenuOpen ? 'Close' : 'Menu'}
				</button>

				<div className={cn(styles.navbar_links, {
					'hidden md:flex': !isMenuOpen,
					'flex': isMenuOpen
				})}>
					{LINKS.map((link) => (
						<Link 
							key={link.label} 
							href={link.href} 
							className={cn(styles.navbar_link, {
								[styles['navbar_link--active']]: pathname === link.href
							})}
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className={cn(styles.navbar_actions, {
					'hidden md:flex': !isMenuOpen,
					'flex': isMenuOpen
				})}>
					<a className={styles.navbar_phone} href={`tel:${PERSONAL_INFO.phone}`}>
						<PhoneIcon className='w-[1.25em] h-[1.25em]'/>
						{PERSONAL_INFO.phone}
					</a>
					<BookButton text="Agenda una llamada" />
				</div>
			</div>
		</nav>
	);
}
