import { NextResponse } from 'next/server';

import Airtable from 'airtable';

export async function POST(request: Request) {
  try {
    // Check if the API key is set
    if (!process.env.AIRTABLE_TOKEN_ID) {
      throw new Error('Airtable API key is not set');
    }

    // Configure the base
    Airtable.configure({
      apiKey: process.env.AIRTABLE_TOKEN_ID
    });

    const base = Airtable.base(process.env.AIRTABLE_BASE_ID!);

    const body = await request.json();

    // Create a record in Airtable
    const createdRecords = await base(process.env.AIRTABLE_TABLE_ID!).create([
      {
        fields: {
          Name: body.name,
          Phone: body.phone,
          Email: body.email,
          'Business Name': body.nameBusiness,
        //   'Business Type': body.selectBusiness,
          Notes: body.message,
        //   'Terms Accepted': body.termsAccepted,
          Service: body.service,
        },
      },
    ]);

    return NextResponse.json({ success: true, id: createdRecords[0].id });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form', details: (error as Error).message },
      { status: 500 }
    );
  }
}