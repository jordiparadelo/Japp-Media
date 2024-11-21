import {
  // Imaginary,
  Hero,
  PainPoints,
  BannerWebsite,
  Solutions,
  Offers,
  UsersCases,
  Pricing,
  HowItWorks,
  FAQs,
} from "@/components/pages/home";
import { SectionNavWrapper } from "@/components/ui";
import { getSEOConfig } from "@/data/seo";

export const metadata = getSEOConfig("home");

export default function Home() {
  return (
    <>
      <Hero />
      <SectionNavWrapper>
        <PainPoints id="como-ayudamos" />
        <BannerWebsite />
        <Solutions id="soluciones" />
        <div
          className="bkg-gradient mx-4 rounded-3xl md:rounded-[120px] md:py-0"
          id="nuestros-servicios"
        >
          <Offers id="servicios" />
          <UsersCases id="casos-de-uso" />
        </div>
        <Pricing id="precios" />
        <HowItWorks id="como-funciona" />
      </SectionNavWrapper>
      <FAQs id="preguntas-frecuentes" />
    </>
  );
}
