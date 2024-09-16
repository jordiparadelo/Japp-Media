"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function InfiniteScroll({ children, velocity }: { children: React.ReactNode, velocity?: number }) {
	const sliderRef = React.useRef<React.ReactNode | any>(null);
	const firstLineRef = React.useRef<React.ReactNode | any>(null);
	const secondLineRef = React.useRef<React.ReactNode | any>(null);

	let xPercentage = 0;
	let direction = -1;
	const velocityVal = () => {
        const width = window.innerWidth / sliderRef.current.clientWidth;
		// return width * 0;
		return width * (velocity || 0.025);
	};

	const animation = () => {
		gsap.set(firstLineRef.current, {
			xPercent: xPercentage,
		});
		gsap.set(secondLineRef.current, {
			xPercent: xPercentage,
		});

		xPercentage += direction * velocityVal();

		if (xPercentage <= -100) {
			xPercentage = 0;
		}
		if (xPercentage > 0) {
			xPercentage = -100;
		}

		requestAnimationFrame(animation);
	};

	React.useEffect(() => {
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
					direction = scroll.direction * -1;
				},
			},
			xPercent: `-=5`,
		});
	}, [velocity]);

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

