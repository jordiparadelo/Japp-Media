"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { NavbarProvider, useNavbar } from "@/contexts/NavbarContext";
import { cn } from "@/libs/utils";
import styles from "@/styles/Navbar.module.scss";
import { PERSONAL_INFO } from "@/data/content";
import PhoneIcon from "@/assets/icons/phone.svg";
import { Button, Logo, BookButton, NavbarLinks } from "@/components/ui";
import { formatPhoneNumber } from "@/libs/utils";

import { AnimatePresence, cubicBezier, motion } from "framer-motion";

import { Suspense } from "react";

export default function Navbar() {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<nav className={styles.navbar}>
			<div className='container mx-auto'>
				<NavbarProvider>
					{isMobile ? <MobileNavbar /> : <DesktopNavbar />}
				</NavbarProvider>
			</div>
		</nav>
	);
}

function DesktopNavbar() {
	return (
		<div className={cn(styles.navbar_container)}>
			<div className={styles["navbar_links-wrapper"]}>
				<Logo />
				<Suspense fallback={<div>Loading...</div>}>
					<NavbarLinks />
				</Suspense>
			</div>

			<div className={styles.navbar_actions}>
				<a
					className={styles.navbar_phone}
					href={`tel:${PERSONAL_INFO.phone}`}
					onCopy={() => {
						navigator.clipboard.writeText(PERSONAL_INFO.phone);
					}}
				>
					<PhoneIcon className='w-[1.25em] h-[1.25em]' />
					{formatPhoneNumber(PERSONAL_INFO.phone)}
				</a>
				<BookButton text='Agenda una llamada' />
			</div>
		</div>
	);
}

function MobileNavbar() {
	const { isMenuOpen, toggleMenu } = useNavbar();

	return (
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
						<Suspense fallback={<div>Loading...</div>}>
							<NavbarLinks />
						</Suspense>
						<div className={styles.navbar_menu_actions}>
							<Button href={`tel:${PERSONAL_INFO.phone}`}>
								Contáctenos por teléfono:{" "}
								{formatPhoneNumber(PERSONAL_INFO.phone)}
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
	);
}
