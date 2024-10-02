"use client";

import React from "react";
import { ReviewsForm, SectionTag } from "@/components/ui";
import styles from "@/styles/ReviewsHero.module.scss";

function Hero() {
	return (
		<section className={styles["section"] + " bkg-grid-pattern"}>
			<div className='container mx-auto'>
				<div className={styles["section_layout"]}>
					<div className={styles["section_heading"]}>
						<SectionTag
							rotation={-3}
							color='var(--color-primary)'
						>
							<span className='font-semibold'>Recomiendanos</span>
						</SectionTag>
						<h1 className='heading-h1'>
							Ayudanos a crecer
							<span className='text-gray-300'>tu valoración nos importa</span>
						</h1>
					</div>
					
					<ReviewsForm />
				</div>
			</div>
		</section>
	);
}

export default Hero;
