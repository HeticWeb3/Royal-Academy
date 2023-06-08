import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

//TODO : Add logged user
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

export async function GET(request: Request, params: { userId: number }) {
    const getUser = new PrismaClient()
    const user = await getUser.user.findUnique({
        where: {
            id: params.userId,
            email: "test@test.com"
        }
    })
    return NextResponse.json(user, {status: 200,})
}