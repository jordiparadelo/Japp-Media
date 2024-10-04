import React from "react";
import styles from "@/styles/HowStart.module.scss";
import { HOME } from "@/data/content";
import { Button, Section } from "@/components/ui";

export default function HowStart() {
	const { howStart } = HOME;

	return (
		<Section
			id='how-start'
			className={styles.section}
		>
			<div className={styles.layout}>
				<div className={styles.content}>
					<div className={styles.heading}>
						<p className={styles.subtitle}>{howStart.subtitle}</p>
						<h2 className={styles.title}>{howStart.title}</h2>
					</div>
					<Button variant='secondary'>Comencemos a trabajar juntos</Button>
				</div>
				<div className={styles.steps}>
					{howStart.steps.map((step, index) => (
						<div
							key={step.id}
							className={styles.step}
						>
							<div className={styles.step_line} style={{ color: step.color }}>
                                <span className={styles.step_line_line} ></span>
                                <span className={styles.step_line_dot}></span>
                            </div>
							<div className={styles.step_card}>
								<div className={styles.step_number}>
									<p style={{ color: step.color }}>0{index + 1}</p>
								</div>
								<div className={styles.step_content}>
									<h3 className={styles.step_title}>{step.title}</h3>
									<p className={styles.step_description}>{step.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
