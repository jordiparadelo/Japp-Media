"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { UserCase } from "@/types";
import { CustomImage } from "@/components/ui";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useIntersectionObserver } from "usehooks-ts";

// Create a context for managing the selected tab
const TabContext = createContext<{ selectedTab: number | null; setSelectedTab: (index: number | null) => void } | undefined>(undefined);

export function UserCasesTabs({ cases }: { cases: UserCase[] }) {
  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const tabContentRef = useRef<HTMLDivElement>(null);

  const handleSelectionChange = (key: string) => {
    const tabIndexActive = cases.findIndex((caseItem) => caseItem?.id === key);
    setSelectedTab(tabIndexActive);
    scrollToTab(tabIndexActive);
  };

  function scrollToTab(index: number) {
    const activeTab = tabContentRef.current?.children[index] as HTMLElement;
    const scrollLeft = activeTab?.scrollLeft + activeTab.clientWidth * index;

    tabContentRef.current?.scroll({
      left: scrollLeft,
    });
  }

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      <div className="flex w-full max-w-full flex-col items-center">
        <Tabs
          aria-label="Casos de uso"
          color="secondary"
          variant="solid"
          className="max-w-full"
          selectedKey={cases[selectedTab || 0]?.id}
          onSelectionChange={(key) => handleSelectionChange(key as string)}
        >
          {cases.map((caseItem) => (
            <Tab key={caseItem?.id} title={caseItem?.id} />
          ))}
        </Tabs>
        <div className="tab-content" ref={tabContentRef}>
          {cases.map((caseItem, index) => (
            <CaseSlide
              key={caseItem?.id}
              caseItem={caseItem}
              index={index}
            />
          ))}
        </div>
      </div>
    </TabContext.Provider>
  );
}

export default UserCasesTabs;

function CaseSlide({ caseItem, index }: { caseItem: UserCase; index: number }) {
  const { selectedTab, setSelectedTab } = useContext(TabContext)!;
  const { isIntersecting, ref } = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    if (isIntersecting) {
      setSelectedTab(index);
    }
  }, [isIntersecting, index, setSelectedTab]);

  return (
    <div
      className={cn(
        "card flex w-full max-w-[996px] flex-shrink-0 flex-col overflow-hidden transition-all duration-300 sm:grid sm:grid-cols-2",
        isIntersecting || selectedTab !== index && "scale-95 opacity-50",
      )}
      ref={ref}
    >
      <div className="flex flex-grow flex-col items-start justify-center gap-4 p-4 sm:p-6 md:gap-6 md:p-10">
        <h3 className="heading-h5 sm:heading-h4">{caseItem?.title}</h3>
        <p>{caseItem?.description}</p>
        <Link
          href={caseItem?.link}
          className="text-primary-foreground hover:underline"
        >
          Explorar el Caso
        </Link>
      </div>
      <CustomImage
        src={caseItem?.image}
        alt={caseItem?.title}
        width={500}
        height={500}
        className="order-first h-full max-h-[200px] w-full object-cover sm:order-last sm:max-h-full"
      />
    </div>
  );
}
