import {NextResponse} from "next/server";
import {Users} from "../../../../../prisma/repository/user/user";
import {headers} from "next/headers";

/**
 * Récupère le user connecter
 *
 * @param request
 * @return Promise<NextResponse>
 */
export async function GET(request: Request) {
    const headersList = headers()
    const userID: string = headersList.get('userID')

    const users = new Users()
    const user = await users.execute().findUnique({
        where: {
            id: Number(userID),
        }
    })

    return NextResponse.json(Users.exclude(user, ["password"]), {status: 200,})
}