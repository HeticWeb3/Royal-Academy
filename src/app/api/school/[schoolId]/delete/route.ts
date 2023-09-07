import {NextResponse} from "next/server";
import {School} from "../../../../../../prisma/repository/school/school";

/**
 * Supprime l'école
 *
 * @param request
 * @param params
 * @return Promise<NextResponse>
 */
export async function DELETE(request: Request, {params}: { params: {schoolId: number }}) {
    const schools = new School()

    const school = await schools.execute().delete({
        where: {
            id: Number(params.schoolId),
        },
    })
    return NextResponse.json(school, {status: 200})
}