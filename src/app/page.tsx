import {
	Imaginary,
	Hero,
	Services,
	WhyUs,
	Process,
	CtaBanner,
} from "@/components/sections";

export default function Home() {
	return (
		<main>
			<Hero />
			<Imaginary />
			<Services />
			<WhyUs />
			<Process />
			<CtaBanner />
		</main>
	);
}
