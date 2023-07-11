import {NextResponse} from "next/server";

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function GET({params}: { params:{ userId: number }}) {
    const user = await prisma.user.findUnique({
        where: { id: Number(params.userId),},
        include: { badges: true },
    });

    let totalPoints = 0;


    for (const badge of user.badge) {
        totalPoints += badge.point;
    }

    return NextResponse.json({pointUser: totalPoints}, {status: 200})
}