import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

/**
 * Récupère les cours en fonction de l'instrument du user
 *
 * @return Promise<NextResponse>
 */
export async function GET() {
    const getCourse = new PrismaClient()
    const user = await getCourse.user.findUnique({
        where: {
            id: 1
        }
    })
    const course = await getCourse.course.findMany({
        //TODO : On peut ajouter le niveau dans la querry (niveau du user)
        where: {
            instrumentId: user?.instrumentId != null ? user?.instrumentId : undefined,
        },
    });
    return NextResponse.json(course, {status: 200,})
}