import {NextResponse} from "next/server";
import {Users} from "../../../../../prisma/repository/user/user";

/**
 * Récupère toutes les données de l'utilisateur en fonction de l'id connecter
 *
 * @param request
 * @param params
 * @return Promise<NextResponse> (les informations de l'utilisateur)
 */
export async function GET(request: Request, {params}: { params: { userId: number } }) {

    const users = new Users()
    try {
        const user = await users.execute().findUnique({
            where: {
                id: Number(params.userId),
            }, include: {
                instrument: true,
                lastLesson: true,
                school: true,
                style: true,
                course: true,
            }
        })
        return NextResponse.json(Users.exclude(user, ['password']), {status: 200,})
    } catch(e: any){
        return NextResponse.json({'error': {"type": "UserNotFound"}}, {status: 401})
    }
}