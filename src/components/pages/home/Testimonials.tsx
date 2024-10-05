import React from "react";
import styles from "@/styles/Testimonials.module.scss";
import { Section, Button, ReviewPopUp } from "@/components/ui";
import { HOME } from "@/data/content";

export default function Testimonials() {
	const { testimonials } = HOME;
	return (
		<Section
			id='testimonials'
			className={styles.section}
		>
			<div className={styles.layout}>
				<div className={styles.heading}>
					<h2 className='sr-only'>{testimonials.title}</h2>
					<div className={styles.title}>
						No eres el primero <ReviewPopUp className={styles.reviewPopUp} review={testimonials.reviews[0]} />
						que lo prueba, sumate
						<ReviewPopUp className={styles.reviewPopUp} review={testimonials.reviews[1]} /> y crece como ellos
						<ReviewPopUp className={styles.reviewPopUp} review={testimonials.reviews[0]} />.
					</div>
					<p className={styles.description}>
						Descubre lo que dicen nuestros clientes sobre nosotros.
					</p>
				</div>
				<div className={styles.actions}>
					<Button
						href='/contacto'
						variant='primary'
					>
						Impulsa tu negocio
					</Button>
					<Button
						href='/recomiendanos'
						variant="secondary"
					>
						Ayúdanos a mejorar
					</Button>
				</div>
			</div>
		</Section>
	);
}
