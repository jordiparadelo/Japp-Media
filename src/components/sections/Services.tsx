import Image from "next/image";
import React from "react";

import { SERVICES } from "@/data";
// import { cn } from "@/libs/utils";

import styles from "@/styles/Services.module.scss";
import ServiceCard from "@/components/ui/ServiceCard";

function Services() {
	return (
		<section
			className={styles["services"]}
			// className={cn(`py-11 px-5 md:px-16 md:py-20 ${"bkg-grid-pattern"}`)}
		>
			<div className='container mx-auto'>
				<div className={styles["services_layout"]}>
					<div className={styles["services_heading"]}>
						<h2 className='heading-h2'>
							Un servicio que te ahorra tiempo y trae nuevos clientes
						</h2>
						<p className='text-2xl text-pretty'>
							Nos enfocamos en negocios locales como el tuyo. Simplifica la
							gestión de citas y aumenta tu visibilidad sin esfuerzo.
						</p>
					</div>

					<div className={styles["services_grid"]}>
						<Image
							className={styles["services_grid_central-image"]}
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
