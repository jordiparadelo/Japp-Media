"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { NavbarProvider, useNavbar } from "@/contexts/NavbarContext";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { AnimatePresence, cubicBezier, motion } from "framer-motion";
import styles from "@/styles/Navbar.module.scss";
import { LINKS, PERSONAL_INFO } from "@/libs/constants";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import { Button, Logo, BookButton } from "@/components/ui";

export default function Navbar() {
	const isMobile = useMediaQuery("(max-width: 768px)");


	return (
		<NavbarProvider>
			{isMobile ? <MobileNavbar /> : <DesktopNavbar />}
		</NavbarProvider>
	);
}

function DesktopNavbar() {
	const { pathname } = useNavbar();;

	return (
		<nav className={styles.navbar}>
			<div className='container mx-auto'>
				<div className={cn(styles.navbar_container)}>
					<div className={styles["navbar_links-wrapper"]}>
						<Logo />
						<div className={styles.navbar_links}>
							{LINKS.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									className={cn(styles.navbar_link, {
										[styles["navbar_link--active"]]: pathname === link.href,
									})}
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>

					<div className={styles.navbar_actions}>
						<a
							className={styles.navbar_phone}
							href={`tel:${PERSONAL_INFO.phone}`}
						>
							<PhoneIcon className='w-[1.25em] h-[1.25em]' />
							{PERSONAL_INFO.phone}
						</a>
						<BookButton text='Agenda una llamada' />
					</div>
				</div>
			</div>
		</nav>
	);
}

function MobileNavbar() {
	const { isMenuOpen, toggleMenu, pathname } = useNavbar();

	return (
		<nav className={styles.navbar}>
			<div className='container mx-auto'>
				<div className={cn(styles.navbar_container)}>
					<div className={styles["navbar_links-wrapper"]}>
						<Logo />
					</div>
					<button
						className='md:hidden'
						onClick={toggleMenu}
					>
						{isMenuOpen ? "Close" : "Menu"}
					</button>
					<AnimatePresence>
						{isMenuOpen && (
							<motion.div
								className={styles.navbar_menu}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 50 }}
								transition={{
									duration: 0.25,
									ease: cubicBezier(0.175, 0.885, 0.32, 1.275),
								}}
							>
								<div className={cn(styles.navbar_menu_links)}>
									{LINKS.map((link) => (
										<Link
											key={link.label}
											href={link.href}
											className={cn(styles.navbar_menu_links_link, {
												[styles["navbar_link--active"]]: pathname === link.href,
											})}
											onClick={() => toggleMenu()}
										>
											{link.label}
											<ArrowRightIcon />
										</Link>
									))}
								</div>
								<div className={styles.navbar_menu_actions}>
									<Button href={`tel:${PERSONAL_INFO.phone}`}>
										Contáctenos por teléfono
									</Button>
									<BookButton
										variant='accent'
										text='Agenda una llamada'
									/>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</nav>
	);
}