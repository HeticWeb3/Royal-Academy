import {NextResponse} from "next/server";
import {prismaClient} from "../../../../../prisma/prisma";

export async function GET(request: Request) {

    const instruments = await prismaClient.instrument.findMany()

    return NextResponse.json(instruments, {status: 200,})
}