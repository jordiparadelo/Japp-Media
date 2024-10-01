'use client'

import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/ReviewPage.module.scss";
import Image from "next/image";
import { BusinessData } from "@/types";

function Hero({ businessData }: { businessData: BusinessData }) {

    if(!businessData) return null;

	return (
		<motion.header
			className={styles.header}
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			{businessData.logoUrl && <Image
				src={businessData.logoUrl}
				alt={businessData.name}
				width={150}
				height={150}
				className={styles.logo}
			/>}
			<h1 className={styles.businessName}>{businessData.name}</h1>
			{businessData.tagline && <p className={styles.tagline}>{businessData.tagline}</p>}
		</motion.header>
	);
}

export default Hero;
