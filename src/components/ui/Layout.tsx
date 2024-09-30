"use client";

import { Suspense } from "react";
import { Modal, AnimatedLayout } from "@/components/ui";
import CalendlyWidget from "@/components/booking/CalendlyWidget";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Modal title='Agenda una llamada'>
					<CalendlyWidget url='https://calendly.com/your-calendly-url' />
				</Modal>
			</Suspense>

			<Suspense>
				<AnimatedLayout>{children}</AnimatedLayout>
			</Suspense>
		</>
	);
}
