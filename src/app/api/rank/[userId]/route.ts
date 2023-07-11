import {NextResponse} from "next/server";
import {Users} from "../../../../../prisma/repository/user/user";

const {PrismaClient} = require('@prisma/client');

export async function GET(request: Request, {params}: { params: { userId: number }}) {
    const users = new Users()
    const user = await users.execute().findUnique({
        where: {
            id: Number(params.userId),
        },
        include: {
            badge: true
        },
    });

    let totalPoints = 0;

    // @ts-ignore
    for (const badge of user.badge) {
        totalPoints += badge.point;
    }
    // @ts-ignore
    user.totalPoint = totalPoints;
    return NextResponse.json(Users.exclude(user, ['password']), {status: 200,})
}