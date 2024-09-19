import Image from "next/image";
import React from "react";

import { SERVICES } from "@/data";
// import { cn } from "@/libs/utils";

import styles from "@/styles/Services.module.scss";
import ServiceCard from "@/components/ui/ServiceCard";
import { SectionTag } from "../ui";

function Services() {
	return (
		<section
			className={styles["section"] + " bkg-grid-pattern"}
			// className={cn(`py-11 px-5 md:px-16 md:py-20 ${"bkg-grid-pattern"}`)}
		>
			<div className='container mx-auto'>
				<div className={styles["section_layout"]}>
					<div className={styles["section_heading"]}>
						<div className={styles["section_heading_title-wrapper"]}>
							<SectionTag
								rotation={-3}
								color='var(--color-primary)'
							>
								<span className="font-semibold">¿Por que Nosotros?</span>	
							</SectionTag>
							<h2 className='heading-h2'>
								Un servicio que te{" "}
								<span className='text-gray-400'>ahorra tiempo</span> y trae{" "}
								<span className='text-gray-400'>nuevos clientes</span>
							</h2>
						</div>
						<p className='text-xl text-pretty'>
							Nos enfocamos en negocios locales como el tuyo. Simplifica la
							gestión de citas y aumenta tu visibilidad sin esfuerzo.
						</p>
					</div>

					<div className={styles["section_grid"]}>
						<Image
							className={styles["section_grid_central-image"]}
							src='/images/image_hero-9.webp'
							alt='services'
							width={300}
							height={500}
						/>
						{SERVICES.map((card) => (
							<ServiceCard
								key={card.title}
								{...card}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
