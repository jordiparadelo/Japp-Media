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
					<InfiniteScroll velocity={0.05}>
						<div
							className='grid gap-6 min-h-[320px]'
							style={{
								gridTemplateColumns: `repeat(auto-fill, 1fr)`,
								gridTemplateRows: "1fr 1fr",
							}}
						>
							{IMAGES.map((image, index) => {
								const condition = (index + 3) % 3 === 0;
								const gridDisplay =
									(index + 3) % 3 === 0
										? {
												gridRow: `1/3`,
										  }
										: (index + 3) % 3 === 1
										? {
												gridRow: `1/2`,
										  }
										: {
												gridRow: `2/3`,
										  };

								console.log({ condition });

								return (
									<div
										className='flex flex-col bg-gray-300 rounded-xl min-w-[256px] overflow-hidden'
										key={index}
										data-condition={condition}
										data-index={index}
										style={gridDisplay}
									>
										<Image
											className='grow-1 self-stretch h-0 min-h-full w-full object-cover child:'
											src={image.src}
											alt={image.alt}
											width={200}
											height={300}
										/>
									</div>
								);
							})}
						</div>
					</InfiniteScroll>
				</div>
			</div>
		</section>
	);
}

export default Hero;