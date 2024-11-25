"use client";

import { navigateToElement, prettyString } from "@/lib/utils";
import React, {
  Children,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { useIntersectionObserver } from "usehooks-ts";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

// Define the context for section navigation
const SectionNavContext = createContext<
  | {
      activeSection: string | null;
      setActiveSection: (section: string | null) => void;
      wrapperRef: React.RefObject<HTMLDivElement>;
      isNavVisible: boolean;
      enableIntersections: boolean;
      setEnableIntersections: (enable: boolean) => void;
    }
  | undefined
>(undefined);

// Custom hook to use the SectionNavContext
const useSectionNavContext = () => {
  const context = useContext(SectionNavContext);
  if (!context)
    throw new Error(
      "useSectionNavContext must be used within a SectionNavWrapper",
    );
  return context;
};

// Wrapper component for section navigation
const SectionNavWrapper = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string | null>("precios");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [enableIntersections, setEnableIntersections] = useState(true);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Update navigation visibility based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsNavVisible(latest > 0 && latest < 1);
  });

  //   const sectionsId = wrapperRef && Array.from(wrapperRef.current?.querySelectorAll("section[id]") || []).map((el) => el.id);
  const sectionsId = Children.map(
    children,
    (child) => (child as React.ReactElement).props.id,
  );

  return (
    <div ref={wrapperRef}>
      <SectionNavContext.Provider
        value={{
          activeSection,
          setActiveSection,
          wrapperRef,
          isNavVisible,
          enableIntersections,
          setEnableIntersections,
        }}
      >
        {Children.toArray(children).map((child, index) =>
          React.isValidElement(child) ? (
            <SectionWrapper key={index} id={child.props.id}>
              {child}
            </SectionWrapper>
          ) : null,
        )}
        {sectionsId && <SectionNav sectionsId={sectionsId} />}
      </SectionNavContext.Provider>
    </div>
  );
};

// Navigation component for sections
const SectionNav = ({ sectionsId }: { sectionsId: string[] }) => {
  const {
    activeSection,
    setActiveSection,
    isNavVisible,
    setEnableIntersections,
  } = useSectionNavContext();

  const handleSelectionChange = useCallback(
    (key: string) => {
      setEnableIntersections(false);
      setActiveSection(key);
      navigateToElement(key, () => setEnableIntersections(true));
    },
    [setActiveSection, setEnableIntersections],
  );


  return (
    <motion.nav
      className="fixed bottom-0 flex w-full max-w-full items-center justify-center overflow-hidden p-4"
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
        variant="light"
        className="align-center max-w-full border backdrop-blur-sm bg-slate-50/50 rounded-lg"
        onSelectionChange={(key) => handleSelectionChange(key as string)}
        // onSelectionChangeEnd={() => setEnableIntersections(true)}
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
};

// Wrapper for each section to track intersection
const SectionWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const { enableIntersections } = useSectionNavContext();
  const { isIntersecting, ref: sectionRef } = useIntersectionObserver({
    threshold: 0.5,
  });
  const { setActiveSection } = useSectionNavContext();

  useEffect(() => {
    if (enableIntersections && isIntersecting && id) setActiveSection(id);
  }, [enableIntersections, isIntersecting, id, setActiveSection]);

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  );
};

export { SectionNavWrapper, SectionNav, SectionWrapper };
