import React from "react";
import SwipeCarousel from "../ui/SwipeCarrousel";
import { SectionTag } from "../ui";
import { WHY_US } from "@/data";
import Image from "next/image";
import styles from "@/styles/WhyUs.module.scss";

function WhyUs() {
	return (
		<section className={styles["section"] + " bkg-grid-pattern"}>
			<div className='container mx-auto'>
				<div className={styles["section_layout"]}>
					<div className={styles["section_heading"]}>
						<SectionTag
							rotation={3}
							color={"var(--color-primary)"}
						>
							<span className='font-semibold'>¿Por que elegirnos?</span>
						</SectionTag>
						<h2 className='heading-h2'>
							Buscamos en que te centres en lo tuyo mientras atraemos a{" "}
							<span className='text-gray-400'>nuevos clientes</span>
						</h2>
						<p className='text-xl'>
							Necesitas una presencia digital efectiva que atraiga nuevos
							clientes y mantenga a tus actuales. Japp Media ofrece una gama de
							servicios para ayudarte a alcanzar tus metas, que incluyen:
						</p>
					</div>

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
									className='object-contain drag-none'
								/>
								<h2 className='text-2xl font-heading'>{item.title}</h2>
								<p className='text-sm font-thin'>{item.description}</p>
							</div>
						))}
					</SwipeCarousel>
				</div>
			</div>
		</section>
	);
}

export default WhyUs;
