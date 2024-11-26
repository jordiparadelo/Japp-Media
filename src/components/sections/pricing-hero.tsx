import { InnerSection, Button } from "@/components/ui";

const PricingHero = () => {
  return (
    <InnerSection sectionTitle="Precios" image={{ src: "/images/services/voice-of-costumers.webp" }}>
      <h1 className="heading-h1">Planes & Precios</h1>
      <p className="text-lg">
        Our services have helped businesses increase their customer base by up
        to 50%.
      </p>
      <Button>Planes & Precios</Button>
    </InnerSection>
  );
};

export { PricingHero };
