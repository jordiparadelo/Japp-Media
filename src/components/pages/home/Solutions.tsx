import { Section, Container, SolutionsStickyImages, SolutionsList } from "@/components/ui";

const solutions = [
  {
    id: "Diseño sitios web",
    title: "Un sitio Web profesional para alcanzar a más clientes.",
    description:
      "Alcanza a más persona con un sitio web profesional que este enfocado a captar clientes, gestionar citas y convetir mas ventas.",
    image: "/images/solutions/diseño-sitios-web.webp",
  },
  {
    id: "Gestión de Reputación",
    title: "Gestión de reputación en Perfil de Negocio de Google.",
    description:
      "Logra que las personas que te encuentren en la Búsqueda de Google y Google Maps para tu tienda física o área de servicio.",
    image: "/images/solutions/gestion-de-reputacion.webp",
  },
  {
    id: "Comunicación automatizada",
    title: "Generación de nuevos clientes y automatización de comunicación.",
    description:
      "No pierdas tiempo en la comunicación con clientes, te ayudamos a atraer y gestionar nuevos clientes sin esfuerzo.",
    image: "/images/solutions/comunicacion-automatizada.webp",
  },
];

function Solutions() {
  return (
    <Section id="soluciones">
      <Container className="md:grid md:grid-cols-12 md:gap-6">
        <div className="hidden md:col-span-6 md:block">
          <SolutionsStickyImages images={solutions} />
        </div>
        <SolutionsList solutions={solutions} />
      </Container>
    </Section>
  );
}

export default Solutions;
