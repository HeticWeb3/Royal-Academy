import {Users} from "../../../../prisma/repository/user/user";
import {NextResponse} from "next/server";

export async function GET (request: Request, {params}: { params: { userId: number }}) {
    const users = new Users()
    const user = await users.execute().findUnique({
        where: {
            id: Number(params.userId),
        }, include: {
            badge: true
        }
    })
    return NextResponse.json(Users.exclude(user, ['password']),{status: 200})
}