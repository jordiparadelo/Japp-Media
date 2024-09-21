import React from "react";
import { LINKS, PERSONAL_INFO } from "@/libs/constants";
import Link from "next/link";
import { BookButton, Logo, SectionTag } from "@/components/ui";
import DoodleArrow from "@/assets/icons/doodle-arrow.svg";
import styles from "@/styles/Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles["section"]}>
			<div className='container mx-auto'>
				<div className={styles["section_layout"]}>
					<div className={styles["section_top"]}>
						<div className={styles["section_heading"]}>
							<SectionTag
								rotation={3}
								color='var(--color-primary)'
							>
								<span className='font-semibold'>Comencemos Ya!</span>
							</SectionTag>
							<h2 className='sr-only'>Agenda una llamada gratuita</h2>

							<div className={styles["section_heading_title-wrap"]}>
								<div className={styles["section_heading_line"]}>
									<div className='rotate-[-5deg] text-white'>Agenda</div>
								</div>
								<div className={styles["section_heading_line"]}>
									<SectionTag
										rotation={-3}
										color='var(--color-primary)'
									>
										<span>llamada</span>
									</SectionTag>
								</div>
								<div className={styles["section_heading_line"]}>
									<SectionTag
										rotation={3}
										color='var(--color-secondary)'
									>
										<span>gratuita</span>
									</SectionTag>
									<DoodleArrow />
								</div>
							</div>
						</div>
						<p className='text-md text-center'>
							Al final de esta llamada de auditoría, tendrá una comprensión
							clara de los próximos pasos que puede tomar para que su negocio
							comience a generar clientes potenciales consistentes y predecibles
							en línea.
						</p>

						<div className={styles["section_actions"]}>
							<BookButton
								variant='accent'
								text='Agenda una llamada'
							/>
						</div>
					</div>

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
							<span className='block md:inline mt-2 md:mt-0 md:ml-2'>
								{PERSONAL_INFO.email} | {PERSONAL_INFO.phone}
							</span>
						</div>
						<div className={styles["section_bottom_block"]}>
							<Link href="/terminos-y-condiciones">Términos y Condiciones</Link>
							<Link href="/politicas-de-privacidad">Políticas de Privacidad</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
