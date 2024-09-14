import Image from "next/image";
import React from "react";

import {SERVICES} from '../../data';


function Services() {
	return (
		<section className='py-11 px-5 md:px-16 md:py-20'>
			<div className='container max-w-screen-xl mx-auto flex flex-col gap-8'>
				<div className="flex flex-row gap-8 place-content-between ">
					<h2 className='text-4xl md:text-5xl md:max-w-[20ch] '>
						Un servicio que te ahorra dinero y trae nuevos clientes
					</h2>
          <div className="max-h-0 max-w-0 flex place-items-center">
            {/* <Image src="/images/services.png" alt="services" width={500} height={500} /> */}
          </div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
			<div className="flex flex-col gap-4 place-items-start text-left px-5 py-12">
				<h3 className="text-3xl">{title}</h3>
				<p className="text-xl sm:max-w-[40ch] ">{description}</p>
			</div>
			<Image
				src={image}
				alt={title}
			/>
		</div>
	);
};
