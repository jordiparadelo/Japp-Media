"use client";

import { Section, Container, SolutionsList, Badge } from "@/components/ui";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionProps } from "@/types";
import {  useRef } from "react";

const solutions = [
  {
    id: "Diseño sitios web",
    title: "Sitio Web Especializado.",
    description:
      "Alcanza a más persona con un sitio web profesional que este enfocado a captar clientes, gestionar citas y convetir mas ventas.",
    image: "/images/features-1.webp",
  },
  {
    id: "Gestión de Reputación",
    title: "Gestión de Reputación.",
    description:
      "Logra que las personas que te encuentren en la Búsqueda de Google y Google Maps para tu tienda física o área de servicio.",
    image: "/images/features-1.webp",
  },
  {
    id: "Comunicación automatizada",
    title: "Automatización de Comunicación.",
    description:
      "No pierdas tiempo en la comunicación con clientes, te ayudamos a atraer y gestionar nuevos clientes sin esfuerzo.",
    image: "/images/features-1.webp",
  },
];

function Solutions({ id }: SectionProps) {
  const headingRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "end start"],
  });

  const styleProps = {
    opacity: useTransform(scrollYProgress, [0.5, 1], [1, 0]),
    scale: useTransform(scrollYProgress, [0.5, 1], [1, 0.5]),
    y: useTransform(scrollYProgress, [0.5, 1], [0, 500]),
  };

  return (
    <Section id={id}>
      <Container className="md:grid md:grid-cols-12 md:gap-6">
        <motion.div
          // className=" col-span-12 flex flex-col items-center justify-center gap-y-6 text-center sm:col-span-8 sm:col-start-3"
          className="col-span-12 flex flex-col items-center justify-center gap-y-6 text-center sm:col-span-8 sm:col-start-3"
          style={styleProps}
          ref={headingRef}
        >
          <Badge label="Soluciones" />
          <h2 className="heading-h2">Una solución completa para tu negocio.</h2>
          <p className="text-md lg:text-lg">
            Servicios dirigidos a optimizar tu negocio en línea, contactar
            clientes y generar más ventas.
          </p>
        </motion.div>
        <SolutionsList solutions={solutions} />
      </Container>
    </Section>
  );
}

export { Solutions };
