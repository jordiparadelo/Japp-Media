'use client';
import { useState } from "react";

type Props = {
	// children: React.ReactNode;
	title: string;
	content: string;
};

export default function Dropdown({ title, content }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen((prev) => !prev);

	return (
		<div className='flex flex-row place-items-stretch gap-3'>
			<span className='max-w-1 min-h-full grow rounded' style={{ backgroundColor: isOpen ? '#C5FD01' : '#284146'}}></span>
			<div>
				<button
					className='cursor-pointer'
					onClick={toggle}
					aria-expanded={isOpen}
				>
					{title}
				</button>
				{isOpen && (
					<div className=' pt-2'>
						{content}
					</div>
				)}
			</div>
		</div>
	);
}
