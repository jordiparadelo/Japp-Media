import React from "react";
import { LINKS, PERSONAL_INFO } from "@/libs/constants";
import Link from "next/link";
import { Logo } from "@/components/ui";
import styles from "@/styles/Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles["section"]}>
			<div className='container mx-auto'>
				<div className={styles["section_layout"]}>
					<div className={styles["section_bottom"]}>
						<div className={styles["section_bottom_block"]}>
							<Logo />
							<p className='text-sm'>
								&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos
								los derechos reservados.
							</p>
						</div>
						<div className={styles["section_bottom_block"]}>
							{LINKS.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className='hover:text-gray-300'
								>
									{link.label}
								</Link>
							))}
						</div>
						<div className={styles["section_bottom_block"]}>
							<div className={styles["section_bottom_block_contact"]}>
								<a href={`mailto:${PERSONAL_INFO.email}`}>
									{PERSONAL_INFO.email}
								</a>
								<span>|</span>
								<a href={`tel:${PERSONAL_INFO.phone}`}>{PERSONAL_INFO.phone}</a>
							</div>
							<Link href='/terminos-y-condiciones'>Términos y Condiciones</Link>
							<Link href='/politicas-de-privacidad'>
								Políticas de Privacidad
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
