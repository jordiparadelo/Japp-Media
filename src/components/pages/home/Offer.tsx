import React from "react";
import styles from "@/styles/Offer.module.scss";
import { HOME } from "@/data/content";
import { OfferTabs } from "@/components/pages/home";
import { Section } from "@/components/ui";

export default function Offer() {
	const { offer } = HOME;
	return (
		<Section
			id='offer'
			className={styles.offer}
		>
			<div className={styles.layout}>
				<div className={styles.heading}>
					<p className={styles.subtitle}>{offer.subtitle}</p>
					<h2 className={styles.title}>{offer.title}</h2>
				</div>
				<div className={styles.content}>
					<OfferTabs offers={offer.items} />
				</div>
			</div>
		</Section>
	);
}
