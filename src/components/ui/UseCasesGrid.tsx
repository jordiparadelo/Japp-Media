"use client";

import { UseCase } from "@/types";
import React, {  useRef } from "react";
import styles from "@/styles/UseCasesGrid.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export default function UseCasesGrid({
	useCases,
	className,
}: {
	useCases: UseCase[];
	className?: string;
}) {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end end"],
	});

	return (
		<div
			className={styles.grid + " " + className}
			ref={targetRef}
		>
			{useCases.map((useCase: UseCase, index: number, array: UseCase[]) => {
				const targetScale = 1 - (array.length - index) * 0.05;
				return (
					<CaseItem
						useCase={useCase}
						index={index}
						key={useCase.id}
						range={[index * 0.25, 1]}
						targetScale={targetScale}
						progress={scrollYProgress}
					/>
				);
			})}
		</div>
	);
}

function CaseItem({
	useCase,
	index,
	range,
	targetScale,
	progress,
}: {
	useCase: UseCase;
	index: number;
	range: [number, number];
	targetScale: number;
	progress: MotionValue<number>;
}) {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end end"],
	});
	const scale = useTransform(progress, range, [1, targetScale]);
	const imageScale = useTransform(scrollYProgress, [2, 1], [0, 1]);

	return (
		<motion.div
			className={styles.item}
			key={useCase.id}
			style={{ top: `calc(90px + ${index * 5}%)`, scale: scale }}
			ref={targetRef}
		>
			<Link
				className={styles.card}
				href={useCase.link}
				key={useCase.id}
			>
				<div className={styles.figure}>
					<Image
						className={styles.icon}
						src={useCase.icon}
						alt={useCase.title}
						width={100}
						height={100}
					/>
					<motion.div className={styles["image-container"]} style={{scale: imageScale}} >
						<Image
							className={styles.image}
							src={useCase.image}
							alt={useCase.title}
							width={100}
							height={100}
						/>
					</motion.div>
				</div>
				<div className={styles.content}>
					<h3 className={styles.title}>{useCase.title}</h3>
					<p className={styles.link}>Saber más</p>
				</div>
			</Link>
		</motion.div>
	);
}
