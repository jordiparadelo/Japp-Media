"use client";

import { Hero, DoYouKnow, Features, Benefits } from "@/components/pages/Services";
import { CtaBanner } from "@/components/layouts";
// import { useRouter } from "next/navigation";
import { SERVICES } from "@/data";
import { ServiceCardType } from "@/types";

export default function ServicesPageLayout({id}: {id: string}) {
	// const router = useRouter();
	const serviceNotFound = SERVICES.some((service: ServiceCardType) => 
		service.service.toLowerCase().replace(/\s+/g, '-') === id
	);
	console.log({serviceNotFound});
	// if (serviceNotFound) {
	// 	router.push("/404");
	// }

	return (
		<>
			<Hero serviceId={id} />
			<DoYouKnow serviceId={id} />
			<Features serviceId={id} />
			<Benefits serviceId={id} />
			<CtaBanner />
		</>
	);
}