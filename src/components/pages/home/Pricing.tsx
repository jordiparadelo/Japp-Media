import { Section, Container, Badge } from "@/components/ui";
import { Button } from "@nextui-org/react";

function Pricing() {
  return (
    <Section>
      <Container className="flex flex-col gap-x-6 gap-y-10 md:grid md:grid-cols-12">
        <div className="md:card col-span-4 flex flex-col items-center justify-center gap-y-4 p-4 md:items-start md:justify-normal md:p-8 text-center md:text-left">
          <Badge label="Precios" />
          <h2 className="heading-h2 md:heading-h4">
            Con un coste accesible para tu negocio.
          </h2>
          <p>
            Atrae más clientes y construye confianza en línea con nuestros
            servicios personalizados de web y reputación.
          </p>
          <div className="pt-4">
            <Button>Obtén tu Consulta Gratis</Button>
          </div>
        </div>
        <div className="border border-base sm:col-span-8"></div>
      </Container>
    </Section>
  );
}

export default Pricing;
