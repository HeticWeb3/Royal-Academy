import {User} from "@prisma/client";
import {NextResponse} from "next/server";
import {headers} from "next/headers";
import {ReadonlyHeaders} from "next/dist/server/web/spec-extension/adapters/headers";
import {prismaClient} from "../../../../prisma/prisma";

/**
 * Récupère les cours en fonction de l'instrument d'un utilisateur
 *
 */
export async function GET() {
    const headersList: ReadonlyHeaders = headers()
    const userID: string = <string>headersList.get('userID')

    const user = <User>await prismaClient.user.findUnique({
        where: {
            id: Number(userID)
        }, include: {
            Instruments: {
                include: {
                    instrument: true
                }
            },
        }
    })

    return NextResponse.json(user, {status: 200})

    // const course = await prismaClient.course.findMany({
    //     //TODO : On peut ajouter le niveau dans la querry (niveau du user)
    //     where: {
    //         instrument: {
    //             AND: [
    //
    //             ]
    //         },
    //     }
    // });
}