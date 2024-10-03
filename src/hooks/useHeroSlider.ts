import { Slide } from "@/components/pages/home/HomeHeroSlider";

import { useState } from "react";

export default function useHeroSlider(slides: Slide[]) {
	const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newIndex: number) => {
		const newDirection = newIndex > page ? 1 : -1;
		setPage([newIndex, newDirection]);
	};

	const nextSlide = () => {
        paginate(page + 1);
	};

	const prevSlide = () => {
        paginate(page - 1);
	};

	const goToSlide = (index: number) => {
        paginate(index);
	};

	return {
        slides,
		page,
		direction,
		nextSlide,
		prevSlide,
		goToSlide,
	};
}
