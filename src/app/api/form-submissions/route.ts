import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import FormSubmission from '@/lib/models/FormSubmission';
import { authenticate } from '@/lib/middleware';

export async function GET(request: NextRequest) {
  const user = authenticate(request);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await dbConnect();
  const submissions = await FormSubmission.find({}).sort({ submittedAt: -1 });
  return NextResponse.json(submissions);
}

export async function POST(request: NextRequest) {
  await dbConnect();
  const body = await request.json();
  const submission = new FormSubmission(body);
  await submission.save();
  return NextResponse.json(submission, { status: 201 });
}