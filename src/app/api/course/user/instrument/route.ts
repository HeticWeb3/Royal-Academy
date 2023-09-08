import {Course} from "../../../../../../prisma/repository/course/course";
import {NextResponse} from "next/server";
import {headers} from "next/headers";
import {Instrument} from "../../../../../../prisma/repository/instrument/instrument";

export async function GET(request: Request) {
    const courses = new Course()
    const instrument = new Instrument()
    const headersList = headers()
    const userID: string = <string>headersList.get('userID')

    const instruments = await instrument.execute().findMany({
        where: {
           InstrumentOnUser: {
               some: {
                   userId: Number(userID)
               }
           }
        }
    })
    let instrumentId = instruments.map(instrumentIds => instrumentIds.id)

    const course = await courses.execute().findMany({
        where: {
            instrumentId: Number(instrumentId),
        },
    })
    return NextResponse.json(course, {status: 200})
}
