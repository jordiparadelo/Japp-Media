import { InnerSection, Button } from "@/components/ui";

const ServiceHero = () => {
  return (
    <InnerSection sectionTitle="Servicios" image={{ src: "/images/services/voice-of-costumers.webp" }}>
      <h1 className="heading-h1">Transform Your Business with Our Services</h1>
      <p className="text-lg">
        Our services have helped businesses increase their customer base by up
        to 50%.
      </p>
      <Button>Planes & Precios</Button>
    </InnerSection>
  );
};

export { ServiceHero };
