import { NextResponse } from 'next/server';
import {headers} from 'next/headers';
import {prismaClient} from "../../../../../prisma/prisma";

export async function PATCH(request: Request,  {params}: {params: {timestampId: number }}) {
    const headersList = headers()
    const userID: string = <string>headersList.get('userID')
    const res = await request.json()
    const timestamp = await prismaClient.timestamp.update({
        where: {
            id: Number(params.timestampId),
            AND: [{lessonId: Number(res.lessonId)}, {userId: Number(userID)}]
        },
        data: {
            timestamp: res.timestamp || undefined,
            status: res.status || undefined
        },
    })



    return NextResponse.json(timestamp, {status: 200,})
}
