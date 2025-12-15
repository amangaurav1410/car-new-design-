import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CarListing from '@/lib/models/CarListing';
import { authenticate } from '@/lib/middleware';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = authenticate(request);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await dbConnect();
  const { id } = await params;
  const body = await request.json();
  const listing = await CarListing.findByIdAndUpdate(id, body, { new: true });
  if (!listing) return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
  return NextResponse.json(listing);
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = authenticate(request);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await dbConnect();
  const { id } = await params;
  const listing = await CarListing.findByIdAndDelete(id);
  if (!listing) return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
  return NextResponse.json({ message: 'Listing deleted' });
}