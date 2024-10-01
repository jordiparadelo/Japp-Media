"use client";

import { Modal, AnimatedLayout } from "@/components/ui";
import { Suspense } from "react";
import { CalcomWidget } from "@/components/ui";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Modal title='Agenda una llamada'>
					<CalcomWidget />
				</Modal>
			</Suspense>

				<AnimatedLayout>{children}</AnimatedLayout>
			{/* <Suspense>
			</Suspense> */}
		</>
	);
}
