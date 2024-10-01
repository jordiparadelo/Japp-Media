import { useState, useEffect, useCallback, useRef } from 'react';

import { useSearchParams, useRouter } from 'next/navigation';

export function useModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setIsModalOpen(searchParams.get('modal') === 'open');
    }
  }, [searchParams, isMounted]);

  const closeModal = useCallback(() => {
    if (isMounted) {
      const currentPath = window.location.pathname;
      const newUrl = new URL(currentPath, window.location.origin);
      searchParams.forEach((value, key) => {
        if (key !== 'modal') {
          newUrl.searchParams.append(key, value);
        }
      });
      router.push(newUrl.toString(), { scroll: false });
    }
  }, [searchParams, router, isMounted]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, closeModal]);

  return { isModalOpen, isMounted, closeModal, modalRef };
}