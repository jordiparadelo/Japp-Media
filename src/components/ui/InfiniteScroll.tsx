"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function InfiniteScroll({ children }: { children: React.ReactNode }) {
	const sliderRef = React.useRef<React.ReactNode | any>(null);
	const firstLineRef = React.useRef<React.ReactNode | any>(null);
	const secondLineRef = React.useRef<React.ReactNode | any>(null);

	let xPercentage = 0;
	let direction = -1;
	const velocity = 0.002;

	const animation = () => {
		gsap.set(firstLineRef.current, {
			xPercent: xPercentage,
		});
		gsap.set(secondLineRef.current, {
			xPercent: xPercentage,
		});

		xPercentage += direction * velocity;

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
	}, []);

	return (
		<div className='flex w-[100vw] overflow-x-hidden place-self-center'>
			<div
				className='flex flex-row min-w-min place-content-start'
				ref={sliderRef}
			>
				<span
					className='pr-[1rem]'
					ref={firstLineRef}
				>
					{children}
				</span>
				<span ref={secondLineRef}>{children}</span>
			</div>
		</div>
	);
}
export default InfiniteScroll;
