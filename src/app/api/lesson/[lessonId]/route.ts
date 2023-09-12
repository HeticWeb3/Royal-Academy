import {NextResponse} from "next/server";
import {Lesson} from "../../../../../prisma/repository/lesson/lesson";

/**
 * Récupère les informations d'une leçon en fonction de son id
 *
 * @return Promise<NextResponse> (Information leçon)
 */
export async function GET(request: Request, {params}: { params: { lessonId: number } }) {
    const lessons = new Lesson()

    const lesson = await lessons.execute().findUnique({
        where: {
            id: Number(params.lessonId),

        }, include: {
            video: true,
            teacher: true,
        }
    })
    return NextResponse.json(lesson, {status: 200})
}
