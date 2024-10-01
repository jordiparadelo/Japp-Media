import {
	// Imaginary,
	Hero,
	Services,
	Benefits,
} from "@/components/pages/Home";
import { CtaBanner } from "@/components/layouts";

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
