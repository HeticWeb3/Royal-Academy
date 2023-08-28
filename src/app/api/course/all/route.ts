import {NextResponse} from "next/server";
import {prismaClient} from "../../../../../prisma/prisma";

export async function GET(request: Request) {

    const course = await prismaClient.course.findMany()

    return NextResponse.json(course, {status: 200,})
} 