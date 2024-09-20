"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import {
	// Imaginary,
	Hero,
	Services,
	CtaBanner,
	Benefits,
} from "@/components/sections";
import { CalendlyModal } from "@/components/ui";

export default function Home() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const isModalOpen = searchParams.get('modal') === 'open';

	const closeModal = () => {
		router.push('/', { scroll: false });
	};

	return (
		<>
			<Hero />
			{/* <Imaginary /> */}
			<Services />
			<Benefits />
			<CtaBanner />
			<CalendlyModal isOpen={isModalOpen} onClose={closeModal} />
		</>
	);
}
