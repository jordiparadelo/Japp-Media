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
	const cardHeight = React.useRef<number>(0);

	const TRANSITION_DURATION = 0.25;

	const cardVariants = {
		initial: { scale: 1 },
		hover: { scale: 1.05 },
	};

	const titleVariants = {
        hover: { height: 0, scale: 0.8, opacity: 0 },
		initial: { height: "auto", scale: 1, opacity: 1 },
	};

	const descriptionVariants = {
		initial: { opacity: 0, height: 0 },
		hover: { opacity: 1, height: "auto" },
	};

	React.useEffect(() => {
		if (cardRef.current) {
			cardHeight.current = cardRef.current.clientHeight;
			cardRef.current.style.minHeight = `${cardHeight.current}px`;
		}
	}, [cardHeight]);

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
					<AnimatePresence>
						{!isHovered && (
							<motion.h3
								initial='initial'
								animate={isHovered ? "hover" : "initial"}
								exit='hover'
								variants={titleVariants}
								transition={{ duration: TRANSITION_DURATION }}
								className={styles["service-card_title"]}
							>
								{title}
							</motion.h3>
						)}
					</AnimatePresence>
				</div>
				<AnimatePresence>
					{isHovered && (
						<motion.p
							className={styles["service-card_description"]}
							variants={descriptionVariants}
							initial='initial'
							animate='hover'
							exit='initial'
							transition={{ duration: TRANSITION_DURATION }}
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
