import { BusinessData } from '@/types';

export function getBusinessData(businessSlug: string): Promise<BusinessData | null> {
  // TODO: Implement actual data fetching logic (e.g., from an API or database)
  // This is just a placeholder
  const mockData: Record<string, BusinessData> = {
    'demo': {
      name: 'Demo',
      logoUrl: '/acme-logo.png',
      tagline: 'Innovative Solutions for Tomorrow',
      welcomeMessage: 'We value your feedback! Please leave a review to help us improve our services.',
      googleReviewUrl: 'https://g.page/r/acme-corp/review',
      currentRating: 4.7,
      totalReviews: 142,
    },
  };

  return mockData[businessSlug] || null;
}