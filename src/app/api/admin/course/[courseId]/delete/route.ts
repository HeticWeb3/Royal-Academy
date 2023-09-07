import {NextResponse} from "next/server";
import {Courses} from "../../../../../../../prisma/repository/course/course";

/**
 * Supprime cours
 *
 * @param request
 * @param params
 * @return Promise<NextResponse>
 */
export async function DELETE(request: Request, {params}: { params: { courseId: number } }) {
    const courses = new Courses()

    const course = await courses.execute().delete({
        where: {
            id: Number(params.courseId),
        },
    })
    return NextResponse.json(course, {status: 200})
}