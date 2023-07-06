import {NextResponse} from "next/server";
import {Users} from "../../../../../prisma/repository/user/user";

//TODO : Add logged user

/**
 *  Update d'un utilisateur connecté
 *
 * @param request
 * @param params
 * @return Promise<NextResponse> (Utilisateur update)
 */
export async function PATCH(request: Request, {params}: { params: { userId: number } }) {
    const res = await request.json()

    const users = new Users()
    const user = await users.execute().update({
        where: {
            id: Number(params.userId),
        },
        data: {
            firstName: res.firstName,
        }
    })
    return NextResponse.json(Users.exclude(user, ['password']), {status: 200,})
}

/**
 * Supprime le user connecter
 *
 * @param request
 * @param params
 * @return Promise<NextResponse>
 */
export async function DELETE(request: Request, {params}: { params: { userId: number } }) {

    const users = new Users()
    const user = await users.execute().delete({
        where: {
            id: Number(params.userId),
        },
    })
    return NextResponse.json(user, {status: 200,})
}

/**
 * Récupère toutes les données d'un utilisateur en fonction de l'id connecter
 *
 * @param request
 * @param params
 * @return Promise<NextResponse> (les informations de l'utilisateur)
 */
export async function GET(request: Request, {params}: { params: { userId: number } }) {

    const users = new Users()
    const user = await users.execute().findUnique({
        where: {
            id: Number(params.userId),
        }, include: {
            instrument: true,
            lastLesson: true,
            school: true,
            style: true,
            course: true,
        }
    })
    return NextResponse.json(Users.exclude(user, ['password']), {status: 200,})
}