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
    const table = base(process.env.AIRTABLE_TABLE_ID!);

    const body = await request.json();

    // Check for existing record with the same email
    const existingRecords = await table.select({
      filterByFormula: `{Email} = '${body.email}'`
    }).firstPage();

    if (existingRecords && existingRecords.length > 0) {
      // Update existing record
      const updatedRecord = await table.update(existingRecords[0].id, {
        Name: body.name,
        Phone: body.phone,
        Email: body.email,
        'Business Name': body.nameBusiness,
        'Type of Business': body.selectBusiness,
        Notes: body.message,
        Service: body.service,
        Status: 'In progress'
      });

      return NextResponse.json({ success: true, id: updatedRecord.id, updated: true });
    } else {
      // Create a new record
      const createdRecords = await table.create([
        {
          fields: {
            Name: body.name,
            Phone: body.phone,
            Email: body.email,
            'Business Name': body.nameBusiness,
            Notes: body.message,
            Service: body.service,
          },
        },
      ]);

      return NextResponse.json({ success: true, id: createdRecords[0].id, created: true });
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form', details: (error as Error).message },
      { status: 500 }
    );
  }
}