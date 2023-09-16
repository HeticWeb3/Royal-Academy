import { NextResponse } from 'next/server';
import {headers} from 'next/headers';
import {prismaClient} from "../../../../../prisma/prisma";

export async function POST(request: Request) {
    const headersList = headers()
    const userID: string = <string>headersList.get('userID')
    const res = await request.json()
    const timestamp = await prismaClient.timestamp.create({
        data: {
            timestamp: res.timestamp,
            status: res.status,
            lessonId: Number(res.lessonId),
            userId: Number(userID)
        },
    })



    return NextResponse.json(timestamp, {status: 200,})
}
