"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { Key, useRef, useState } from "react";
import { UserCase } from "@/types";
import { CustomImage } from "@/components/ui";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function UserCasesTabs({ cases }: { cases: UserCase[] }) {
  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const tabContentRef = useRef<HTMLDivElement>(null);

  // await new Promise((resolve) => setTimeout(resolve, 1000));

  // TODO: Add scroll navigation

  const handleSelectionChange = (key: Key) => {
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
      <div className="flex w-full max-w-full flex-col items-center">
        <Tabs
          aria-label="Casos de uso"
          color="secondary"
          variant="solid"
          className="max-w-full"
          onSelectionChange={handleSelectionChange}
        >
          {cases.map((caseItem) => (
            <Tab key={caseItem?.id} title={caseItem?.id} />
          ))}
        </Tabs>
        <div className="tab-content" ref={tabContentRef}>
          {cases.map((caseItem, index) => (
            <div
              className={cn(
                "card flex w-full max-w-[996px] flex-shrink-0 flex-col overflow-hidden transition-all duration-300 sm:grid sm:grid-cols-2",
                selectedTab !== index && "scale-95 opacity-50",
              )}
              key={caseItem?.id}
            >
              <div className="flex flex-grow flex-col items-start justify-center gap-4 p-4 sm:p-6 md:gap-6 md:p-10">
                <h3 className="heading-h5 sm:heading-h4">{caseItem?.title}</h3>
                <p>{caseItem?.description}</p>
                <Link
                  href={caseItem?.link}
                  className="text-primary hover:underline"
                >
                  Explorar el Caso
                </Link>
              </div>
              <CustomImage
                src={caseItem?.image}
                alt={caseItem?.title}
                width={500}
                height={500}
                className="order-first max-h-[200px] w-full object-cover sm:order-last sm:max-h-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
  );
}

export default UserCasesTabs;