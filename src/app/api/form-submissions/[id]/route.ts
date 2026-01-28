import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import FormSubmission from '@/lib/models/FormSubmission';
import { verifyToken } from '@/lib/auth';

// Middleware-like auth check
async function checkAuth(request: NextRequest) {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    const token = authHeader.split(' ')[1];
    return verifyToken(token);
}

// PUT /api/form-submissions/[id] - Update status
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const decoded = await checkAuth(request);
        if (!decoded) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;
        const body = await request.json();

        await connectDB();
        const submission = await FormSubmission.findByIdAndUpdate(
            id,
            { status: body.status },
            { new: true }
        );

        if (!submission) {
            return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
        }

        return NextResponse.json(submission);
    } catch (error) {
        console.error('Error updating submission:', error);
        return NextResponse.json(
            { error: 'Failed to update submission' },
            { status: 500 }
        );
    }
}

// DELETE /api/form-submissions/[id] - Delete submission
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const decoded = await checkAuth(request);
        if (!decoded) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;

        await connectDB();
        const submission = await FormSubmission.findByIdAndDelete(id);

        if (!submission) {
            return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Submission deleted' });
    } catch (error) {
        console.error('Error deleting submission:', error);
        return NextResponse.json(
            { error: 'Failed to delete submission' },
            { status: 500 }
        );
    }
}
