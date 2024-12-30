import { Section, Container, CustomImage, Button } from "@/components/ui";

type HeroType = {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
};

const heroData: HeroType = {
  title: "Aumenta tu presencia en línea",
  subtitle:
    "Mejora tu imagen en linea, atrae más clientes y cierra más ventas.",
  cta: "Obtén tu Consulta Gratis",
  image: "/images/hero-image.webp",
};

const HomeHero = () => {
  return (
    <Section className="bkg-gradient rounded-b-3xl text-gray-900 rounded-b-section lg:py-[10vw]">
      <Container className="flex flex-col gap-10 py-0 sm:flex-row sm:items-center lg:gap-[5vw] lg:px-20">
        <div className="col flex-grow basis-[280px] flex-col gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-2 pr-4 py-2 text-sm font-bold text-foreground">
            🔥 Atrae más clientes
          </span>
          <h1 className="heading-h1">{heroData.title}</h1>
          <div className="wysiwyg mr-2 mt-3 lg:mr-0 xl:mt-6 xl:w-4/6">
            <p className="text-md mx-auto max-w-[60ch] sm:text-[max(1.125rem,1.125vw)] sm:leading-[1.25]">
              {heroData.subtitle}
            </p>
            <div className="pt-8">
              <Button>{heroData.cta}</Button>
            </div>
          </div>
        </div>
        <div className="flex min-h-full flex-grow basis-[280px] flex-col items-center justify-center self-stretch">
          <CustomImage
            src={heroData.image}
            alt={heroData.title}
            width={600}
            height={600}
          />
        </div>
      </Container>
    </Section>
  );
};

export { HomeHero };
