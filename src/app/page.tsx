import {
	// Imaginary,
	Hero,
	Services,
	Benefits,
} from "@/components/pages/home";
import { CtaBanner } from "@/components/sections";

export default function Home() {
	return (
		<>
			<Hero />
			{/* <Imaginary /> */}
			<Services />
			<Benefits />
			<CtaBanner />
		</>
	);
}
