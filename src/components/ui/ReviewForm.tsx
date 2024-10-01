import { useBusinessData, handleReview } from '@/hooks/useBusinessData';
import { Review } from '@/types';

export function ReviewForm({ businessId }: { businessId: string }) {
  const { data: businessData, isLoading, error } = useBusinessData(businessId);

  const handleSubmit = (formData: Review) => {
    if (businessData) {
      const result = handleReview(businessData, formData);
      // Handle the result (e.g., show success message, update UI)
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Render your review form here
  // ...

  // In your JSX, use the handleSubmit function
  <form onSubmit={(e) => {
    e.preventDefault();
    handleSubmit(reviewData);
  }}>
    {/* form fields */}
  </form>
}