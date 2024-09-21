import { NextResponse } from 'next/server';

// In-memory storage for prospects
// Note: This will reset when the server restarts. For production, use a database.
const prospects: any[] = [];

// POST handler for adding new prospects
export async function POST(request: Request) {
  // Parse the JSON body from the request
  const data = await request.json();

  // Create a new prospect object
  const newProspect = {
    id: prospects.length + 1, // Simple ID generation
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    status: 'Prospecto', // Default status for new prospects
    notes: '', // Initialize empty notes
  };

  // Add the new prospect to our array
  prospects.push(newProspect);

  // Return a success response with the new prospect data
  return NextResponse.json({ success: true, prospect: newProspect });
}

// GET handler for retrieving all prospects
export async function GET() {
  // Simply return all prospects
  return NextResponse.json({ prospects });
}

// TODO: Implement PUT/PATCH for updating prospects
// TODO: Implement DELETE for removing prospects
// TODO: Add error handling for invalid requests
// TODO: Add authentication and authorization checks
// TODO: Consider pagination for large datasets
// TODO: Implement data validation