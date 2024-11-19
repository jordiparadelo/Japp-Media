import { Section, Container, Badge } from "@/components/ui";
import React from "react";
import { SectionProps } from "@/types";
import { PainPointsCard } from "@/components/ui/pain-points-ui";

const PAIN_POINTS = [
  {
    title: "Baja o nula presencia en Línea",
    description:
      " Si tu negocio no tiene una presencia en línea, no puedes esperar que los clientes te encuentren. ¿Te cuesta aparecer en Google o en mapas cuando los clientes buscan tus servicios? Una presencia en línea débil está frenando tu negocio.",
  },
  {
    title: "Reseñas Negativas o Inconsistentes",
    description:
      "Atrae más clientes y construye confianza en línea con nuestros servicios personalizados de web y reputación.",
  },
  {
    title: "Comunicación porbre con el Cliente",
    description:
      "Los clientes potenciales encuentran primero a tus competidores. No dejes que las oportunidades se pierdan.",
  },
];

function PainPoints({ id }: SectionProps) {
  return (
    <Section id={id}>
      <Container className="flex grid-cols-12 flex-col gap-6 md:grid">
        <div className="col-span-12 flex flex-col gap-5 md:col-span-4">
          <Badge label="Como ayudamos" />
          <h2 className="heading-h2">
            Haz crecer tu negocio con un Perfil Digital
          </h2>
          <p>
            Atrae más clientes y construye confianza en línea con nuestros
            servicios personalizados de web y reputación.
          </p>
          <PainPointsCard
            title={PAIN_POINTS[0].title}
            description={PAIN_POINTS[0].description}
          />
        </div>
        {PAIN_POINTS.slice(1, 3).map(({ title, description }, index) => (
          <div
            className="col-span-12 flex flex-col gap-5 md:col-span-4 md:grid md:grid-rows-3"
            key={title}
          >
            <PainPointsCard
              className={`md:row-start-${index + 2} row-span-${index + 2}`}
              title={title}
              description={description}
            />
          </div>
        ))}
      </Container>
    </Section>
  );
}

export default PainPoints;
