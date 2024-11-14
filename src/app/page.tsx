import {
	// Imaginary,
	Hero
} from "@/components/pages/home";
import { getSEOConfig } from "@/data/seo";

export const metadata = getSEOConfig('home');

export default function Home() {
	return (
		<>
			<Hero />
		</>
	);
}
