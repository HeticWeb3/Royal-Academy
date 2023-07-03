import {PrismaClient, User} from "@prisma/client";
import {NextResponse} from "next/server";




export class Teachers {
    constructor(private prisma: PrismaClient['teacher'] = new PrismaClient().teacher) {}

    execute(prismaUser = this.prisma) {
        return Object.assign(prismaUser, {

        })
    }

    static exclude<Teacher, Key extends keyof Teacher>(teacher: Teacher, keys: Key[]): Omit<Teacher, Key> {
        for (let key of keys) {
            delete teacher[key]
        }
        return teacher
    }
}