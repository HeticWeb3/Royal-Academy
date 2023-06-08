import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET() {

    const prismaClient = new PrismaClient()
    const user = await prismaClient.user.findUnique({
        where: {
            id: 1
        }
    })
    const course = await prismaClient.course.findMany({
        //TODO : On peut ajouter le niveau dans la querry (niveau du user)
        where: {
            instrumentId: user?.instrumentId,
        },
    });
    return NextResponse.json(course, {status: 200,})
}