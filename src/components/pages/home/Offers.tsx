import { Section, Container, Badge, CustomImage } from "@/components/ui";

const offers = [
  {
    id: "1",
    title: "Implementación rápida y eficaz",
    description: "Optimiza tu perfil en pocos días.",
    image: "/images/default.svg",
  },
  {
    id: "2",
    title: "Automatización total de tareas",
    description: "Menos esfuerzo, más resultados.",
    image: "/images/default.svg",
  },
  {
    id: "3",
    title: "Calidad profesional garantizada",
    description: "Diseño web con años de experiencia.",
    image: "/images/default.svg",
  },
  {
    id: "4",
    title: "Más tiempo para tu negocio",
    description: "Enfoque global del area digital.",
    image: "/images/default.svg",
  },
  {
    id: "5",
    title: "Enfoque en captación de clientes",
    description: "Optimizado para alcanzar clientes.",
    image: "/images/default.svg",
  },
  {
    id: "6",
    title: "Resultados medibles y escalables",
    description: "Medimos para mejorar.",
    image: "/images/default.svg",
  },
];

function Offers() {
  return (
    <Section>
      <Container className="flex flex-col gap-x-4 gap-y-10 sm:grid sm:grid-cols-12">
        <div className="flex flex-col items-center justify-center sm:col-span-8 sm:col-start-3 lg:col-span-6 lg:col-start-4">
          <Badge label="Ofertas" />
          <h2 className="heading-h2 text-center">
            Servicios enfocados en optimizar tu oferta
          </h2>
        </div>

        <div className="offer-grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <div className="card p-1">
                <CustomImage
                  src={offer.image}
                  alt={offer.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="heading-3">{offer.title}</h3>
              <p className="text-center">{offer.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Offers;
