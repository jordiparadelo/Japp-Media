import { PERSONAL_INFO } from '@/data/content';
import { BASE_URL } from '@/data/config';

import { Metadata } from 'next';
import { ReferrerEnum } from 'next/dist/lib/metadata/types/metadata-types';

// Define valid Open Graph types
type OgType = 'article' | 'website' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';

type FormatDetectionType = {
  email: boolean;
  address: boolean;
  telephone: boolean;
};

// Define valid page keys for SEO configuration
type PageKey =  'home' | 'services' | 'contact' | 'about' | 'missing-calls';

// Define the structure for SEO configuration
interface SEOConfig {
  metadataBase: URL;    
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: OgType;
  generator?: string;
  applicationName?: string;
  referrer?: ReferrerEnum | null | undefined;
  authors?: Array<{ name: string; url: string }>;
  creator?: string;
  publisher?: string;
  language?: string;
  formatDetection?: FormatDetectionType;
}

// Default SEO configuration
export const defaultConfig: SEOConfig = {
  metadataBase: new URL(BASE_URL),
  title: PERSONAL_INFO.name,
  description: PERSONAL_INFO.description,
  ogImage: '/images/default-og-image.webp',
  ogType: 'website',
  language: 'es',
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: PERSONAL_INFO.name, url: "https://nextjs.org" }],
  creator: PERSONAL_INFO.name,
  publisher: PERSONAL_INFO.name,
  formatDetection: {
      email: true,
      address: true,
      telephone: true,
  },
};

// SEO configurations for different pages
const seoConfigs: Record<PageKey, SEOConfig> = {
  home: {
    ...defaultConfig,
    title: 'Japp Media | Aumenta la visibilidad de tu negocio',
    description: 'Japp Media es una agencia que te permitirá llegar a más clientes de manera eficiente y aumentar tus ventas.',
    keywords: ['páginas web', 'marketing digital', 'correo electrónico', 'aumentar ventas', 'automatización'],
  },
  services: {
    ...defaultConfig,
    title: 'Servicios | Deja que nosotros te ayudemos',
    description: 'Explora los servicios ofrecidos por Japp Media',
    keywords: ['páginas web', 'comunicación automatizada', 'reseña de Google', 'calendario de citas' ],
  },
  about: {
    ...defaultConfig,
    title: 'Sobre Nosotros | La agencia Japp Media',
    description: 'Conoce más sobre Japp Media y nuestra misión',
    keywords: ['negocios locales', 'automatización', 'misión'],
  },
  contact: {
    ...defaultConfig,
    title: 'Contáctenos | Empecemos a trabajar juntos',
    description: 'Contacta con Japp Media',
    keywords: ['contacto', 'soporte', 'agenda cita'],
  },
  'missing-calls': {
    ...defaultConfig,
    title: 'ROI Calculator | Japp Media',
    description: 'Calcula el ROI de tus llamadas perdidas',
    keywords: ['roi', 'calculadora', 'llamadas perdidas'],
  },
  // To add a new entry, follow this pattern:
  // newPage: {
  //   ...defaultConfig,
  //   title: 'New Page Title | Your Company Name',
  //   description: 'Description for the new page',
  //   keywords: ['keyword1', 'keyword2', 'keyword3'],
  //   // Override any other properties as needed
  // },
};

// Function to get SEO configuration for a specific page
function getSEOConfig(page: PageKey): Metadata {
  const config = seoConfigs[page];
  return {
    metadataBase: new URL(BASE_URL),
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      type: config.ogType, // Use the ogType from the config
      images: [{ url: config.ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [config.ogImage],
    },
    // Add other properties from the config as needed
    generator: config.generator,
    applicationName: config.applicationName,
    referrer: config.referrer,
    authors: config.authors,
    creator: config.creator,
    publisher: config.publisher,
    formatDetection: config.formatDetection,
  };
}

export { getSEOConfig };
export type { PageKey, SEOConfig }; // Export SEOConfig for reusability
