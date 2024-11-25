import { getSEOConfig } from "@/seo.config";
import { ServiceHero, ServiceNumbers, ServicesSection, ServicesPricing, WhatToExpect, FAQs, Solutions } from "@/components/sections";

export const metadata = getSEOConfig("services");

const servicesFAQs = [
  {
    id: "1",
    question: "How can our services help your business?",
    answer: "Our services are designed to increase your online visibility and customer engagement.",
  },
  {
    id: "2",
    question: "What is the expected ROI?",
    answer: "Most clients see a significant return on investment within the first few months.",
  },
  // Add more FAQs as needed
];

export default function ServicesPage() {
    return (
        <>
            <ServiceHero />
            <ServiceNumbers />
            <Solutions id="soluciones" />
            <ServicesSection />
            <ServicesPricing />
            <WhatToExpect />
            <FAQs id="faqs" faqs={servicesFAQs} />
        </>
    );
}
