import { PERSONAL_INFO } from '@/data/content';

import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: string;
}

type PageKey = 'home' | 'services' | 'contact' | 'about' | 'missing-calls';

const defaultConfig: SEOConfig = {
  title: PERSONAL_INFO.name,
  description: PERSONAL_INFO.description,
  keywords: ['default', 'keywords', 'for', 'your', 'site'],
  ogImage: '/images/default-og-image.webp',
  ogType: 'website',
};

const seoConfigs: Record<PageKey, SEOConfig> = {
  home: {
    ...defaultConfig,
    title: 'Home | Your Company Name',
    description: 'Welcome to Your Company Name - Your tagline here',
    keywords: ['home', 'welcome', 'your company name'],
  },
  services: {
    ...defaultConfig,
    title: 'Our Services | Your Company Name',
    description: 'Explore the services offered by Your Company Name',
    keywords: ['services', 'offerings', 'solutions'],
  },
  about: {
    ...defaultConfig,
    title: 'About Us | Your Company Name',
    description: 'Learn more about Your Company Name and our mission',
    keywords: ['about us', 'company history', 'mission'],
  },
  contact: {
    ...defaultConfig,
    title: 'Contact Us | Your Company Name',
    description: 'Get in touch with Your Company Name',
    keywords: ['contact', 'support', 'get in touch'],
  },
  'missing-calls': {
    ...defaultConfig,
    title: 'ROI Calculator | Japp Media',
    description: 'Calculate the ROI of your missing calls',
    keywords: ['roi', 'calculator', 'missing calls'],
  },
//   blog: {
//     ...defaultConfig,
//     title: 'Blog | Your Company Name',
//     description: 'Read the latest articles and insights from Your Company Name',
//     keywords: ['blog', 'articles', 'insights'],
//     ogType: 'article',
//   },
};

function getSEOConfig(page: PageKey): Metadata {
  const config = seoConfigs[page];
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      type: "website", // Specify the correct type
      images: [{ url: config.ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [config.ogImage],
    },
  };
}

export { getSEOConfig };
export type { PageKey };
