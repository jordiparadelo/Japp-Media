"use client";
import { cn } from "../../libs/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, createContext, useContext, Children } from "react";

const AccordionContext = createContext<{
  toggle: (i: number) => void;
  selected: number | null;
} | null>(null);

type AccordionItemProps = {
  title?: string;
  content?: string;
  index?: number;
};

export function Accordion({ children }: { children: React.ReactNode[] | React.ReactNode }) {
  const [selected, setSelected] = useState<number | null>(0);

  const toggle = (i: number) => {
    if (i === selected) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
	<AccordionContext.Provider value={{ toggle, selected }}>
	  <AnimatePresence>
		<div className="flex flex-col gap-2">
		  {Children.map(children, (child, index) => {
			if (React.isValidElement(child)) {
			  return (
				<React.Fragment key={index}>
				  {React.cloneElement(child, { index } as AccordionItemProps)}
				</React.Fragment>
			  );
			} else {
			  return <React.Fragment key={index}>{child}</React.Fragment>;
			}
		  })}
		</div>
	  </AnimatePresence>
	</AccordionContext.Provider>
  );
}

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (context === null) {
    throw new Error("useAccordion must be used within a AccordionProvider");
  }
  return context;
};

export function AccordionItem({
  index = 0,
  title,
  content,
}: AccordionItemProps) {
  const { toggle, selected } = useAccordion();
  const isOpen = index === selected;

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <div
      className="flex flex-row place-items-stretch gap-3"
      aria-selected={isOpen}
      onClick={() => toggle(index)}
    >
      <div
        className={cn(
          `flex min-w-1 flex-grow rounded-full ${isOpen ? "bg-green-500" : "bg-gray-500/50"}`,
        )}
      ></div>
      <div className="flex flex-col place-items-start">
        <button className={cn(`text-xl font-semibold text-left ${isOpen ? "opacity-100" : "opacity-50"}`)}>{title}</button>
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
          className="color-gray-500 overflow-hidden text-sm pt-2 text-left"
          variants={variants}
        >
          {content}
        </motion.div>
      </div>
    </div>
  );
}
