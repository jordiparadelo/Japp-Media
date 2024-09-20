"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BookingModalProps = {
	isOpen: boolean;
	onClose: () => void;
	BookingWidget: React.ComponentType<any>;
	bookingWidgetProps?: Record<string, any>;
};

const BookingModal: React.FC<BookingModalProps> = ({
	isOpen,
	onClose,
	BookingWidget,
	bookingWidgetProps,
}) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, onClose]);

	useEffect(() => {
		if (isOpen) {
			setIsLoading(true);
			const timer = setTimeout(() => {
				setIsLoading(false);
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className='sticky py-[120px] max-w-[100vw] max-h-[100vh] inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'
				>
					<motion.div
						ref={modalRef}
						initial={{ y: "100%" }}
						animate={{ y: 0 }}
						exit={{ y: "100%" }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className='bg-white p-4 rounded-lg w-full max-w-2xl'
					>
						<div className='flex justify-between items-center mb-4'>
							<h2 className='text-xl font-bold text-gray-800'>
								Agenda una llamada
							</h2>
							<button
								onClick={onClose}
								className='text-gray-600 hover:text-gray-800'
							>
								<svg
									className='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
						{isLoading ? (
							<div className='animate-pulse'>
								<div className='h-8 bg-gray-200 rounded w-3/4 mb-4'></div>
								<div className='h-4 bg-gray-200 rounded w-1/2 mb-2'></div>
								<div className='h-4 bg-gray-200 rounded w-2/3 mb-2'></div>
								<div className='h-4 bg-gray-200 rounded w-1/3 mb-4'></div>
								<div className='h-32 bg-gray-200 rounded mb-4'></div>
								<div className='h-8 bg-gray-200 rounded w-1/4'></div>
							</div>
						) : (
							<BookingWidget {...bookingWidgetProps} />
						)}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default BookingModal;
