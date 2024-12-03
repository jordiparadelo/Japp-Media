import { Section, Container, Badge } from "@/components/ui";
import React from "react";
import { SectionProps } from "@/types";
import { PainPointsList } from "@/components/layouts";
import ReputationLottie from "@/assets/lotties/reputation.json";

const PAIN_POINTS = [
  {
    title: "Reseñas Negativas o Inconsistentes",
    description:
      "Aumenta tu reputación en línea y destaca en las búsquedas de Google.",
    icon: ReputationLottie,
  },
  {
    title: "Comunicación pobre con el Cliente",
    description:
      "Responde de manera rápida y automática a las consultas de tus clientes.",
    icon: ReputationLottie,
  },
  {
    title: "Baja o nula presencia en Línea",
    description:
      "Aumenta tu visibilidad en línea y llega a más clientes potenciales.",
    icon: ReputationLottie,
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

        <PainPointsList
          painPoints={PAIN_POINTS}
          className="col-span-12"
        />
      </Container>
    </Section>
  );
}

export { PainPoints };
