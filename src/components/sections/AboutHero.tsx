import React from "react";
import { BookButton, Button, SectionTag } from "../ui";
import Image from "next/image";
import styles from "@/styles/AboutHero.module.scss";

const AboutHero = () => {
	return (
		<section className={styles["section"] + " bkg-grid-pattern"}>
			<div className='container mx-auto'>
				<div className={styles["section_layout"]}>
					<div className={styles["section_heading"]}>
						<SectionTag
							rotation={-3}
							color='var(--color-primary)'
						>
							<span className='font-semibold'>Sobre nosotros</span>
						</SectionTag>
						<h1 className='heading-h1'>
							Ayudamos a los Negocios Locales a{" "}
							<span className='text-gray-300'>crecer en línea</span>
						</h1>
					</div>
					<div className={styles["section_actions"]}>
						<Button>Comienza Ya</Button>
						<BookButton variant="accent" text="Agenda una llamada" />
					</div>
					<Image
						className='w-full rounded-xl object-cover sm:min-w-[300px] ratio-4/3 max-w-screen-lg'
						src='/images/about-us_hero.webp'
						alt='image'
						width={300}
						height={400}
					/>
					<p className='text-2xl max-w-screen-lg'>
						En Japp Media, nuestra misión es ayudar a los negocios locales a
						expandirse más allá de sus límites inmediatos utilizando
						herramientas digitales poderosas. Nos especializamos en crear una
						presencia en línea sólida para las empresas, asegurándonos de atraer
						clientes potenciales de alta calidad y convertirlos en clientes
						fieles.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutHero;
