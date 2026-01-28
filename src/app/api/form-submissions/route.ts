import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import connectDB from '@/lib/db';
import FormSubmission from '@/lib/models/FormSubmission';
import { verifyToken } from '@/lib/auth';

// GET /api/form-submissions - List all submissions (admin only)
export async function GET(request: NextRequest) {
    try {
        const authHeader = request.headers.get('Authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
        }

        await connectDB();
        const submissions = await FormSubmission.find().sort({ submittedAt: -1 });

        return NextResponse.json(submissions);
    } catch (error) {
        console.error('Error fetching submissions:', error);
        return NextResponse.json(
            { error: 'Failed to fetch submissions' },
            { status: 500 }
        );
    }
}

// POST /api/form-submissions - Create new submission (public)
export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const body = await request.json();

        // Validate required fields
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, message' },
                { status: 400 }
            );
        }

        const submission = await FormSubmission.create(body);

        return NextResponse.json(submission, { status: 201 });
    } catch (error) {
        console.error('Error creating submission:', error);
        return NextResponse.json(
            { error: 'Failed to submit form' },
            { status: 500 }
        );
    }
}
