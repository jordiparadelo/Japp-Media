import { FormFieldsType } from '@/types';

import { useSearchParams } from 'next/navigation';

import { useState } from 'react';

export default function useFormSubmission() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const searchParams = useSearchParams();
	const service = searchParams.get("service");

  const submitForm = async (data: FormFieldsType) => {
    setSubmitStatus('submitting');
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  return { submitStatus, submitForm, service };
}