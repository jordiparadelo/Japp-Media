'use client';
import { AnimatePresence } from "framer-motion";
import { PageTransition, Modal } from "@/components/ui";
import CalendlyWidget from "@/components/booking/CalendlyWidget";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
 
  return (
    <AnimatePresence
      mode="sync"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Modal 
          title="Agenda una llamada"
        >
          <CalendlyWidget url="https://calendly.com/your-calendly-url" />
        </Modal>
      </Suspense>
      <PageTransition>
        <main className="flex-grow">{children}</main>
      </PageTransition>
    </AnimatePresence>
  );
}