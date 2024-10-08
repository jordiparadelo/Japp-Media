'use client';

import React, { Suspense } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from '@/hooks/useModal';

interface ModalProps {
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, children }) => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ModalInner title={title}>{children}</ModalInner>
    </Suspense>
  );
};

function ModalInner({ children, title }: { children: React.ReactNode, title: string | undefined }) {
  const { isModalOpen, isMounted, closeModal, modalRef } = useModal();

  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 text-black bg-black bg-opacity-50 z-50 flex justify-center items-center w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0"
        >
          <motion.div
            ref={modalRef}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white p-4 rounded-lg w-full max-w-2xl max-h-[65vh] overflow-y-auto" 
          >
            <div className="flex justify-between items-center mb-4">
              {title && <h2 className="text-xl font-bold text-gray-800">{title}</h2>}
              <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;