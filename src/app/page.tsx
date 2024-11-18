import {
  // Imaginary,
  Hero,
  PainPoints,
  BannerWebsite,
  Solutions,
  Offers,
  UsersCases,
  Pricing,
  HowItWorks
} from "@/components/pages/home";
import { getSEOConfig } from "@/data/seo";

export const metadata = getSEOConfig("home");

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <BannerWebsite />
      <Solutions />
      <div className="bkg-gradient mx-4 rounded-3xl md:rounded-[120px] md:py-0">
        <Offers />
        <UsersCases />
      </div>
      <Pricing />
      <HowItWorks />
    </>
  );
}
