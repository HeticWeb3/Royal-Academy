import {Instrument} from "../../../../prisma/repository/instrument/instrument";
import {NextResponse} from "next/server";

export async function GET() {
    const instruments = new Instrument()

    const instrument = await instruments.execute().findMany();

    return NextResponse.json(instrument, {status: 200})
}