"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@/styles/Services.module.scss";

type Props = {
	service: string;
	title: string;
	description: string;
	image: string;
};

const ServiceCard = ({ service, title, description, image }: Props) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const cardRef = React.useRef<null | HTMLDivElement>(null);
	const cardHeigth = React.useRef<number>(0);

	const cardVariants = {
		initial: { scale: 1 },
		hover: { scale: 1.05 },
	};

	const titleVariants = {
		initial: { scale: 1, opacity: 1 },
		hover: { scale: 0, opacity: 0 },
	};

	const descriptionVariants = {
		initial: { opacity: 0, height: 0 },
		hover: { opacity: 1, height: "auto" },
	};

	React.useEffect(() => {
		if (cardRef.current) {
			cardHeigth.current = cardRef.current.clientHeight;
			cardRef.current.style.minHeight = `${cardHeigth.current}px`;
		}
	}, [cardRef]);

	return (
		<motion.div
			ref={cardRef}
			variants={cardVariants}
			initial='initial'
			whileHover='hover'
			animate={isHovered ? "hover" : "initial"}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			transition={{ duration: 0.2 }}
			className={styles["service-card"]}
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className={styles["service-card_content"]}>
				<div className={styles["service-card_heading"]}>
					<p className={styles["service-card_service"]}>{service}</p>
					{!isHovered && (
						<motion.h3
							variants={titleVariants}
							className={styles["service-card_title"]}
						>
							{title}
						</motion.h3>
					)}
				</div>
				<AnimatePresence>
					{isHovered && (
						<motion.p
							className={styles["service-card_description"]}
							variants={descriptionVariants}
							initial='initial'
							animate='hover'
							exit='initial'
							transition={{ duration: 0.2 }}
						>
							{description}
						</motion.p>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
};

export default ServiceCard;
