import React from "react";

import styles from "@/styles/PainPoints.module.scss";
import { Section } from "@/components/ui";
import { HOME } from "@/data/content";
import {PainPointsGrid} from "@/components/pages/home";


function PainPoints() {
	const { painPoints } = HOME;
	return (
		<Section id='pain-points' className={styles.section}> 
			<div className={styles.layout}>
				<div className={styles.heading}>
					<h2 className={styles.title}>
						{painPoints.title}
					</h2>
					<p className={styles.description}>
						{painPoints.description}
					</p>
				</div>
				<PainPointsGrid painPoints={painPoints.items}/>
			</div>
		</Section>
	);
}

export default PainPoints;
