"use client";

import React from 'react';
import { Button } from '@/components/ui';
import { useRouter } from 'next/navigation';

interface BookButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  text: string;
}

const BookButton: React.FC<BookButtonProps> = ({ className, variant, text }) => {
  const router = useRouter();

  const openModal = () => {
    router.push('?modal=open', { scroll: false });
  };

  return (
    <Button onClick={openModal} className={className} variant={variant}>
        {text}
    </Button>
  );
};

export default BookButton;