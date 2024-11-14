import React from "react";
import { Section, Container, Badge, CustomImage } from "@/components/ui";
import { Divider } from "@nextui-org/react";

const steps = [
  {
    id: 1,
    title: "Agenda una Consulta Gratis",
    description:
      "Comparte tus metas y desafíos con nosotros. Te daremos una idea de las estrategias que podemos utilizar para ayudarte.",
  },
  {
    id: 2,
    title: "Recibe un Plan Personalizado",
    description: "Creamos un plan de acción paso a paso adaptado a tu negocio.",
  },
  {
    id: 3,
    title: "Ve los Resultados",
    description:
      "Con nuestra experiencia y soporte continuo, comenzarás a ver mejoras en visibilidad, clientes potenciales y reputación.",
  },
];

const HowItWorks = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-x-4 gap-y-10 sm:grid sm:grid-cols-12">
        <div className="flex flex-col items-center justify-center gap-y-4 text-center sm:col-span-8 sm:col-start-3 lg:col-span-6 lg:col-start-4">
          <Badge label="Cómo funciona" />
          <h2 className="heading-h2">
            Un servicio flexible para cada negocio.
          </h2>
        </div>
        <div className="card flex flex-col sm:col-span-10 sm:col-start-2 sm:flex-row ">
          <div className="sm:-8 flex flex-col p-4 gap-y-2 ">
            <ul className="flex flex-grow flex-col gap-y-3">
              {steps.map((step, index) => (
                <li
                  key={step.id}
                  className="flex w-full flex-grow flex-row gap-x-4 self-stretch"
                >
                  <span className="flex h-full min-w-10 flex-col items-center justify-center">
                    <p
                      className="heading-h4 font-regular leading-none"
                      role="presentation"
                    >
                      {index + 1}
                    </p>{" "}
                    <hr
                      className="w-[2px] flex-grow bg-slate-100"
                      role="separator"
                    />
                  </span>
                  <div className="flex flex-grow flex-col gap-y-1 pt-1">
                    <h3 className="heading-h6">{step.title}</h3>
                    <p className="text-sm">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bkg-gradient flex flex-grow p-4 rounded-md">
              <p>Deja que te ayudemos</p>
            </div>
          </div>
          <CustomImage alt="How it works" width={500} height={500} />
        </div>
      </Container>
    </Section>
  );
};

export default HowItWorks;
