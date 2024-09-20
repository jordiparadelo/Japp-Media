"use client";
import { useSearchParams, useRouter } from 'next/navigation';

import { AnimatePresence } from "framer-motion";
import { PageTransition, BookingModal } from "@/components/ui";
import CalendlyWidget from "@/components/booking/CalendlyWidget";
// import GoogleCalendarWidget from "@/components/booking/GoogleCalendarWidget";

export default function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
	const router = useRouter();
	const isModalOpen = searchParams.get('modal') === 'open';

	const closeModal = () => {
		const currentPath = window.location.pathname;
		const newUrl = new URL(currentPath, window.location.origin);
		// Copy all current search params except 'modal'
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
      <PageTransition>
        <main className="flex-grow">{children}</main>
        <BookingModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          BookingWidget={CalendlyWidget}
          bookingWidgetProps={{ url: "https://calendly.com/your-calendly-url" }}
        />
      </PageTransition>
    </AnimatePresence>
  );
}