import { CtaBanner } from "@/components/layouts";
import {
	// Imaginary,
	Hero,
	PainPoints,
	Offer,
	WhyUs,
	HowStart,
	Testimonials,
} from "@/components/pages/home";
import { getSEOConfig } from "@/data/seo";

export const metadata = getSEOConfig("home");

export default function Home() {
	return (
		<>
			<Hero />
			{/* <Imaginary /> */}
			<PainPoints />
			<Offer />
			<WhyUs />
			<HowStart />
			<Testimonials />
			<CtaBanner />
		</>
	);
}
