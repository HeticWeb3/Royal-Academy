import {NextResponse} from "next/server";
import {prismaClient} from "../../../../../prisma/prisma";

// fix build
export const dynamic = "force-dynamic";

/**
 * Récupère tous les instruments
 *
 * @param request
 * @return Promise<NextResponse> (Tous les instruments)
 */
export async function GET(request: Request) {

    const instruments = await prismaClient.instrument.findMany()

    return NextResponse.json(instruments, {status: 200})
}