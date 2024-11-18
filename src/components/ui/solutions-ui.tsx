import React from "react";
import { SolutionType } from "@/types";
import { CustomImage, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

function SolutionCard({ solution }: { solution: SolutionType }) {
  return (
    <div className="flex flex-col gap-4 md:min-h-[50vh] md:justify-center md:py-10">
      <Badge label={solution.id as string} />
      <div className="aspect-[16/9] max-h-[350px] w-full md:hidden">
        <CustomImage
          src={solution.image}
          alt={solution.title}
          width={500}
          height={500}
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
      <h3 className="heading-h4">{solution.title}</h3>
      <p>{solution.description}</p>
    </div>
  );
}

function SolutionsList({ solutions }: { solutions: SolutionType[] }) {
  return (
    <div
      className={cn(
        `flex flex-col gap-14 md:col-span-5 md:col-start-8 md:grid md:place-items-center md:justify-items-center md:gap-0`,
        `md:grid-rows-[${solutions.length}]`,
      )}
    >
      {solutions.map((solution) => (
        <SolutionCard key={solution.id} solution={solution} />
      ))}
    </div>
  );
}

// TODO: Solve stack images cards

function SolutionsStickyImages({ images }: { images: SolutionType[] }) {
  return (
      <figure className="grid h-full grid-rows-3">
        {images.map((image) => (
          <div
            className="sticky top-10 flex w-full flex-shrink-0 justify-stretch self-stretch overflow-hidden rounded-2xl"
            key={image.id}
          >
            <CustomImage
              src={image.image}
              alt={image.title}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </figure>
  );
}

export { SolutionCard, SolutionsList, SolutionsStickyImages };
