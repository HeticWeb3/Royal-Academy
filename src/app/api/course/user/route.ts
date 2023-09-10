import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {Course} from "../../../../../prisma/repository/course/course";
import {headers} from "next/headers";
import {Users} from "../../../../../prisma/repository/user/user";
import user from "/public/icons/user.svg";

/**
 * Récupère les cours d'un user
 *
 * @return Promise<NextResponse>
 */
export async function GET(request: Request) {

    const headersList = headers()
    const userID: string = <string>headersList.get('userID')

    const courses = new Course()

    const course = await courses.execute().findMany({
        where: {
            CourseOnUser: {
                some: {
                    userId: Number(userID)
                }
            }
        }
    })
    return NextResponse.json(course, {status: 200})
}
