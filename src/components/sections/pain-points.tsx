import { Section, Container, Badge, Button } from "@/components/ui";
import React from "react";
import { SectionProps } from "@/types";
import { Step, StepsList } from "@/components/layouts";

const PAIN_POINTS = [
  {
    title: "Reseñas Negativas o Inconsistentes",
    description:
      "Aumenta tu reputación en línea y destaca en las búsquedas de Google.",
  },
  {
    title: "Comunicación pobre con el Cliente",
    description:
      "Responde de manera rápida y automática a las consultas de tus clientes.",
  },
  {
    title: "Baja o nula presencia en Línea",
    description:
      "Aumenta tu visibilidad en línea y llega a más clientes potenciales.",
  },
];

function PainPoints({ id }: SectionProps) {
  return (
    <Section id={id}>
      <Container className="flex grid-cols-12 flex-col gap-12 md:grid">
        <div className="col-span-12 flex flex-col items-center justify-center gap-y-6 text-center sm:col-span-8 sm:col-start-3 lg:col-span-6 lg:col-start-4">
          <Badge label="Como ayudamos" />
          <h2 className="heading-h2">
            Impulsa tu negocio en línea sin esfuerzo
          </h2>
          <p className="text-md lg:text-lg">
            Gestionamos tu imagen en línea, comunicación y reputación para que
            tu solo tengas que encargarte de tus clientes.
          </p>
        </div>

        <StepsList steps={PAIN_POINTS} className="col-span-12">
          {PAIN_POINTS.map((painPoint, index) => (
            <Step key={index} index={index}>
              <h3 className="heading-h3 md:heading-h5">{painPoint.title}</h3>
              <p className="body-p1">{painPoint.description}</p>
              <div className="pt-6">
                <Button variant="link">Learn more</Button>
              </div>
            </Step>
          ))}
        </StepsList>

        {/* <PainPointsList
          painPoints={PAIN_POINTS}
          className="col-span-12"
        /> */}
      </Container>
    </Section>
  );
}

export { PainPoints };
