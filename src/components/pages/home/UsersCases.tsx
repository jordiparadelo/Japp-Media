import { Section, Container, Badge } from "@/components/ui";
import UserCasesTabs from "@/components/tabs/UserCasesTabs";
import { UserCase } from "@/types";



const usersCases: UserCase[] = [
  {
    id: "Restauración",
    title: "Mejora tu reputación y atrae más comensales",
    description:
      "Gestionamos tus reseñas y optimizamos tu perfil en Google para que cada cliente satisfecho contribuya a la buena reputación de tu negocio. Destaca frente a la competencia y atrae a más clientes con una excelente imagen online.",
    link: "/casos-de-uso/restauracion.webp",
    image: "/images/users-cases/restauracion.webp",
  },
  {
    id: "Salud y Bienestar",
    title: "Simplifica la agenda de citas",
    description:
      "Permite que tus clientes agenden citas de manera rápida y sencilla. Nos encargamos de implementar un sistema de gestión de citas que asegura una experiencia fluida, evitando pérdidas de tiempo y optimizando tu atención.",
    link: "/casos-de-uso/salud-y-bienestar",
    image: "/images/users-cases/salud-y-bienestar.webp",
  },
  {
    id: "Servicios a Domicilio",
    title: "Comunicación rápida y eficaz",
    description:
      "Gestiona todas tus comunicaciones en un solo lugar, permitiendo una respuesta ágil a las solicitudes de tus clientes. Con nuestro servicio, tus clientes podrán contactarte fácilmente, generando confianza y fidelidad hacia tu negocio.",
    link: "/casos-de-uso/servicios-a-domicilio",
    image: "/images/users-cases/servicio-a-domicilio.webp",
  },
  {
    id: "Comercio",
    title: "Eleva la experiencia del cliente en cada visita",
    description:
      "Mejora la comunicación y brinda información clara sobre tus productos o servicios. Nuestro enfoque está en facilitar la experiencia de compra, desde la información inicial hasta el seguimiento, haciendo que cada cliente se sienta atendido.",
    link: "/casos-de-uso/comercio",
    image: "/images/users-cases/comercio.webp",
  },
  {
    id: "Nuevo Negocio",
    title: "Gana visibilidad desde el primer día",
    description:
      "Nos enfocamos en maximizar tu presencia digital para que tu negocio destaque desde el inicio. Creamos y optimizamos tu perfil en Google y redes sociales, generando tráfico y visibilidad para captar tus primeros clientes.",
    link: "/casos-de-uso/nuevo-negocio",
    image: "/images/users-cases/nuevo-negocio.webp",
  },
];

const UsersCases = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-x-4 gap-y-10 sm:grid sm:grid-cols-12">
        <div className="flex flex-col items-center justify-center gap-y-4 text-center sm:col-span-8 sm:col-start-3 lg:col-span-6 lg:col-start-4">
          <Badge label="Casos de uso" />
          <h2 className="heading-h2">
            Un servicio flexible para cada tipo de negocio.
          </h2>
        </div>
        <div className="col-span-12">
          <UserCasesTabs cases={usersCases} />
        </div>
      </Container>
    </Section>
  );
};

export default UsersCases;
