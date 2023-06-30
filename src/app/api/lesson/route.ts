import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

/**
 * Récupère la leçon
 *
 * @return Promise<NextResponse>
 */
export async function GET() {
    const getLesson = new PrismaClient()
    const user = await getLesson.user.findUnique({
        where: {
            id: 1
        }
    })
    const course = await getLesson.course.findMany({
        // TODO : On peut ajouter le niveau dans la querry (niveau du user)
        // TODO : Pas obligé le include grosse requête pour rien car on charge tout les cours etc pas opti
        where: {
            instrumentId: user?.instrumentId != null ? user?.instrumentId : undefined,
        }, include: {
            lesson: true,
        }
    });

    // const lesson= await getLesson.lesson.findUnique({
    //     where: {
    //         lessonId:
    //     }
    // })

    return NextResponse.json(course, {status: 200,})
}
