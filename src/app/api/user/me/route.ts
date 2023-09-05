import {NextResponse} from "next/server";
import {Users} from "../../../../../prisma/repository/user/user";
import {headers} from "next/headers";

/**
 * Get de l'utilisateur
 *
 * @param request
 * @return Promise<NextResponse> (Informations d'un utilisateur)
 */
export async function GET(request: Request) {
    const headersList = headers()
    const userID: string = <string>headersList.get('userID')

    const users = new Users()
    const user = await users.execute().findUnique({
        where: {
            id: Number(userID),
        }, include: {
            instrument: true,
            course: true
        }
    })

    return NextResponse.json(Users.exclude(user, ['password']), {status: 200,})
}

/**
 *  Update d'un utilisateur
 *
 * @param request
 * @param params
 * @return Promise<NextResponse> (Utilisateur mis à jour)
 */
export async function PATCH(request: Request) {
    const headersList = headers()
    const userID: string = <string>headersList.get('userID')

    const res = await request.json()

    const users = new Users()
    const user = await users.execute().update({
        where: {
            id: Number(userID),
        }, include: {
            instrument: true,
            course: true
        },
        data: {
            firstName: res.firstName || undefined,
            lastName: res.lastName || undefined,
            phoneNumber: res.phoneNumber || undefined,
            birthDate: res.birthDate || undefined,
            instrument: { connect: res.addInstrument, disconnect: res.delInstrument} || undefined,
        }
    })
    return NextResponse.json(Users.exclude(user, ['password']), {status: 200,})
}