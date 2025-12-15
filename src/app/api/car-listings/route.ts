import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CarListing from '@/lib/models/CarListing';
import { authenticate } from '@/lib/middleware';

export async function GET(request: NextRequest) {
  // Public for frontend
  await dbConnect();
  const listings = await CarListing.find({ status: 'available' }).sort({ createdAt: -1 });
  return NextResponse.json(listings);
}

export async function POST(request: NextRequest) {
  const user = authenticate(request);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await dbConnect();
  const body = await request.json();
  const listing = new CarListing(body);
  await listing.save();
  return NextResponse.json(listing, { status: 201 });
}