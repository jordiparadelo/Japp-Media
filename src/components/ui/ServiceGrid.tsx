"use client";
import React from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import { useMediaQuery } from "@uidotdev/usehooks";
import styles from "@/styles/Services.module.scss";

import {ServiceCardType} from "@/types";
import Image from "next/image";



function ServiceGrid({ services }: { services: ServiceCardType[] }) {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<div className={styles["section_grid"]}>
			{!isMobile && (
				<Image
					className={styles["section_grid_central-image"]}
					src='/images/image_hero-9.webp'
					alt='services'
					width={300}
					height={500}
				/>
			)}
			{services.map((card) => (
				<ServiceCard
					key={card.title}
					{...card}
				/>
			))}
		</div>
	);
}

export default ServiceGrid;
