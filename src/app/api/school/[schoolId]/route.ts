import {School} from "../../../../../prisma/repository/school/school";
import {NextResponse} from "next/server";

/**
 * Get de l'école
 *
 * @param request
 * @param params
 * @return Promise<NextResponse> (Information d'une école)
 */
export async function GET(request: Request, {params}: { params: {schoolId: number }}) {

    const schools = new School()

    const school = await schools.execute().findUnique({
        where: {
            id: Number(params.schoolId),
        }
    })
    return NextResponse.json(school, {status: 200,})
}

/**
 * Update d'une école
 *
 * @param request
 * @param params
 * @return Promise<NextResponse> (École mis à jour)
 */
export async function PATCH(request: Request,{params}: { params: {schoolId: number }}) {
    const schools = new School()
    const res = await request.json()

    const school = await schools.execute().update({
        where: {
            id: Number(params.schoolId)
        },
        data: {
            nom: res.nom || undefined,
            user: res.user || undefined,
        }
    })
    return NextResponse.json(School.exclude(school,[]), {status: 200,})
}

