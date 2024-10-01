import { useQuery } from "@tanstack/react-query";

import { Business, Review } from "../types";

interface BusinessData {
  business: Business;
  reviewThreshold: number;
}

async function getBusinessData(id: string): Promise<BusinessData> {
  // Mock API call to Airtable
  const response = await fetch(`/api/business/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch business data");
  }
  return response.json();
}

function isPositiveReview(rating: number, threshold: number): boolean {
  return rating >= threshold;
}

export function useBusinessData(id: string) {
  return useQuery<BusinessData, Error>({
    queryKey: ["businessData", id],
    queryFn: () => getBusinessData(id),
  });
}

export function handleReview(businessData: BusinessData, review: Review): { isPositive: boolean; action: string } {
  const isPositive = isPositiveReview(review.rating, businessData.reviewThreshold);
  
  if (isPositive) {
    return {
      isPositive: true,
      action: `redirect:${businessData.business.googleReviewLink}`,
    };
  } else {
    return {
      isPositive: false,
      action: "showFeedbackForm",
    };
  }
}
