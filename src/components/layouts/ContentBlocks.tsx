import React from "react";

import styles from '@/styles/ContentBlocks.module.scss'
import { BlocksCard } from "@/components/ui";
import { StepGuidedProps } from "@/types";



export default function ContentBlocks({ blocks }: { blocks: StepGuidedProps[] }) {
	return (
		<ul className={styles['grid']}>
			{blocks?.map((item) => (
				<li
					key={item.title}
				>
					<BlocksCard {...item} id={item.id} />
				</li>
			))}
		</ul>
	);
}

