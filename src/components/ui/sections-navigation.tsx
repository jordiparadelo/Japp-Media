"use client";

import { navigateToElement, prettyString } from "@/lib/utils";
import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { useIntersectionObserver } from "usehooks-ts";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

type SectionsNavigationProps = {
  children: React.ReactNode;
};

const SectionNavContext = createContext<
  | {
      activeSection: string | null;
      setActiveSection: (section: string | null) => void;
      wrapperRef: React.RefObject<HTMLDivElement>;
      isNavVisible: boolean;
    }
  | undefined
>(undefined);

const useSectionNavContext = () => {
  const context = useContext(SectionNavContext);
  if (context === undefined) {
    throw new Error(
      "useSectionNavContext must be used within a SectionNavWrapper",
    );
  }
  return context;
};

const SectionNavWrapper = ({ children }: SectionsNavigationProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= 0 || latest === 1) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
  });

  const sectionsId = Children.map(children, (child) => {
    const el = child as React.ReactElement;
    return el.props.id;
  });

  return (
    <div ref={wrapperRef}>
      <SectionNavContext.Provider
        value={{ activeSection, setActiveSection, wrapperRef, isNavVisible }}
      >
        {Children.toArray(children).map((child) => {
          if (React.isValidElement(child)) {
            return (
              <SectionWrapper
                key={child.props.id as string}
                id={child.props.id as string}
              >
                {child}
              </SectionWrapper>
            );
          }
          return null;
        })}
        {sectionsId && <SectionNav sectionsId={sectionsId} />}
      </SectionNavContext.Provider>
    </div>
  );
};

function SectionNav({ sectionsId }: { sectionsId: string[] }) {
  const { activeSection, setActiveSection, isNavVisible } =
    useSectionNavContext();

  const handleSelectionChange = (key: string) => {
    setActiveSection(key);
    navigateToElement(key);
  };

  return (
    <motion.nav
      className="sticky bottom-0 flex w-full max-w-full items-center justify-center overflow-hidden p-4"
      variants={{
        hidden: { opacity: 0, y: "100%" },
        visible: { opacity: 1, y: 0 },
      }}
      animate={isNavVisible ? "visible" : "hidden"}
      initial="hidden"
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <Tabs
        aria-label="Secciones"
        color="secondary"
        selectedKey={activeSection}
        variant="solid"
        className="align-center max-w-full"
        onSelectionChange={(key) => handleSelectionChange(key as string)}
      >
        {sectionsId.map((id) => (
          <Tab
            key={id}
            title={prettyString(id)}
            className="min-h-[48px] text-sm"
          />
        ))}
      </Tabs>
    </motion.nav>
  );
}

function SectionWrapper({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const { isIntersecting, ref: sectionRef } = useIntersectionObserver({
    threshold: 0.5,
  });
  const { setActiveSection } = useSectionNavContext();

  useEffect(() => {
    if (isIntersecting) {
      setActiveSection(id);
    }
  }, [isIntersecting, id, setActiveSection]);

  return <div ref={sectionRef}>{children}</div>;
}

export { SectionNavWrapper, SectionNav, SectionWrapper };
