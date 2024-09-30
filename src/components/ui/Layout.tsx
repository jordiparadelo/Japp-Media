"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "@/components/ui";
import CalendlyWidget from "@/components/booking/CalendlyWidget";
import { Suspense, useContext, useRef } from "react";
import { usePathname } from "next/navigation";
import { anim } from "@/libs/utils";
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// Define animation variants for page transitions
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

// Define transition properties for smooth animations
const transition = {
	ease: [0.76, 0, 0.24, 1],
	duration: 0.5,
};

// FrozenRouter component to prevent premature rendering of new content
function FrozenRouter({ children }: { children: React.ReactNode }) {
	const context = useContext(LayoutRouterContext ?? {});
	const frozen = useRef(context).current;

	if (!frozen) {
		return <>{children}</>;
	}

	return (
		<LayoutRouterContext.Provider value={frozen}>
			{children}
		</LayoutRouterContext.Provider>
	);
}

// Main Layout component
export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Modal title='Agenda una llamada'>
					<CalendlyWidget url='https://calendly.com/your-calendly-url' />
				</Modal>
			</Suspense>

			<AnimatePresence
				mode='wait'
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<motion.main
					className='flex-grow transform-origin-top'
					{...anim(perspectiveVariants)}
					transition={transition}
					key={pathname}
				>
					{/* FrozenRouter to manage content rendering */}
					<FrozenRouter>{children}</FrozenRouter>
				</motion.main>
			</AnimatePresence>
		</>
	);
}