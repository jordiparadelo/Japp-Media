import React from "react";
import { ReviewPageLayout } from "@/components/pages/reviews";
export default function ReviewPage({ params }: { params: { businessId: string } }) {
  const { businessId } = params;

  return (
    <ReviewPageLayout id={businessId} />
  );
}