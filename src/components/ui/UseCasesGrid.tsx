import { UseCase } from "@/types";
import React from "react";
import styles from "@/styles/UseCasesGrid.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function UseCasesGrid({
	useCases,
	className,
}: {
	useCases: UseCase[];
	className?: string;
}) {
	return (
		<div className={styles.grid + " " + className}>
			{useCases.map((useCase: UseCase) => (
				<Link
					href={useCase.link}
					className={styles.item}
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
						<Image
							className={styles.image}
							src={useCase.image}
							alt={useCase.title}
							width={100}
							height={100}
						/>
					</div>
					<div className={styles.content}>
						<h3 className={styles.title}>{useCase.title}</h3>
						<p className={styles.link}>Saber más</p>
					</div>
				</Link>
			))}
		</div>
	);
}
