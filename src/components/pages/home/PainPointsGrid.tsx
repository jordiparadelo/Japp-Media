"use client";

import React, { useState, useEffect } from "react";
import { PainPoint } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@/styles/PainPointsGrid.module.scss";

// Separate animation variants and transitions for better organization
const animationConfig = {
  itemVariants: {
    active: { flexGrow: 4 }, // Assuming 4 pain points, adjust if needed
    inactive: { flexGrow: 1 },
  },
  cardBodyVariants: {
    active: {
      opacity: 1,
      y: 0,
    },
    inactive: {
      opacity: 0,
      y: 20,
    },
  },
  transition: {
    duration: 0.6,
    ease: [0.65, 0, 0.35, 1],
  },
};

// Separate component for the card body
function CardBody({ painPoint }: { painPoint: PainPoint }) {
  return (
    <motion.div
      variants={animationConfig.cardBodyVariants}
      initial="inactive"
      animate="active"
      exit="inactive"
      transition={{ duration: 0.3 }}
      className={styles.card_body}
    >
      <h3 className={styles.card_title}>{painPoint.title}</h3>
      <p className={styles.card_description}>{painPoint.description}</p>
    </motion.div>
  );
}

// Separate component for each pain point card
function PainPointCard({ 
  painPoint, 
  isActive, 
  onSelect, 
  onAnimationComplete 
}: { 
  painPoint: PainPoint; 
  isActive: boolean; 
  onSelect: () => void; 
  onAnimationComplete: () => void;
}) {
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);

  // Reset animation complete state when active state changes
  useEffect(() => {
    setAnimationComplete(false);
  }, [isActive]);

  return (
    <motion.li
      className={styles.item}
      onClick={onSelect}
      onMouseEnter={onSelect}
      aria-selected={isActive}
      variants={animationConfig.itemVariants}
      initial="inactive"
      animate={isActive ? "active" : "inactive"}
      transition={animationConfig.transition}
      onAnimationComplete={() => {
        if (isActive) {
          setAnimationComplete(true);
          onAnimationComplete();
        }
      }}
    >
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${painPoint.image})` }}
      >
        <div className={styles.card_header}>
          <span className={styles.card_icon}>{painPoint.icon}</span>
          <p className={styles.card_service}>{painPoint.service}</p>
        </div>
        <AnimatePresence mode="wait">
          {isActive && animationComplete && (
            <CardBody 
              key={`${painPoint.id}-${isActive}-${animationComplete}`} 
              painPoint={painPoint} 
            />
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
}

// Main component
function PainPointsGrid({ painPoints }: { painPoints: PainPoint[] }) {
  const [activeItem, setActiveItem] = useState<number>(0);

  const handleSelect = (index: number) => {
    if (index !== activeItem) {
      setActiveItem(index);
    }
  };

  return (
    <ul className={styles.grid}>
      {painPoints.map((painPoint, index) => (
        <PainPointCard
          key={painPoint.id}
          painPoint={painPoint}
          isActive={activeItem === index}
          onSelect={() => handleSelect(index)}
          onAnimationComplete={() => {/* Additional logic if needed */}}
        />
      ))}
    </ul>
  );
}

export default PainPointsGrid;
