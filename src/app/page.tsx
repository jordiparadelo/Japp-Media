import {
	// Imaginary,
	Hero,
	PainPoints,
	BannerWebsite,
	Solutions,
	Offers,
	UsersCases,
	Pricing
} from "@/components/pages/home";
import { getSEOConfig } from "@/data/seo";

export const metadata = getSEOConfig('home');

export default function Home() {
	return (
		<>
			<Hero />
			<PainPoints />
			<BannerWebsite />
			<Solutions />
			<Offers />
			<UsersCases />
			<Pricing />
		</>
	);
}
