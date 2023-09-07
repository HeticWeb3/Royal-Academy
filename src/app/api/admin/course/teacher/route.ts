import {Teachers} from "../../../../../../prisma/repository/user/teacher";
import {NextResponse} from "next/server";


export async function POST(request: Request) {
    const teachers = new Teachers()
    const res = await request.json()

    const teacher = await teachers.execute().createTeacher(
        {
            email: res.email.toLowerCase(),
            firstName: res.firstName,
            lastName: res.lastName,
           // dateOfBirth: res.dateOfBirth,
            titleWin: res.titleWin,
            diploma: res.diploma,
           // photo: res.photo,
            career: res.career,
        }
    )
    return NextResponse.json(Teachers.exclude(teacher, []), {status: 200});
}