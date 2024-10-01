import { HOW_HELP } from "@/data";
import { SectionTag } from "@/components/ui";
import styles from "@/styles/WhoWeHelp.module.scss";

import React from "react";

import { ContentBlocks } from "@/components/layouts";
import { StepGuidedProps } from "@/types";

function WhoWeHelp() {
	// TODO: Update classes with scss

	return (
		<section className={styles["section"] + " bkg-dot-pattern"}>
			<div className='container mx-auto'>
				<div className={styles["section_layout"]}>
					<div className={styles["section_heading"]}>
						<SectionTag
							rotation={-3}
							color={"var(--color-primary)"}
						>
							<span className='font-semibold'>A quien ayudamos</span>
						</SectionTag>
						<h2 className='heading-h2'>
							Negocios que quieran crecer <span className='text-gray-300'>sin complicaciones.</span> 
						</h2>
						<p className='text-xl max-w-screen-md mx-auto text-pretty font-thin'>
							Si tienes un negocio local y estás buscando formas de hacerlo
							crecer sin complicarte con las herramientas digitales, en Japp
							Media estamos aquí para simplificarte el camino. Nuestro servicio
							está dirigido a quienes:
						</p>
					</div>
					<div className='max-w-screen-lg mx-auto'>
						<ContentBlocks blocks={HOW_HELP as StepGuidedProps[]}  />
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhoWeHelp;
