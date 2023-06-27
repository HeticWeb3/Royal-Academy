import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {headers} from "next/headers";
import {Users} from "../../../../prisma/repository/user/user";


/**
 * Récupère les données des concours en fonction des instruments du user et du niveau de celui-ci
 *
 * @param request
 * @param params
 * @return Promise<NextResponse>
 */
export async function GET(request: Request, params: { userId: number }) {
    const getCompetition = new PrismaClient()

    const headersList = headers()
    const userID: string = <string>headersList.get('userID')

    const users = new Users()
    const user = await users.execute().findUnique({
        where: {
            id: Number(userID),
        }, include: {
            badge: {
                include: {
                    level: {
                        include: {
                            cours: {
                                include: {
                                    instrument: true,
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    const getLevelUser = await getCompetition.user.findMany({
        where: {
            id: Number(userID),
        }, include: {
                badge: {
                    include: {
                        level: true,
                    }
                }
            }
    })

// TODO : Ajouter à la requête de competition le niveau du user
    const compete = await getCompetition.competition.findMany({
        where: {
            instrumentId: user?.instrumentId != null ? user?.instrumentId : undefined,
            // levelId: getLevelUser.levelId
        }
    })

    return NextResponse.json(compete, {status: 200,})
}