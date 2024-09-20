"use client";

import { AnimatePresence } from "framer-motion";
import {PageTransition} from "@/components/ui";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <PageTransition>
        <main className="flex-grow">{children}</main>
      </PageTransition>
    </AnimatePresence>
  );
}