'use client';
import React, { useContext, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

// const ONE_SECOND = 1000;
// const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
	type: "tween",
	mass: 1,
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
			<div className='flex flex-col max-w-full'>
				<div className='grid grid-flow-col place-items-center w-[100vw] max-w-[100vw] place-self-center px-8 md:space-x-0 md:px-0 md:w-auto md:place-self-auto md:w-auto md:gap-8 '>
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
							className='flex flex-col place-content-stretch cursor-grab items-stretch active:cursor-grabbing min-h-full pe-4 md:pe-0 md:px-0'
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
	return <>{children}</>;
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
