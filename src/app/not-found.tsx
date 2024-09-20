import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-white px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-8">Oops! Página no encontrada</h2>
      <p className="text-lg mb-8 text-center max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link href="/" passHref>
        <Button variant="accent">Volver a la página principal</Button>
      </Link>
    </div>
  );
}