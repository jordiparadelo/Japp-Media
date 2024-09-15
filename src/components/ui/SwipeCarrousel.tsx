"use client";
import React, { useContext, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

// const ONE_SECOND = 1000;
// const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
	type: "spring",
	mass: 3,
	stiffness: 400,
	damping: 50,
};

const SwipeCarouselContext = React.createContext<{
	activeIndex: number;
	setActiveIndex: (index: number) => void;
	length: number;
} | null>(null);

export const useSwipeCarousel = () => {
	const context = useContext(SwipeCarouselContext);
	if (!context) {
		throw new Error(
			"useSwipeCarousel must be used within a SwipeCarousel component"
		);
	}
	return context;
};

export default function SwipeCarousel({
	children,
	dots,
}: {
	children: React.ReactNode[];
	dots?: boolean;
}) {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const dragX = useMotionValue<number>(0);

	useEffect(() => {
		if (children.length <= 1) return;

		// const intervalRef = setInterval(() => {
		// 	const x = dragX.get();

		// 	if (x === 0) {
		// 		setActiveIndex((pv) => {
		// 			if (pv === children.length - 1) {
		// 				return 0;
		// 			}
		// 			return pv + 1;
		// 		});
		// 	}
		// }, AUTO_DELAY);

		// return () => clearInterval(intervalRef);
	}, [children]);

	const onDragEnd = () => {
		const x = dragX.get();

		if (x <= -DRAG_BUFFER && activeIndex < children.length - 1) {
			setActiveIndex((pv) => pv + 1);
		} else if (x >= DRAG_BUFFER && activeIndex > 0) {
			setActiveIndex((pv) => pv - 1);
		}
	};

	return (
		<SwipeCarouselContext.Provider
			value={{ activeIndex, setActiveIndex, length: children.length }}
		>
			<div className='flex flex-col'>
				<div className='flex flex-row gap-8'>
					{children.map((child, index) => (
						<motion.div
							key={index}
							drag='x'
							dragConstraints={{
								left: 0,
								right: 0,
							}}
							style={{
								x: dragX,
							}}
							animate={{
								translateX: `-${activeIndex * 100}%`,
							}}
							transition={SPRING_OPTIONS}
							onDragEnd={onDragEnd}
							className='flex cursor-grab items-center active:cursor-grabbing'
						>
							<SwipeCarouselSlide>{child}</SwipeCarouselSlide>
						</motion.div>
					))}
				</div>

				{dots && <SwipeCarousel.Dots />}
			</div>
		</SwipeCarouselContext.Provider>
	);
}
function SwipeCarouselSlide({ children }: { children: React.ReactNode }) {
	return (
		<motion.div className='flex items-center justify-center w-full'>
			{children}
		</motion.div>
	);
}

function SwipeCarouselDots() {
	const { activeIndex, setActiveIndex, length } = useSwipeCarousel();

	return (
		<div className='mt-4 flex w-full justify-center gap-2'>
			{Array.from({ length }).map((_, idx) => (
				<button
					key={idx}
					onClick={() => setActiveIndex(idx)}
					className={`h-3 w-3 rounded-full transition-colors ${
						idx === activeIndex ? "bg-neutral-50" : "bg-neutral-500"
					}`}
				/>
			))}
		</div>
	);
}

SwipeCarousel.Slide = SwipeCarouselSlide;
SwipeCarousel.Dots = SwipeCarouselDots;
