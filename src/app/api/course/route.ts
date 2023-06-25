import {PrismaClient, User} from "@prisma/client";
import {NextResponse} from "next/server";
import {headers} from "next/headers";
import {ReadonlyHeaders} from "next/dist/server/web/spec-extension/adapters/headers";

/*
    Récupère les cours en fonction de l'instrument du user
 */
export async function GET() {
    const headersList: ReadonlyHeaders = headers()
    const userID: string = <string>headersList.get('userID')

    const getCourse = new PrismaClient()
    const user = <User>await getCourse.user.findUnique({
        where: {
            id: Number(userID)
        }
    })
    const course = await getCourse.course.findMany({
        //TODO : On peut ajouter le niveau dans la querry (niveau du user)
        where: {
            instrumentId: user.instrumentId,
        },
    });
    return NextResponse.json(course, {status: 200,})
}