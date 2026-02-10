import { NextResponse } from 'next/server';
import { readJSON, writeJSON } from '@/lib/efactory/storage';

const DEFAULT_FACTORY_ID = 'dhurma.example';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id') || DEFAULT_FACTORY_ID;

    const profile = await readJSON('factories', id);

    if (profile) {
        return NextResponse.json(profile);
    } else {
        return NextResponse.json({ error: 'Factory profile not found' }, { status: 404 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // In a real app we would validate the ID or generate one
        // For this demo, we assume the body contains the full updated object or at least the ID
        const id = body.id || DEFAULT_FACTORY_ID;
        
        const success = await writeJSON('factories', id, body);
        
        if (success) {
             return NextResponse.json({ success: true, data: body });
        } else {
             return NextResponse.json({ error: 'Failed to update factory profile' }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}
