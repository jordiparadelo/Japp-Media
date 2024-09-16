import React from "react";
import { SectionTag } from "@/components/ui";
import { CtaBanner } from "@/components/sections";
import SwipeCarousel from "@/components/ui/SwipeCarrousel";
import { WHY_US } from "@/data";
import Image from "next/image";

function ContactPage() {
	return (
		<>
			<section className='py-11 px-5 md:px-16 md:py-20'>
				<div className='container mx-auto flex max-w-2xl flex-col place-items-center gap-8 text-center'>
					<div className='flex flex-col place-items-center gap-2 '>
						<SectionTag rotation={3}>¿Por que elegirnos?</SectionTag>
						<h2 className='text-2xl md:text-4xl font-heading'>
							Buscamos en que te centres en lo tuyo mientras atraemos a nuevos
							clientes
						</h2>
					</div>
					<p className='text-lg font-thin'>
						Necesitas una presencia digital efectiva que atraiga nuevos clientes
						y mantenga a tus actuales. Japp Media ofrece una gama de servicios
						para ayudarte a alcanzar tus metas, que incluyen:
					</p>
					<SwipeCarousel dots={true}>
						{WHY_US.map((item, index) => (
							<div
								key={index}
								className='flex flex-col gap-4 min-w-[clamp(240px,80vw,40ch)]  justify-start text-left p-4 rounded-2xl bg-white/10 min-h-full backdrop-blur-sm md:min-w-[40ch] flex-grow'
							>
								<Image
									src={item?.image}
									alt={item.title}
									width={300}
									height={200}
									className='user-select-none object-contain '
									style={{ WebkitUserDrag: "none" }}
								/>
								<h2 className='text-2xl font-heading'>{item.title}</h2>
								<p className='text-sm font-thin'>{item.description}</p>
							</div>
						))}
					</SwipeCarousel>
				</div>
			</section>

			<CtaBanner />
		</>
	);
}

export default ContactPage;
