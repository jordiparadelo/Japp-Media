import {
	// Imaginary,
	Hero,
	PainPoints,
	Offer,
	WhyUs,
	HowStart
} from "@/components/pages/home";
import { getSEOConfig } from "@/data/seo";

export const metadata = getSEOConfig('home');

export default function Home() {
	return (
		<>
			<Hero />
			{/* <Imaginary /> */}
			<PainPoints />
			<Offer />
			<WhyUs />
			<HowStart />
			{/* <CtaBanner /> */}
		</>
	);
}
