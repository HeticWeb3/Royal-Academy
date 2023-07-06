import {Context} from "vm";
import {Course, Instrument, Style} from ".prisma/client";

interface GetTeacher {
    id: number,
    email: string,
    lastName: string,
    firstName: string,
    description: string,
    school: string,
    dateOfBirth: string,
    titleWin: string,
    diploma: string,
    photo: string[],
    career: string,
    course: number,
    instrument: number,
    style: number,
}

export async function getTeacher(teacher: GetTeacher, ctx: Context) {
    return await ctx.prisma.teacher.get({
        where: { id: teacher.id },
        data: teacher,
    })
}