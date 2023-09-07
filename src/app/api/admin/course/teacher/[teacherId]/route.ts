import {Courses} from "../../../../../../../prisma/repository/course/course";
import {Teachers} from "../../../../../../../prisma/repository/user/teacher";
import {NextResponse} from "next/server";

/**
 * Get des cours en fonction de l'id du professeur
 *
 * @param request
 * @param params
 * @return Promise<NextResponse> (Cours)
 */
export async function GET(request: Request, {params}: { params: {teacherId: number }}) {

    const teachers = new Teachers()

    const teacher = await teachers.execute().findUnique({
        where: {
            id: Number(params.teacherId)
        }
    })

    const courses = new Courses()

    const course = await courses.execute().findMany({
        where: {
            teacherId: teacher?.id != null ? teacher?.id : undefined,
        }
    })
    return NextResponse.json(course, {status: 200})
}

/**
 * Update d'un cours du professeur
 *
 * @param request
 * @param params
 * @return Promise<NextResponse> (École mis à jour)
 */
export async function PATCH(request: Request,{params}: { params: {teacherId: number }}) {
    const courses = new Courses()
    const res = await request.json()

    const course = await courses.execute().update({
        where: {
            id: Number(params.teacherId)
        },
        data: {
            name: res.name || undefined,
            description: res.description || undefined,
            level: res.level || undefined,
            style: res.style || undefined,
            instrument: res.instrument || undefined,
            lesson: res.lesson || undefined,
            badge: res.badge || undefined,
        }
    })
    return NextResponse.json(Courses.exclude(course,[]), {status: 200,})
}
