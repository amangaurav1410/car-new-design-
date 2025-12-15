import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import FormSubmission from '@/lib/models/FormSubmission';
import { authenticate } from '@/lib/middleware';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = authenticate(request);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await dbConnect();
  const { id } = await params;
  const body = await request.json();
  const submission = await FormSubmission.findByIdAndUpdate(id, body, { new: true });
  if (!submission) return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
  return NextResponse.json(submission);
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = authenticate(request);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await dbConnect();
  const { id } = await params;
  const submission = await FormSubmission.findByIdAndDelete(id);
  if (!submission) return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
  return NextResponse.json({ message: 'Submission deleted' });
}