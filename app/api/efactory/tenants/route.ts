import { NextResponse } from 'next/server';
import { readJSON, writeJSON, listCollection } from '@/lib/efactory/storage';

export async function GET() {
    try {
        const tenants = [];
        const tenantFiles = await listCollection('tenants');
        
        for (const file of tenantFiles) {
            const tenant = await readJSON('tenants', file);
            if (tenant) tenants.push(tenant);
        }
        
        return NextResponse.json(tenants);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch tenants' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        if (!body.id) {
            return NextResponse.json({ error: 'Tenant ID is required' }, { status: 400 });
        }
        
        const success = await writeJSON('tenants', body.id, body);
        
        if (success) {
            return NextResponse.json({ success: true, data: body });
        } else {
            return NextResponse.json({ error: 'Failed to save tenant' }, { status: 500 });
        }
    } catch (error) {
         return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}
