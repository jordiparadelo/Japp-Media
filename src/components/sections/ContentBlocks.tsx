import React from "react";
import { StaticImageData } from "next/image";

import styles from '@/styles/ContentBlocks.module.scss'
import { BlocksCard } from "@/components/ui";

export type StepGuidedProps = {
	title?: string;
	description?: string;
	details?: Array<{
		title: string;
		description: string;
	}>;
	image?: StaticImageData | string;
};

export function ContentBlocks({ blocks }: { blocks: StepGuidedProps[] }) {
	return (
		<ul className={styles['grid']}>
			{blocks?.map((item) => (
				<li
					key={item.title}
				>
					<BlocksCard {...item} />
				</li>
			))}
		</ul>
	);
}

