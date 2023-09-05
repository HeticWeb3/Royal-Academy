import {prismaClient} from "../../../../../prisma/prisma";
import {NextResponse} from "next/server";

/**
 * Récupère toutes les compétitions
 *
 * @param request
 * @return Promise<NextResponse> (Toutes les compétitions)
 */
export async function GET(request: Request) {
    const competition = await prismaClient.competition.findMany()

    return NextResponse.json(competition, {status: 200})
}