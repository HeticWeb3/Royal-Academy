import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

//TODO : Add logged user

/**
 * Update du user connecter
 *
 * @param request
 * @param params
 * @return Promise<NextResponse>
 */
export async function PATCH(request: Request, params: { userId: number }) {
    const res = await request.json()
    const updateUser = new PrismaClient()
    const user = await updateUser.user.update({
        where: {
            id: params.userId,
            email: "test@test.com"
        },
        data: {
            firstName: res.firstName,
        }
    })
    return NextResponse.json(user, {status: 200,})
}

/**
 * Supprime le user connecter
 *
 * @param request
 * @param params
 * @return Promise<NextResponse>
 */
export async function DELETE(request: Request, params: { userId: number }) {
    const deleteUser = new PrismaClient()
    const user = await deleteUser.user.delete({
        where: {
            id: params.userId,
            email: "test@test.com"
        },
    })
    return NextResponse.json(user, {status: 200,})
}

/**
 * Récupère toutes les données du user pour le profil
 *
 * @param request
 * @param params
 * @return Promise<NextResponse>
 */
export async function GET(request: Request, {params}: { userId: number }) {
    const getUser = new PrismaClient()
    const user = await getUser.user.findUnique({
        where: {
            id: params.userId,
        }
    })
    return NextResponse.json(user, {status: 200,})
}