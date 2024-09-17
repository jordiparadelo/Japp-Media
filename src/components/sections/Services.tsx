import Image from "next/image";
import React from "react";

import { SERVICES } from "../../data";

function Services() {
	return (
		<section className='py-11 px-5 md:px-16 md:py-20'>
			<div className='container max-w-screen-xl mx-auto flex flex-col gap-20'>
				<div className='flex flex-col gap-8 text-center md:max-w-2xl mx-auto'>
					<h2 className='heading-h2'>
						Clientes nuevos, más citas, más ingresos.
					</h2>
					<p className='text-xl max-w-screen-md mx-auto text-pretty'>
						Nos enfocamos en negocios locales como el tuyo. Simplifica la
						gestión de citas y aumenta tu visibilidad sin esfuerzo.
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{SERVICES.map((card) => (
						<ServiceCard
							key={card.title}
							{...card}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;

type Props = {
	title: string;
	description: string;
	image: string;
};

const ServiceCard = ({ title, description, image }: Props) => {
	return (
		<div className='flex flex-col place-items-start lg:grid lg:grid-cols-2 rounded-2xl backdrop-blur-sm bg-white/20 overflow-hidden border-2 border-gray-50/10'>
			<div className='flex flex-col gap-4 place-items-start text-left px-5 py-12'>
				<h3 className='text-3xl'>{title}</h3>
				<p className='text-xl font-medium sm:max-w-[40ch] '>{description}</p>
			</div>
			<div className='flex flex-col place-content-center flex-grow self-stretch'>
				<Image
					src={image}
					alt={title}
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
};
