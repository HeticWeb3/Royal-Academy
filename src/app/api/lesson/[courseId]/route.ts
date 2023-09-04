import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {Course} from "../../../../../prisma/repository/course/course";

/**
 * Récupère la leçon
 *
 * @return Promise<NextResponse>
 */
export async function GET(request: Request, {params}: { params: {courseId: number }}) {
    const courses = new Course()

    const course = await courses.execute().findUnique({
        where: {
            id: Number(params.courseId),
        }, include: {
            lesson: true,
        }
    })
    return NextResponse.json(course, {status: 200,})
}