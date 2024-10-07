import { BookButton, Button, Logo, Section } from "@/components/ui";
import React from "react";
import styles from "@/styles/CtaBanner.module.scss";
import { CTA_BANNER } from "@/data/content";

function CtaBanner() {
	const { title } = CTA_BANNER;
	return (
		<Section className={styles["section"]}>
			<div className={styles["layout"]}>
				<Logo
					height={32}
					variant='default'
				/>
				<h2 className={styles["title"]}>{title}</h2>
				<div className={styles["actions"]}>
					<Button variant='secondary' href='/contacto'>Impulsa tu negocio</Button>
					<BookButton text='Agendar una llamada' />
				</div>
			</div>
		</Section>
	);
}

export default CtaBanner;
