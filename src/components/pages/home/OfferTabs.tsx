"use client";

import React, { useState, useEffect } from "react";
import { Offer } from "@/types";
import { Tabs } from "@/components/ui";
import Image from "next/image";
import { useTabsContext } from "@/contexts/TabsContext";
import styles from "@/styles/OfferTabs.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const animationConfig = {
	description: {
		active: { opacity: 1, y: 0 },
		inactive: { opacity: 0, y: 20 },
	},
	transition: {
		duration: 0.3,
		ease: [0.65, 0, 0.35, 1],
	},
};

export default function OfferTabs({ offers }: { offers: Offer[] }) {
	return (
		<Tabs className={styles.tabs}>
			<OfferTabsContent offers={offers} />
		</Tabs>
	);
}

function OfferTabsContent({ offers }: { offers: Offer[] }) {
	const { activeTab } = useTabsContext();
	const [animationComplete, setAnimationComplete] = useState<boolean>(true);

	useEffect(() => {
		setAnimationComplete(false);
	}, [activeTab]);

	return (
		<>
			<div className={styles.links}>
					{offers.map((offer, index) => {
						const isActive = activeTab === index;
						return (
							<Tabs.Link
								key={index}
								activeIndex={index}
								className={styles.link}
								title={offer.title}
								data-selected={isActive}
							>
                                <div className={styles.heading}>
                                    <Image
                                        className={styles.icon}
                                        src={offer.icon}
                                        alt={offer.title}
                                        width={32}
                                        height={32}
                                    />
                                    <h3 className={styles.title}>{offer.title}</h3>
                                </div>
                                    <AnimatePresence
									mode='wait'
									onExitComplete={() => setAnimationComplete(true)}
								>
									{isActive && animationComplete && (
										<motion.p
											className={styles.description}
											variants={animationConfig.description}
											initial='inactive'
											animate='active'
											exit='inactive'
											transition={animationConfig.transition}
											key={index}
										>
											{offer.description}
										</motion.p>
									)}
									</AnimatePresence>
								</Tabs.Link>
						);
					})}
			</div>
			<Tabs.Panels
				className={styles.panel}
				key={activeTab}
			>
				{offers.map((offer, index) => {
					const isActive = activeTab === index;
					return (
						isActive && (
							<React.Fragment key={index}>
								<Image
									className={styles.image}
									src={offer.image}
									alt={offer.title}
									width={100}
									height={100}
								/>
								<AnimatePresence
									mode='wait'
									onExitComplete={() => setAnimationComplete(true)}
								>
									{animationComplete && (
										<motion.p
											className={styles.panel_description}
											variants={animationConfig.description}
											initial='inactive'
											animate='active'
											exit='inactive'
											transition={animationConfig.transition}
										>
											{offer.description}
										</motion.p>
									)}
								</AnimatePresence>
							</React.Fragment>
						)
					);
				})}
			</Tabs.Panels>
		</>
	);
}
