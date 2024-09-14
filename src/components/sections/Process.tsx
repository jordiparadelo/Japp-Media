import React from "react";
import { FEATURES } from "../../data";
import { Accordion, AccordionItem } from "../ui/Accordion";
import Image, { StaticImageData } from "next/image";

function Process() {
  return (
    <section className="py-11 px-5 md:px-16 md:py-20">
      <div className="container mx-auto flex max-w-screen-md flex-col gap-20">
        {FEATURES.map((service) => (
          <ProcessBlock key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Process;

type ProcessBlockProps = {
  title: string;
  description: string;
  details?: Array<{ title: string; description: string }>;
  image?: string | StaticImageData;
};

function ProcessBlock({
  title,
  description,
  details,
  image,
}: ProcessBlockProps) {
  return (
    <div className="group flex flex-col gap-10 md:grid md:grid-cols-2 md:flex-wrap">
      {image && (
        <Image
          src={image}
          alt="process"
          width={500}
          height={500}
          className="object-contain md:group-odd:order-1"
        />
      )}
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
        <Accordion>
          {details?.map((detail) => (
            <AccordionItem
              key={detail.title}
              title={detail.title}
              content={detail.description}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
}
