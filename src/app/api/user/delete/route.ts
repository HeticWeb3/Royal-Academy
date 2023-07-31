import {NextResponse} from "next/server";
import {headers} from "next/headers";

import {Users} from "../../../../../prisma/repository/user/user";

/**
 * Supprime l'utilisateur connecté
 *
 * @param request
 * @return Promise<NextResponse>
 */
export async function DELETE(request: Request) {
    const headersList = headers()
    const userID: string = <string>headersList.get('userID')

    const users = new Users()
    const user = await users.execute().delete({
        where: {
            id: Number(userID),
        },
    })
    return NextResponse.json(user, {status: 200})
}
