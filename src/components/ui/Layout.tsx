"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "@/components/ui";
import CalendlyWidget from "@/components/booking/CalendlyWidget";
import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { anim } from "@/libs/utils";

const perspectiveVariants = {
	initial: {
		scale: 1,
		y: 150,
		opacity: 0,
	},

	enter: {
		scale: 1,
		y: 0,
		opacity: 1,
	},

	exit: {
		scale: 0.9,
		y: -150,
		opacity: 0,
	},
};

const transition = {
	ease: [0.76, 0, 0.24, 1],
	duration: 0.5,
};

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Modal title='Agenda una llamada'>
					<CalendlyWidget url='https://calendly.com/your-calendly-url' />
				</Modal>
			</Suspense>

			{/* TODO: Fix animation Enter & Leave */}
				<AnimatePresence
					mode='wait'
					initial={false}
					onExitComplete={() => 
						window.scrollTo(0, 0)
					}
				>
					<motion.main
						className='flex-grow transform-origin-top'
						{...anim(perspectiveVariants)}
						transition={transition}
						key={pathname}
					>
						{children}
					</motion.main>
				</AnimatePresence>
		</>
	);
}