import { Section, Container, Badge, Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { SectionProps } from "@/types";
const prices = [
  {
    title: "Plan Básico",
    price: "20€/mes",
    features: [
      "Perfil en Google optimizado",
      "Sitio Web Simple",
      "Gestión de Reseñas",
      "-",
      "-",
      "-",
    ],
  },
  {
    title: "Plan Premium",
    price: "40€/mes",
    features: [
      "Perfil en Google optimizado",
      "Sitio Web Completo",
      "Gestión de Reseñas",
      "Gestión de Calendarios",
      "-",
      "-",
    ],
  },
  {
    title: "Plan Empresarial",
    price: "80€/mes",
    features: [
      "Perfil en Google optimizado",
      "Sitio Web Completo",
      "Gestión de Reseñas",
      "Gestión de Calendarios",
      "Comunicación y Contenido",
      "Gestión de Clientes",
    ],
  },
];

function Pricing({ id }: SectionProps) {
  return (
    <Section className="md:py-20" id={id}>
      <Container className="flex flex-col gap-x-6 gap-y-14 md:grid md:grid-cols-12 md:gap-y-10">
        <div className="md:card col-span-4 flex flex-col items-center justify-center gap-y-4 p-0 text-center md:items-start md:justify-normal md:p-8 md:text-left">
          <Badge label="Precios" />
          <h2 className="heading-h2 md:heading-h3">
            Con un coste accesible para tu negocio.
          </h2>
          <p>
            Atrae más clientes y construye confianza en línea con nuestros
            servicios personalizados de web y reputación.
          </p>
          <div className="pt-4 md:w-full">
            <Button className="w-full max-w-none self-stretch">
              Obtén tu Consulta Gratis
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:col-span-8 sm:grid sm:grid-cols-3">
          {prices.map((price, index) => (
            <div className="flex flex-col rounded-lg" key={index}>
              <div className="price-header">
                <div
                  className={cn(
                    "flex flex-col items-center justify-center gap-y-2 rounded-2xl bg-background p-4 text-center aspect-video md:aspect-auto",
                    index !== 1
                      ? "bg-slate-100 sm:bg-background"
                      : "bkg-gradient",
                  )}
                >
                  <h3 className="heading-h6 font-bold">{price.title}</h3>
                  <p className="heading-h4">{price.price}</p>
                  <Button variant="secondary" size="sm">
                    Agendar una cita
                  </Button>
                </div>
              </div>
              <ul className="grid-rows-auto grid h-full divide-y divide-slate-200">
                {price.features.map((feature, index) => (
                  <li
                    key={index}
                    className={cn(
                      "flex items-center justify-center py-2 text-center text-sm leading-none",
                      index === 1 && "font-semibold",
                    )}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Pricing;
