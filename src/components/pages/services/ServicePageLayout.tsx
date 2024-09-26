import { Hero, DoYouKnow, Features, Benefits } from "@/components/pages/services";
import { CtaBanner } from "@/components/sections";

export default function ServicesPageLayout({id}: {id: string}) {
	return (
		<>
			<Hero serviceId={id} />
			<DoYouKnow />
			<Features />
			<Benefits />
			<CtaBanner />
		</>
	);
}