import React from "react";

import { SERVICES } from "@/data";

import styles from "@/styles/Services.module.scss";
import { SectionTag, ServiceGrid } from "@/components/ui";

function Services() {
	return (
		<section className={styles["section"] + " bkg-dot-pattern"}>
			<div className='container mx-auto'>
				<div className={styles["section_layout"]}>
					<div className={styles["section_heading"]}>
						<div className={styles["section_heading_title-wrapper"]}>
							<SectionTag
								rotation={-3}
								color='var(--color-primary)'
							>
								<span className='font-semibold'>¿Por que Nosotros?</span>
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
					<ServiceGrid services={SERVICES} />
				</div>
			</div>
		</section>
	);
}

export default Services;
