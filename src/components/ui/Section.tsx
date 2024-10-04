import React from "react";
import styles from "@/styles/Section.module.scss";

interface SectionProps {
	children: React.ReactNode;
	id?: string;
	className?: string;
	style?: React.CSSProperties;
}

export default function Section({
	children,
	id,
	className,
	style,
}: SectionProps) {
	return (
		<section
			className={styles.section + " " + className}
			id={id}
			style={style}
		>
			<div className={styles.container}>{children}</div>
		</section>
	);
}
