import { BookButton, Button, SectionTag } from "@/components/ui";
import HeroInfiniteSlider from "@/components/ui/HeroInfiniteSlider";
import styles from '@/styles/Hero.module.scss';
import { HERO_IMAGES } from "@/data";
import DoodleArrow from "@/assets/icons/doodle-arrow.svg";

import React from "react";

function Hero() {
	return (
		<section className={styles["section"] + " bkg-grid-pattern"}>
			<div className='container max-w-3xl mx-auto'>
				<div className={styles["section_layout"]}>
					<div className={styles["section_heading"]}>
						<h1 className={styles["section_title"]}>
							<span>Haz crecer tu negocio con mas</span>
							<span className={styles["section_title_wrap"]}>
								<span className={styles["section_title_wrap_line"]}>
									<SectionTag
										rotation={-3}
										color='var(--color-primary)'
									>
										Clientes
									</SectionTag>
									<DoodleArrow />
								</span>
								<span className={styles["section_title_wrap_line"]}>
									<span>sin</span>

									<SectionTag
										rotation={3}
										color='var(--color-secondary)'
									>
										esfuerzo
									</SectionTag>
								</span>
							</span>
						</h1>
						<p className='text-xl max-w-screen-md mx-auto text-pretty'>
							Ayudamos a negocios locales a incrementar sus ventas mensuales,
							nos encargamos de encontrarte clientes y dejarte el resto a ti.
						</p>
						<div className={styles["section_actions"]}>
							<Button
								href='/contacto'
								variant='primary'
							>
								Comencemos ya!
							</Button>
							<BookButton
								variant='accent'
								text='Agenda una llamada'
							/>
						</div>
					</div>
					<HeroInfiniteSlider images={HERO_IMAGES} />
				</div>
			</div>
		</section>
	);
}

export default Hero;
