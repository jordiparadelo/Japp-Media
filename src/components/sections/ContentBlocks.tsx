import React from "react";
import { Accordion, AccordionItem } from "../ui/Accordion";
import Image, { StaticImageData } from "next/image";

import styles from '@/styles/ContentBlocks.module.scss'

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

function BlocksCard({ title, description, details, image }: StepGuidedProps) {
	return (
		<div className={styles['card']}>
			{image && (
				<div className={styles['card_image']}>
					<Image
						src={image}
						alt='process'
						width={500}
						height={500}
						className='object-contain min-w-full min-h-full h-0'
					/>
				</div>
			)}
			<div className={styles['card_content']}>
			<div className={styles['card_content_heading']}>
				<h2 className='text-3xl '>{title}</h2>
				<p className='text-rg'>{description}</p>
				</div>
				<Accordion>
					{details?.map((detail) => (
						<AccordionItem
							key={detail.title}
							title={detail.title}
							content={detail.description}
						/>
					))}
				</Accordion>
			</div>
		</div>
	);
}
