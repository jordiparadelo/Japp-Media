'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { AnimatePresence } from "framer-motion";
import { PageTransition, Modal } from "@/components/ui";
import CalendlyWidget from "@/components/booking/CalendlyWidget";
import { useState, useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(searchParams.get('modal') === 'open');
  }, [searchParams]);

  const closeModal = () => {
    const currentPath = window.location.pathname;
    const newUrl = new URL(currentPath, window.location.origin);
    searchParams.forEach((value, key) => {
      if (key !== 'modal') {
        newUrl.searchParams.append(key, value);
      }
    });
    router.replace(newUrl.toString(), { scroll: false });
  };

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
        <Modal 
          isOpen={isModalOpen} 
          onClose={closeModal}
          // title="Agenda una llamada"
        >
          <CalendlyWidget url="https://calendly.com/your-calendly-url" />
        </Modal>
      <PageTransition>
        <main className="flex-grow">{children}</main>
      </PageTransition>
    </AnimatePresence>
  );
}