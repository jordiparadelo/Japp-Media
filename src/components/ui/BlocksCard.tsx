import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import Image from "next/image";

import styles from '@/styles/ContentBlocks.module.scss'
import { BlocksCardProps } from "@/types";
import Button from "./Button";



	export default function BlocksCard({ title, details, image, description, id }: BlocksCardProps) {
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
				</div>
				{details && Array.isArray(details) && details.length > 0 && (
					<Accordion>
						{details.map((detail: { title: string; description: string }) => (
							<AccordionItem
								key={detail.title}
								title={detail.title}
								content={detail.description}
							/>
						))}
					</Accordion>
				)}
				{description && <p className="text-xl">{description}</p>}
				{typeof details === 'string' && <p>{details}</p>}   
				<div className={styles['card_content_actions']}>	
					<Button variant='accent' href={`/contacto?service=${id}`}>Quiero este servicio</Button>
				</div>
			</div>
		</div>
	);
}
