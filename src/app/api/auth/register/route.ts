import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Admin from '@/lib/models/Admin';
import { hashPassword } from '@/lib/auth';

export async function POST(request: NextRequest) {
  await dbConnect();
  const { username, password } = await request.json();

  const hashedPassword = await hashPassword(password);
  const admin = new Admin({ username, password: hashedPassword });
  await admin.save();

  return NextResponse.json({ message: 'Admin created' });
}