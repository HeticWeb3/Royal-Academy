import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {prismaClient} from "../../../../../prisma/prisma";

//TODO : Add logged user

/**
 *  Update d'un utilisateur connecté
 *
 * @param request
 * @param params
 * @return Promise<NextResponse> (Utilisateur update)
 */
export async function PATCH(request: Request, params: { userId: number }) {
    const res = await request.json()

    const user = await prismaClient.user.update({
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

    const user = await prismaClient.user.delete({
        where: {
            id: params.userId,
            email: "test@test.com"
        },
    })
    return NextResponse.json(user, {status: 200,})
}

/**
 * Récupère toutes les données du user en fonction de l'id connecter
 *
 * @param request
 * @param params
 * @return Promise<NextResponse> (les informations de l'utilisateur)
 */
export async function GET(request: Request, params: { userId: number }) {
    const user = await prismaClient.user.findUnique({
        where: {
            id: params.userId,
            email: "test@test.com"
        }
    })
    return NextResponse.json(user, {status: 200,})
}