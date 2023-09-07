import {Courses} from "../../../../../prisma/repository/course/course";
import {NextResponse} from "next/server";


export async function POST(request: Request) {
    const courses = new Courses()
    const res = await request.json()

    const course = await courses.execute().createCourse(
        {
            name: res.name,
            description: res.description,
            level: res.level,
            style: res.style,
            instrument: res.instrument,
            teacher: res.teacher,
            badge: res.badge,
        }
    )
    return NextResponse.json(Courses.exclude(course, []), {status: 200});
}