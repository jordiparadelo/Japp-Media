import React from "react";
import { Button, SectionTag } from "../ui";
import Image from "next/image";

const AboutHero = () => {
	return (
		<section className='py-11 px-5 md:px-16 md:py-20 bg-dotPattern '>
			<div className='container mx-auto flex flex-col place-items-center gap-12 text-center'>
				<div className='flex flex-col max-w-screen-md mx-auto gap-6 md:gap-8'>
					<div className='flex flex-col place-items-center gap-6'>
						<SectionTag rotation={-5}>Sobre nosotros</SectionTag>
						<h1 className='heading-h1'>
							Ayudamos a los Negocios Locales a crecer en línea
						</h1>
					</div>
					<div className='flex flex-col w-full max-w-[320px] sm:w-auto sm:max-w-none sm:grid sm:grid-cols-2 gap-4 place-self-center pt-4'>
						<Button>Comienza Ya</Button>
						<Button variant='secondary'>Agenda una llamada</Button>
					</div>
				</div>
				<Image
					className='w-full rounded-xl object-cover sm:min-w-[300px] ratio-4/3 max-w-screen-lg'
					src='/images/about-us_hero.webp'
					alt='image'
					width={300}
					height={400}
				/>
				<p className='text-xl leading-[1.5] text-pretty max-w-screen-md mx-auto'>
					En Japp Media, nuestra misión es ayudar a los negocios locales a
					expandirse más allá de sus límites inmediatos utilizando herramientas
					digitales poderosas. Nos especializamos en crear una presencia en
					línea sólida para las empresas, asegurándonos de atraer clientes
					potenciales de alta calidad y convertirlos en clientes fieles.
				</p>
			</div>
		</section>
	);
};

export default AboutHero;
