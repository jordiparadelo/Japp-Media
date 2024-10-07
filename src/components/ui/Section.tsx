"use client";

import React, { useRef } from "react";
import styles from "@/styles/Section.module.scss";
import { useInView } from "framer-motion";
// import { anim } from "@/libs/utils";

interface SectionProps {
	children: React.ReactNode;
	id?: string;
	className?: string;
	style?: React.CSSProperties;
	inViewAnimation?: boolean;
}

export default function Section({
	children,
	id,
	className,
	style,
	inViewAnimation = true,
}: SectionProps) {
	const sectionRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

	return (
		<section
			ref={sectionRef}
			className={styles.section + " " + className}
			id={id}
			style={style}
		>
			<div
				{...(inViewAnimation && {
					style: {
						transform: isInView ? "none" : "translateY(20%)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1)",
					},
				})}
				className={styles.container}
			>
				{children}
			</div>
		</section>
	);
}
