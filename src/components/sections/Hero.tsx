import React from "react";
import { Button } from "@/components/ui";

import Image from "next/image";
import InfiniteScroll from "../ui/InfiniteScroll";

const IMAGES = [
	{
		src: "/images/image_hero-1.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-2.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-3.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-4.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-5.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-6.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-7.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-8.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-9.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-10.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-11.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-12.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-13.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-14.webp",
		alt: "Trabajador en una tienda de ropa",
	},
	{
		src: "/images/image_hero-15.webp",
		alt: "Trabajador en una tienda de ropa",
	},
];

function Hero() {
	return (
		<section className='px-6 pt-24 pb-16'>
			<div className='container max-w-3xl mx-auto'>
				<div className='flex flex-col gap-20'>
					<div className='flex flex-col gap-4 items-center text-center'>
						<h1 className='  text-5xl md:text-6xl lg:text-7xl '>
							Haz crecer tu negocio con mas clientes sin esfuerzo
						</h1>
						<p>
							Ayudamos a negocios locales a incrementar sus ventas mensuales,
							nos encargamos de encontrarte clientes y dejarte el resto a ti.
						</p>
						<div className='flex gap-4 flex-row pt-2'>
							<Button variant='primary'>Contáctenos</Button>
							<Button variant='secondary'>Agenda una llamada</Button>
						</div>
					</div>
					<InfiniteScroll>
						<div className='flex flex-row gap-4'>
							{IMAGES.map((image, index) => (
								<div
									className='flex flex-col bg-gray-300 rounded-xl min-w-[256px] h-[300px] overflow-hidden'
									key={index}
								>
									<Image
										className='grow-1 self-stretch h-0 min-h-full w-full object-cover'
										src={image.src}
										alt={image.alt}
										width={200}
										height={300}
									/>
								</div>
							))}
						</div>
					</InfiniteScroll>
				</div>
			</div>
		</section>
	);
}

export default Hero;

// function Marquee({ children }: { children: React.ReactNode[] }) {
// 	const marqueeVariants = {
// 		animate: {
// 			x: [0, -100, 0],
// 			transition: {
// 				duration: 10,
// 				ease: "linear",
// 				repeat: Infinity,
// 			},
// 		},
// 		hover: {
// 			x: 0,
// 			transition: {
// 				duration: 0,
// 			},
// 		},
// 	};

// 	return (
// 		<motion.div
// 			className='flex flex-row gap-4 items-center justify-center overflow-hidden'
// 			variants={marqueeVariants}
// 			animate='animate'
// 			whileHover='hover'
// 		>
// 			{children}
// 		</motion.div>
// 	);
// }
