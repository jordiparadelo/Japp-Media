import React from "react";
import styles from "@/styles/WhyUs.module.scss";
import { HOME } from "@/data/content";
import { Section, Button } from "@/components/ui";
import Image from "next/image";
import CheckCircleIcon  from "@/assets/icons/arrow-right.svg";

export default function WhyUs() {
	const { whyUs } = HOME;
	return (
		<Section
			id='why-us'
			className={styles.section}
		>
			<div className={styles.layout}>
				<div className={styles.images}>
					<Image src='/images/image_hero-14.webp' alt={whyUs.title} width={500} height={500} />
					<Image src='/images/image_hero-14.webp' alt={whyUs.title} width={500} height={500} />
					<Image src='/images/image_hero-14.webp' alt={whyUs.title} width={500} height={500} />
				</div>
                <div className={styles.content}>
					<div className={styles.heading}>
						<p className={styles.subtitle}>{whyUs.subtitle}</p>
						<h2 className={styles.title}>{whyUs.title}</h2>
					</div>
					<p className={styles.description}>{whyUs.description}</p>
					<ul className={styles.benefits}>
						{whyUs.benefits.map((benefit) => (
							<li key={benefit.id} className={styles.benefits_item}>
								<CheckCircleIcon />
                                <p>{benefit.title}</p>
							</li>
						))}
					</ul>
					<div className={styles.actions}>
						<Button href='/contacto' variant='primary'>Impulsa tu negocio</Button>
					</div>
				</div>
			</div>
		</Section>
	);
}
