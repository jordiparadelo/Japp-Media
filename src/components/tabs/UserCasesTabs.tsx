"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { Key, Suspense, useEffect, useRef, useState } from "react";
import { UserCase } from "@/types";
import { CustomImage } from "../ui";
import { cn } from "@/libs/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";

function UserCasesTabs({ cases }: { cases: UserCase[] }) {
  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const tabContentRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: tabContentRef,
  });

  useMotionValueEvent(scrollXProgress, "change", (progress) => {
    const casesLength = cases.length;
    // const scrollActivePosition = latest * casesLength;
    console.log({ progress });
  });

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
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex w-full max-w-full flex-col items-center">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="bordered"
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
                className="order-first max-h-[200px] w-full object-cover sm:order-last sm:h-auto sm:h-full sm:max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}

export default UserCasesTabs;
