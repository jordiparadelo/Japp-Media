
import { Section, Container, Badge } from "@/components/ui";
import { SectionProps } from "@/types";
import { Step, StepsList } from "@/components/layouts";
import { WorkStep } from "@/types";
const steps: WorkStep[] = [
  {
    title: "Agenda una Consulta Gratis",
    description:
      "Comparte tus metas y desafíos con nosotros. Te daremos una idea de las estrategias que podemos utilizar para ayudarte.",
  },
  {
    title: "Recibe un Plan Personalizado",
    description: "Creamos un plan de acción paso a paso adaptado a tu negocio.",
  },
  {
    title: "Ve los Resultados",
    description:
      "Con nuestra experiencia y soporte continuo, comenzarás a ver mejoras en visibilidad, clientes potenciales y reputación.",
  },
];

const HowItWorks = ({ id }: SectionProps) => {
  return (
    <Section id={id}>
      <Container>
        <div className="flex flex-col gap-x-4 gap-y-10 rounded-section bg-secondary px-6 pb-12 pt-14 text-background sm:grid sm:grid-cols-12">
          <div className="flex flex-col items-center justify-center gap-y-4 text-center sm:col-span-8 sm:col-start-3">
            <Badge label="Cómo funciona" />
            <h2 className="heading-h2">
              Un servicio flexible para cada negocio.
            </h2>
          </div>
          <StepsList steps={steps} className="col-span-12">
            {steps.map((step, index) => (
              <Step key={index} index={index}>
                <h3 className="heading-h3 md:heading-h5">{step.title}</h3>
                <p className="body-p1">{step.description}</p>
              </Step>
            ))}
          </StepsList>
        </div>
      </Container>
    </Section>
  );
};

export { HowItWorks };
