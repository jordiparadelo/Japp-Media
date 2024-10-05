"use client";

import Image from "next/image";
import styles from "@/styles/HomeHeroSlider.module.scss";
import {
	HeroSliderProvider,
	useHeroSliderContext,
} from "@/contexts/HeroSliderContext";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { anim } from "@/libs/utils";

export interface Slide {
	id: string;
	title: string;
	imageUrl: string;
	// Add other relevant properties
}

interface HomeHeroSliderProps {
	slides: Slide[];
}

export default function HomeHeroSlider({ slides }: HomeHeroSliderProps) {
	return (
		<HeroSliderProvider slides={slides}>
			<div className={styles.slider}>
				<HomeHeroSlider.Slider />
				<HomeHeroSlider.Pagination />
			</div>
		</HeroSliderProvider>
	);
}

HomeHeroSlider.Slider = function Slider() {
	const { slides, page } = useHeroSliderContext();
	const slide = slides[page];

	return (
		<div className={styles.wrapper}>
			<HomeHeroSlider.Slide {...slide} />
		</div>
	);
};

const SlideVariants: Variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? "100%" : "-100%",
		opacity: 0,
	}),
	center: { x: "0%", opacity: 1 },
	exit: (direction: number) => ({
		x: direction > 1 ? "-100%" : "100%",
		opacity: 0,
	}),
};

const transition = {
	x: { type: "spring", stiffness: 300, damping: 30 },
	filter: { duration: 0.5 },
};

HomeHeroSlider.Slide = function Slide({ id, title, imageUrl }: Slide) {
	const { direction } = useHeroSliderContext();

	return (
		<AnimatePresence mode='wait' initial={false}>
			<motion.div
				key={id}
				className={styles.slide}
				{...anim(SlideVariants)}
				custom={direction}
				initial='enter'
				animate='center'
				exit='exit'
				transition={transition}
			>
				<Image
					className={styles.slide_image}
					src={imageUrl}
					alt={title}
					width={680}
					height={840}
					// blurDataURL={imageUrl}
				/>
			</motion.div>
		</AnimatePresence>
	);
};

HomeHeroSlider.Pagination = function Pagination() {
	const { goToSlide, page, slides } = useHeroSliderContext();

	const { title } = slides[page];

	return (
		<div className={styles.pagination}>
			<div className={styles.pagination_content}>
				<h3 className={styles.pagination_title}>{title}</h3>
			</div>
			<div className={styles.pagination_dots}>
				<AnimatePresence>
					{Array.from({ length: slides.length }, (_, index) => (
						<motion.button
							key={index}
							className={styles.pagination_item}
							onClick={() => goToSlide(index)}
							data-active={page === index}
						></motion.button>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};
