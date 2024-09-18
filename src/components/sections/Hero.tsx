import React from "react";
import { Button, SectionTag } from "@/components/ui";

import Image from "next/image";
import InfiniteScroll from "../ui/InfiniteScroll";

import styles from "@/styles/hero.module.scss";
import { cn } from "@/libs/utils";
import { HERO_IMAGES } from "@/data";

import DoodleArrow from '@/assets/icons/doodle-arrow.svg'

function Hero() {
	return (
		<section
			className={cn(`px-6 pt-24 pb-16 bkg-dot-pattern ${styles["hero"]}`)}
		>
			<div className='container max-w-3xl mx-auto'>
				<div className='flex flex-col gap-20'>
					<div className='flex flex-col max-w-screen-md mx-auto gap-6 md:gap-8 text-center'>
						<div className='flex flex-col place-items-center gap-4'>
							<h1 className={styles["hero_heading"]}>
								Haz crecer
								<br />
								tu negocio con mas
								<span className={styles["hero_heading-wrap"]}>
									{" "}
									<span className={styles["hero_heading-wrap_line"]}>
										<SectionTag
											rotation={-3}
											color='#0DDEAC'
										>
											Clientes
										</SectionTag>{" "}
										<span>sin</span>
									</span>{" "}
									<span className={styles["hero_heading-wrap_line"]}>
									<DoodleArrow/>

										<SectionTag
											rotation={3}
											color='#C5FD01'
										>
											esfuerzo
										</SectionTag>
									</span>
								</span>
							</h1>
							<p className='text-xl max-w-screen-md mx-auto text-pretty'>
								Ayudamos a negocios locales a incrementar sus ventas mensuales,
								nos encargamos de encontrarte clientes y dejarte el resto a ti.
							</p>
						</div>
						<div className='flex flex-col w-full max-w-[320px] sm:w-auto sm:max-w-none sm:grid sm:grid-cols-2 gap-4 place-self-center pt-4'>
							<Button>Comienza Ya</Button>
							<Button variant='secondary'>Agenda una llamada</Button>
						</div>
					</div>
					<InfiniteScroll velocity={0.05}>
						<div
							className='grid gap-6 min-h-[420px]'
							style={{
								gridTemplateColumns: `repeat(auto-fill, 1fr)`,
								gridTemplateRows: "1fr 1fr",
							}}
						>
							{HERO_IMAGES.map((image, index) => {
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
										className='flex flex-col bg-gray-300 rounded-xl min-w-[356px] min-h-[480] overflow-hidden'
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
											height={400}
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
