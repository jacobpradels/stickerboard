import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '../auth/[...nextauth]/route';

export async function PUT(req: Request) {
    const session = await getServerSession(authOptions);
    const currentUserId = session?.user?.id!;
    const data = await req.json();
    data.age = Number(data.age);
    const post = await prisma.post.create({
        data: {
            title: '',
            authorId: currentUserId,
            content: data.content,
            published: data.published,
        }
    })
    return NextResponse.json(post);
}