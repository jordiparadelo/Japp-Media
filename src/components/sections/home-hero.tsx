import { Section, Container, CustomImage, Button } from "@/components/ui";

type HeroType = {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
};

const heroData: HeroType = {
  title: "Aumenta tu presencia en línea, construye confianza y atrae más clientes",
  subtitle:
    "Mejora tu imagen en linea, atrae más clientes y cierra más ventas mejorando tu perfil presencia online.",
  cta: "Obtén tu Consulta Gratis",
  image: "/images/hero.jpg",
};

const HomeHero = () => {
  return (
    <Section className="bkg-gradient rounded-b-3xl bg-gray-100 text-gray-900 sm:rounded-b-[60px] md:rounded-b-[120px]">
      <Container className="flex flex-col gap-10 sm:grid sm:grid-flow-row sm:grid-cols-12 mt-16 lg:gap-[5vw]">
        <div className="flex flex-col gap-4 text-center sm:col-span-12">
          <h1 className="heading-h1">{heroData.title}</h1>
          <p className="text-md sm:text-[max(1.125rem,1.125vw)] sm:leading-[1.25] max-w-[60ch] mx-auto">
            {heroData.subtitle}
          </p>
        </div>
        <div className="col-span-8 flex flex-col gap-6">
          <div className="col-span-8 grid grid-cols-8 gap-6">
            <div className="col-span-4">
              <CustomImage className="h-full w-full rounded-lg bg-gray-500 object-cover" />
            </div>
            <div className="col-span-4 flex flex-col gap-6 pt-6">
              <Button>{heroData.cta}</Button>
              <CustomImage className="h-full w-full rounded-lg bg-gray-500 object-cover" />
            </div>
          </div>
          <div className="col-span-8 grid grid-cols-8 gap-6">
            <div className="col-span-3">
              <CustomImage className="h-full w-full rounded-lg bg-gray-500 object-cover" />
            </div>
            <div className="col-span-5 flex flex-col gap-6">
              <CustomImage className="w-full rounded-lg bg-gray-500 object-cover" />
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <CustomImage className="h-full w-full rounded-lg bg-gray-500 object-cover" />
        </div>
      </Container>
    </Section>
  );
}

export { HomeHero };
