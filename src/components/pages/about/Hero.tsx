import React from "react";
import styles from "@/styles/AboutHero.module.scss";
import { ABOUT } from "@/data/content";
import { Section } from "@/components/ui";

const Hero = () => {
	const { hero } = ABOUT;
	return (
		<Section className={styles["section"]} inViewAnimation={false}>
			<div className={styles["layout"]}>
				<h1 className={styles["title"]}>{hero.title}</h1>
				<p className={styles["description"]}>{hero.description}</p>
			</div>
		</Section>
	);
};

export default Hero;
