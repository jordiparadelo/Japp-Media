import {
  // Imaginary,
  HomeHero,
  PainPoints,
  BannerWebsite,
  Solutions,
  Offers,
  UsersCases,
  Pricing,
  HowItWorks,
  FAQs
} from "@/components/sections";
import { SectionNavWrapper } from "@/components/ui";
import { getSEOConfig } from "@/data/seo";

export const metadata = getSEOConfig("home");

const FAQs_DATA = [
  {
    id: "1",
    question: "¿Cuánto tiempo tarda en ver resultados?",
    answer:
      "La mayoría de los clientes ven mejoras notables en unas pocas semanas, aunque los cambios más significativos suelen llevar unos meses.",
  },
  {
    id: "2",
    question: "¿Qué incluye la optimización del Perfil de Negocio en Google?",
    answer:
      "La plataforma es muy fácil de usar. Simplemente ingresa tus datos y sigue las instrucciones.",
  },
  {
    id: "3",
    question: "¿Pueden mejorar mi sitio web aunque ya esté en línea?",
    answer:
      "Sí, si ya tienes un sitio web, podemos integrarlo a nuestros servicios, optimizándolo y gestionando el perfil digital sin necesidad de crear uno nuevo.",
  },
  {
    id: "4",
    question: "¿Es necesario un contrato a largo plazo?",
    answer:
      "La plataforma es muy fácil de usar. Simplemente ingresa tus datos y sigue las instrucciones.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
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
      <FAQs id="preguntas-frecuentes" faqs={FAQs_DATA} />
    </>
  );
}
