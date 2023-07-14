import {NextResponse} from "next/server";
import {Teachers} from "../../../../../prisma/repository/user/teacher";

/**
 * Récupère les informations des professeurs
 *
 * @param request
 * @param params
 * @return Promise<NextResponse> (Information professeur)
 */
export async function GET(request: Request, {params}: { params: {teacherId: number }}) {

    const teachers = new Teachers()

    const teacher = await teachers.execute().findUnique({
        where: {
            id: Number(params.teacherId),
        }
    })

    return NextResponse.json(teacher, {status: 200,})
}