import {NextResponse} from "next/server";
import {Instrument} from "../../../../../prisma/repository/instrument/instrument";

/**
 * Récupère la leçon
 *
 * @return Promise<NextResponse>
 */
export async function GET(request: Request, {params}: { params: {instrumentId: number }}) {
    const instruments = new Instrument()

    const instrument = await instruments.execute().findUnique({
        where: {
            id: Number(params.instrumentId),
        }
    })
    return NextResponse.json(instrument, {status: 200})
}
