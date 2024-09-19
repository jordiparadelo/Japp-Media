import React from "react";

import { FEATURES } from "@/data";
import { ContentBlocks } from "./ContentBlocks";
import { Button, SectionTag } from "@/components/ui";

import styles from "@/styles/Benefits.module.scss";

function Benefits() {
	return (
		<section className={styles["section"] + " bkg-dot-pattern"}>
			<div className='container mx-auto'>
				<div className={styles["section_layout"]}>
					<div className={styles["section_heading"]}>
						<div className={styles["section_heading_title-wrapper"]}>
							<SectionTag
								rotation={3}
								color='var(--color-primary)'
							>
								<span className='font-semibold'>¿Lo necesitas?</span>
							</SectionTag>
							<h2 className='text-4xl md:text-5xl font-heading'>
								Se <span className='text-gray-300'>ajusta a tu negocio</span> y
								reduce complicaciones.
							</h2>
						</div>
						<p className='text-lg'>
							No todos los negocios necesitan un servicio integral. Quizás solo
							necesites automatizar la comunicación, gestionar citas de clientes
							o mejorar reputación. Te ofrecemos claridad y una estrategia
							diseñada para lo que realmente te hace falta.
						</p>
						<div className={styles["section_heading_actions"]}>
							<Button>Agenda una llamada</Button>
						</div>
					</div>
					<ContentBlocks blocks={FEATURES} />
				</div>
			</div>
		</section>
	);
}

export default Benefits;
