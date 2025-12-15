import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';
import { authenticate } from '@/lib/middleware';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const blogs = await Blog.find({}).sort({ publicationDate: -1 });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Database connection error:', error);
    // Return empty array as fallback
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  const user = authenticate(request);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await dbConnect();
    const body = await request.json();
    // Parse images and tags if they are strings
    if (typeof body.images === 'string') {
      body.images = body.images.split(',').map((img: string) => img.trim()).filter((img: string) => img);
    }
    if (typeof body.tags === 'string') {
      body.tags = body.tags.split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag);
    }
    const blog = new Blog(body);
    await blog.save();
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}