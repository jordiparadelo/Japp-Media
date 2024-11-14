import {
  Section,
  Container,
  CustomImage,
  Button,
  GridSpan,
} from "@/components/ui";

type HeroType = {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
};

const heroData: HeroType = {
  title: "Haz crecer tu negocio con un Perfil Digital",
  subtitle:
    "Atrae más clientes y construye confianza en línea con nuestros servicios personalizados de web y reputación.",
  cta: "Obtén tu Consulta Gratis",
  image: "/images/hero.jpg",
};

export default function Hero() {
  return (
    <Section className="bkg-gradient rounded-b-3xl bg-gray-100 text-gray-900 sm:rounded-b-[60px] md:rounded-b-[120px]">
      <Container className="grid-flow-row gap-4 text-center" grid={true}>
        {/* <Container className="flex flex-col place-items-center align-items-center text-center gap-4" grid={true}> */}
        <GridSpan className="col-start-2 col-end-12">
          <h1 className="heading-h1">
            Haz crecer tu negocio con un Perfil Digital
          </h1>
        </GridSpan>
        <GridSpan className="col-span-full md:col-span-8 sm:col-start-2">
          <p className="text-lg">
            Atrae más clientes y construye confianza en línea con nuestros
            servicios personalizados de web y reputación.
          </p>
        </GridSpan>
        <GridSpan className="grid grid-cols-12 gap-6 pt-6">
          <div className="col-span-8 flex flex-col gap-6">
            <div className="col-span-8 grid grid-cols-8 gap-6">
              <div className="col-span-4">
                <CustomImage className="h-full w-full rounded-lg bg-gray-500 object-cover" />
              </div>
              <div className="col-span-4 flex flex-col gap-6 pt-6">
                <Button>Obtén tu Consulta Gratis</Button>
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
        </GridSpan>
      </Container>
    </Section>
  );
}
