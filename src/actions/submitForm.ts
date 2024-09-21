'use server';

export async function submitForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  try {
    const response = await fetch('/api/prospects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, message }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit form');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, error: 'Failed to submit form' };
  }
}