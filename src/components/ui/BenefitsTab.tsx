"use client";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@/styles/BenefitsTab.module.scss";

interface Tab {
	id: number;
	title: string;
	content: string;
}

const TABS: Tab[] = [
	{ id: 1, title: "Aumenta tu presencia", content: "Content 1" },
	{ id: 2, title: "Mejora la reputación", content: "Content 2" },
	{ id: 3, title: "Automatiza tu comunicación", content: "Content 3" },
	{ id: 4, title: "Gestiona tus citas", content: "Content 4" },
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

	useEffect(() => {
		if (containerRef.current) {
			const container = containerRef.current;
			const firstTab = container.querySelector('[data-selected="true"]');
			if (firstTab) {
				const { x, width, height } = firstTab.getBoundingClientRect();
				setShadowProps({
					x,
					width,
					height,
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
						{activeTab.content}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

interface TabNavigationProps {
	tabs: Tab[];
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
