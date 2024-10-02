"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@/styles/BenefitsTab.module.scss";
import { BlocksCard } from "@/components/ui";
import { FEATURES } from "@/data";
import { BlocksCardProps, TabType } from "@/types";



const TABS: TabType[] = [
	{ id: 1, title: "Aumenta tu presencia", content: FEATURES[0] },
	{ id: 2, title: "Mejora la reputación", content: FEATURES[1] },
	{ id: 3, title: "Automatiza tu comunicación", content: FEATURES[2] },
	{ id: 4, title: "Agenda más trabajos", content: FEATURES[3] },
];

const SLIDE_DISTANCE = 500;

const slideVariants = {
	enter: (direction: number) => ({
		x: direction > 0 ? SLIDE_DISTANCE : -SLIDE_DISTANCE,
		opacity: 0,
	}),
	center: {
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => ({
		x: direction < 0 ? SLIDE_DISTANCE : -SLIDE_DISTANCE,
		opacity: 0,
	}),
};

const swipeConfidenceThreshold = 100000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

function BenefitsTab() {
	const [[page, direction], setPage] = useState([0, 0]);
    const [shadowProps, setShadowProps] = useState({
        x: 0,
        width: 0,
        height: 0,
    });
	const containerRef = useRef<HTMLDivElement>(null);

	const activeTab = TABS[page];

	const paginate = (newIndex: number) => {
		const newDirection = newIndex > page ? 1 : -1;
		setPage([newIndex, newDirection]);
	};

	const handleTabClick = (
		e: React.MouseEvent<HTMLButtonElement>,
		index: number
	) => {
		const target = e.target as HTMLButtonElement;
		const container = target.parentNode as HTMLElement;

        setShadowProps({
            x: target.offsetLeft,
            width: target.offsetWidth,
            height: target.offsetHeight,
        });
		paginate(index);

		if (container) {
			const scrollLeft =
				target.offsetLeft - container.offsetWidth / 2 + target.offsetWidth / 2;
			container.scrollTo({
				left: scrollLeft,
				behavior: "smooth",
			});
		}
	};

	useLayoutEffect(() => {
		if (containerRef.current) {
			const container = containerRef.current;
			const firstTab = container.querySelector('[data-selected="true"]');
			if (firstTab) {
				const { offsetLeft, offsetWidth, offsetHeight } = firstTab as HTMLElement;
				setShadowProps({
					x: offsetLeft,
					width: offsetWidth,
					height: offsetHeight,
				});
			}
		}
	}, [containerRef]);

	return (
		<div className={styles["benefits-tab"]} ref={containerRef}>
			<TabNavigation
				tabs={TABS}
				activeTabIndex={page}
				onTabClick={handleTabClick}
                shadowProps={shadowProps}
			/>
			<div className={styles["benefits-tab_panel"]}>
				<AnimatePresence
					mode='wait'
					custom={direction}
				>
					<motion.div
						key={page}
						custom={direction}
						variants={slideVariants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: "spring", stiffness: 300, damping: 30 },
							opacity: { duration: 0.5 },
						}}
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x);

							if (swipe < -swipeConfidenceThreshold) {
								paginate((page + 1) % TABS.length);
							} else if (swipe > swipeConfidenceThreshold) {
								paginate((page - 1 + TABS.length) % TABS.length);
							}
						}}
					>
						
						<BlocksCard {...activeTab.content as BlocksCardProps}/>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

interface TabNavigationProps {
	tabs: TabType[];
	activeTabIndex: number;
    shadowProps: {
        x: number;
        width: number;
        height: number;
    };
	onTabClick: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
}

function TabNavigation({
	tabs,
	activeTabIndex,
	onTabClick,
    shadowProps,
}: TabNavigationProps) {
	return (
		<div className={styles["benefits-tab_nav"]}>
			<div className={styles["benefits-tab_nav_container"]}>
                <motion.span 
                    className={styles["benefits-tab_nav_shadow"]}
                    style={{
                        transform: `translateX(${shadowProps.x}px)`,
                        width: `${shadowProps.width}px`,
						height: `${shadowProps.height}px`,
                    }}
                ></motion.span>
				{tabs.map((tab, index) => (
					<button
						key={tab.id}
						onClick={(e) => onTabClick(e, index)}
						className={styles["benefits-tab_nav_link"]}
						aria-label={tab.title}
						data-selected={index === activeTabIndex}
					>
						{tab.title}
					</button>
				))}
			</div>
		</div>
	);
}

export default BenefitsTab;
