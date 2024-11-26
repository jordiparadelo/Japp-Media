import { FAQs, Pricing, PricingHero } from "@/components/sections"
import { FAQ } from "@/types"

const FAQs_DATA: FAQ[] = [
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

export default function PricingPage() {
    return (
        <>
            <PricingHero />
            <Pricing />
            <FAQs faqs={FAQs_DATA} />
        </>
    );
}
