import React from "react";

import { HOW_HELP } from "@/data";
import { ContentBlocks } from "./ContentBlocks";
import { SectionTag } from "@/components/ui";

function WhoWeHelp() {
	return (
		<section className='py-11 px-5 md:px-16 md:py-20'>
			<div className='container mx-auto flex flex-col gap-8 md:gap-20'>
				<div className='flex flex-col place-items-center gap-6 max-w-screen-md mx-auto text-center'>
					<SectionTag rotation={-5}>Lo más importante</SectionTag>
					<h2 className='heading-h2'>
						Negocios que quieran crecer sin complicaciones.
					</h2>
					<p className='text-xl max-w-screen-md mx-auto text-pretty'>
						Si tienes un negocio local y estás buscando formas de hacerlo crecer
						sin complicarte con las herramientas digitales, en Japp Media
						estamos aquí para simplificarte el camino. Nuestro servicio está
						dirigido a quienes:
					</p>
				</div>
				<div className='max-w-screen-lg mx-auto'>
					<ContentBlocks blocks={HOW_HELP} />
				</div>
			</div>
		</section>
	);
}

export default WhoWeHelp;
