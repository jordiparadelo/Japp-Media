'use client';

import React, { useRef, useEffect, useState } from "react";
import {
	motion,
	useAnimationFrame,
	useReducedMotion,
} from "framer-motion";

interface InfiniteScrollProps {
	children: React.ReactNode;
	speed?: number;
}

function InfiniteScroll({ children, speed = 20 }: InfiniteScrollProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [containerWidth, setContainerWidth] = useState(0);
	const prefersReducedMotion = useReducedMotion();
	const [scrollX, setScrollX] = useState(0);

	useEffect(() => {
		if (containerRef.current) {
			setContainerWidth(containerRef.current.scrollWidth / 2);
		}
	}, [children]);

	useAnimationFrame((t, delta) => {
		if (!prefersReducedMotion) {
			setScrollX((prevScrollX) => {
				const newScrollX = prevScrollX + speed * (delta / 1000);
				return newScrollX > containerWidth ? 0 : newScrollX;
			});
		}
	});

	if (prefersReducedMotion) {
		return (
			<div className='flex w-full overflow-x-auto'>
				<div className='flex flex-row'>{children}</div>
			</div>
		);
	}

	return (
		<div ref={containerRef} className='w-[100vw] flex self-center overflow-hidden'>
			<motion.div
				className='flex flex-row'
				style={{ x: -scrollX }}
			>
				{children}
				{children}
			</motion.div>
		</div>
	);
}

export default InfiniteScroll;
