"use client";
import { BookButton, ContactForm } from "@/components/ui";
import CheckIcon from "@/assets/icons/check.svg";
import styles from "@/styles/ContactHero.module.scss";
import { PERSONAL_INFO } from "@/data/content";
import { formatPhoneNumber } from "@/libs/utils";


import React from "react";

import PhoneIcon from "@/assets/icons/phone-fill.svg";
import CalendarIcon from "@/assets/icons/calendar.svg";
import { useSearchParams } from "next/navigation";
import { FEATURES } from "@/data";

function Hero() {
	const searchParams = useSearchParams();
	const service = searchParams.get("service");
	const feature = FEATURES.find(feature => feature.id === service);

	return (
		<section className={styles["section"] + " bkg-grid-pattern"}>
			<div className='container mx-auto'>
				<div className={styles["section_layout"]}>
					<div className={styles["section_content"]}>
						<div className={styles["section_heading"]}>
							{service ? (
								<h1 className='heading-h1'>{feature?.title}</h1>
							) : (
								<h1 className='heading-h1'>Pongámonos en contacto</h1>
							)}
							<p className='text-xl'>
								Empecemos a mejorar tu negocio, ayúdanos a entender tus necesidades llenando el formulario y te contactaremos.
							</p>
						</div>

						<ul className={styles["section_content_list"]}>
							<li className={styles["section_content_list_item"]}>
								<CheckIcon />{" "}
								<span>Descubrir como puedes aumentar clientes</span>
							</li>
							<li className={styles["section_content_list_item"]}>
								<CheckIcon /> <span>Obtener información de precios</span>
							</li>
							<li className={styles["section_content_list_item"]}>
								<CheckIcon />{" "}
								<span>Explorar nuestros servicios para tu negocio</span>
							</li>
						</ul>
						<div className={styles["section_content_actions"]}>
							<div className={styles["section_content_card"]}>
								<PhoneIcon />
								<p className='text-xl font-medium'>LLámanos</p>
								<a
									className='text-xl font-medium hover:text-[var(--color-secondary)]'
									href={`tel:${PERSONAL_INFO.phone}`}
								>
									{formatPhoneNumber(PERSONAL_INFO.phone)}
								</a>
							</div>
							<div className={styles["section_content_card"]}>
								<CalendarIcon />
								<p className='text-xl font-medium'>Agenda una llamada</p>
								<BookButton
									variant='accent'
									text='Comienza Ya'
								/>
							</div>
						</div>
					</div>
					<ContactForm />
				</div>
			</div>
		</section>
	);
}

export default Hero;
