import React from "react";
import { BookButton, Button, SectionTag } from "@/components/ui";
import Image from "next/image";
import InfiniteScroll from "../ui/InfiniteScroll";

import styles from "@/styles/Hero.module.scss";
import { HERO_IMAGES } from "@/data";

import DoodleArrow from "@/assets/icons/doodle-arrow.svg";

function Hero() {
	return (
		<section className={styles["section"] + " bkg-dot-pattern"}>
			<div className='container max-w-3xl mx-auto'>
				<div className='flex flex-col gap-20'>
					<div className='flex flex-col max-w-screen-md mx-auto gap-6 md:gap-8 text-center'>
						<div className='flex flex-col place-items-center gap-4'>
							<h1 className={styles["section_heading"]}>
								Haz crecer
								<br />
								tu negocio con mas
								<span className={styles["section_heading-wrap"]}>
									<span className={styles["section_heading-wrap_line"]}>
										<SectionTag
											rotation={-3}
											color='var(--color-primary)'
										>
											Clientes
										</SectionTag>
										<span>sin</span>
									</span>
									<span className={styles["section_heading-wrap_line"]}>
										<DoodleArrow />

										<SectionTag
											rotation={3}
											color='var(--color-secondary)'
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
						<div className={styles["section_actions"]}>
							<Button  href="/contacto" variant="primary">Comencemos ya!</Button>
							<BookButton variant="accent" text="Agenda una llamada" />
						</div>
					</div>
					<InfiniteScroll velocity={0.25}>
						<div
							className='grid gap-6 min-h-[500px]'
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

								return (
									<div
										className='flex flex-col bg-gray-300 rounded-xl min-w-[256px] md:min-w-[400px] overflow-hidden'
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
