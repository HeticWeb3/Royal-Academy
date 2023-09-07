import {PrismaClient} from "@prisma/client";
import {prismaClient} from "../../prisma";
import {date} from "yup";
import {Instrument, Style, Teacher} from ".prisma/client";

type CreationTeacher = {
    email: string,
    firstName: string,
    lastName: string,
    // dateOfBirth: Date,
    titleWin: string,
    diploma: string,
    // photo: string[],
    career: string,
}


export class Teachers {
    constructor(private prismaService: PrismaClient['teacher'] = prismaClient.teacher) {
    }

    execute(service = this.prismaService) {
        return Object.assign(service, {

            async createTeacher(data: CreationTeacher): Promise<Teacher> {
                return service.create({ data })
            },
        })
    }

    static exclude<Teacher, Key extends keyof Teacher>(teacher: Teacher, keys: Key[]): Omit<Teacher, Key> {
        for (let key of keys) {
            delete teacher[key]
        }
        return teacher
    }
}