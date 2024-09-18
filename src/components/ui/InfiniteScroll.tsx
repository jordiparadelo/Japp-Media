"use client";

import React, { useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// TODO: Improve performance
function InfiniteScroll({ children, velocity }: { children: React.ReactNode, velocity?: number }) {
	const sliderRef = React.useRef<React.ReactNode | any>(null);
	const firstLineRef = React.useRef<React.ReactNode | any>(null);
	const secondLineRef = React.useRef<React.ReactNode | any>(null);
	const xPercentage = useRef<Number | any> (0)
	const direction = useRef<Number | any> (-1)

	// let xPercentage = 0;
	// let direction = -1;
	const velocityVal = () => {
        const width = window.innerWidth / sliderRef.current?.clientWidth;
		// return width * 0;
		return width * (velocity || 0.025);
	};

	const animation  = useCallback(() => {
		if(!sliderRef.current) return;

		gsap.set(firstLineRef.current, {
			xPercent: xPercentage.current,
		});
		gsap.set(secondLineRef.current, {
			xPercent: xPercentage.current,
		});

		xPercentage.current += direction.current * velocityVal();

		if (xPercentage.current <= -100) {
			xPercentage.current = 0;
		}
		if (xPercentage.current > 0) {
			xPercentage.current = -100;
		}

		requestAnimationFrame(animation);
	}, [sliderRef.current]);


	React.useEffect(() => {
		if(!sliderRef.current) return;


		gsap.registerPlugin(ScrollTrigger);
		requestAnimationFrame(animation);
		const { height } = sliderRef.current?.getBoundingClientRect();

		gsap.to(sliderRef.current, {
			scrollTrigger: {
				trigger: sliderRef.current,
				start: "start-=100% center",
				end: `${height}+=100% center`,
				scrub: 0.5,
				// markers: true,
				onUpdate: (scroll) => {
					direction.current = scroll.direction * -1;
				},
			},
			xPercent: `-=5`,
		});
	}, [velocity, sliderRef.current]);

	return (
		<div className='flex w-[100vw] overflow-x-hidden place-self-center'>
			<div
				className='flex flex-row min-w-min place-content-start'
				ref={sliderRef}
			>
				<span
					className='pr-[1.5rem]'
					ref={firstLineRef}
				>
					{children}
				</span>
				<span className='pr-[1.5rem]' ref={secondLineRef}>{children}</span>
			</div>
		</div>
	);
}
export default InfiniteScroll;

