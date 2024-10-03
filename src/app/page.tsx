import {
	// Imaginary,
	Hero,
	PainPoints,
	Benefits,
} from "@/components/pages/home";
import { CtaBanner } from "@/components/layouts";
import { getSEOConfig } from "@/data/seo";

export const metadata = getSEOConfig('home');

export default function Home() {
	return (
		<>
			<Hero />
			{/* <Imaginary /> */}
			<PainPoints />
			<Benefits />
			<CtaBanner />
		</>
	);
}
