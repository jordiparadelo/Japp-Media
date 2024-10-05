import { BookButton, Button, Section } from "@/components/ui";
import styles from "@/styles/HomeHero.module.scss";

import React from "react";
import { HOME } from "@/data/content";
import HomeHeroSlider from "./HomeHeroSlider";
import { ROUTES } from "@/data/config";

function Hero() {
	const { hero } = HOME;
	return (
		<Section
			id='hero'
			className={styles.hero}
		>
			<div className={styles.layout}>
				<div className={styles.content}>
					<h1 className={styles.title}>{hero.title}</h1>
					<p className={styles.description}>{hero.description}</p>
					<div className={styles.actions}>
						<BookButton variant='accent' text='Impulsa tu negocio' />
						<Button variant='secondary' href={ROUTES.contacto.path}>Contacta con nosotros</Button>
					</div>
				</div>
				<HomeHeroSlider slides={hero.slides} />
			</div>
		</Section>
	);
}

export default Hero;
