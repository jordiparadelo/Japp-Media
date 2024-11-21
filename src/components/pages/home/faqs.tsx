import {
  Badge,
  Container,
  Section,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button,
} from "@/components/ui";
import { SectionProps } from "@/types";

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

const FAQs = ({ id }: SectionProps) => {
  return (
    <Section id={id}>
      <Container className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <Badge label="Preguntas frecuentes" />
          <h2 className="heading-h2">Aclara tus dudas</h2>
        </div>

        <div className="md:gap-x-auto flex flex-col gap-y-4 md:grid md:grid-cols-12 md:gap-x-4">
          <div className="p-4 md:col-span-7">
            <Accordion type="single" collapsible>
              {FAQs_DATA.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-lg font-bold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="sticky top-0 flex h-fit flex-col gap-y-4 rounded-2xl bkg-gradient px-6 pb-6 pt-8 text-center md:col-span-4 md:col-start-9">
            <h3 className="heading-h6 font-semibold">
              Obtiene una consulta gratuita
            </h3>
            <p className="text-sm">
              Si aun tienes más dudas puedes consultarnos.
            </p>
            <div className="pt-2">
              <Button variant="secondary" className="w-full">
                Impulsa tu negocio
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { FAQs };
