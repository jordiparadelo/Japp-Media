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

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQsProps extends SectionProps {
  title?: string;
  faqs: FAQ[];
}

const FAQs = ({ id, title = "Aclara tus dudas", faqs }: FAQsProps) => {
  return (
    <Section id={id}>
      <Container className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <Badge label="Preguntas frecuentes" />
          <h2 className="heading-h2">{title}</h2>
        </div>

        <div className="md:gap-x-auto flex flex-col gap-y-4 md:grid md:grid-cols-12 md:gap-x-4">
          <div className="p-4 md:col-span-7">
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
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
