import { Section, Container, Badge, CustomImage } from "@/components/ui";
import {prettyString } from "@/lib/utils";
import { CustomImageType } from "@/types";

type InnerSectionProps = {
  id?: string;
  className?: string;
  sectionTitle?: string;
  children: React.ReactNode;
  image?: CustomImageType;
};

const InnerSection = ({
  children,
  id,
  sectionTitle,
  image,
}: InnerSectionProps) => {
  return (
    <Section
      className="bkg-gradient overflow-clip rounded-b-3xl bg-gray-100 text-gray-900 rounded-b-section md:pb-0 md:pt-20"
      id={id ? id : sectionTitle ? prettyString(sectionTitle) : undefined}
    >
      <Container className="flex flex-col items-center gap-y-14 py-16 pb-0 text-center sm:gap-y-20">
        <div className="flex flex-col items-center gap-y-4 text-center sm:col-span-8 sm:col-start-3 sm:gap-6">
          <Badge label={sectionTitle} />
          {children}
        </div>
        {image && (
          <div className="mask-image-b h-full w-full">
            <CustomImage className="h-full w-full" {...image} />
          </div>
        )}
      </Container>
    </Section>
  );
};

export { InnerSection };
