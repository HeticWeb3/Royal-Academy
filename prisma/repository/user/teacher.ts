import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../prisma";

export class Teachers {
    constructor(private prismaService: PrismaClient['teacher'] = prismaClient.teacher) {}

    execute(service = this.prismaService) {
        return Object.assign(service, {

        })
    }

    static exclude<Teacher, Key extends keyof Teacher>(teacher: Teacher, keys: Key[]): Omit<Teacher, Key> {
        for (let key of keys) {
            delete teacher[key]
        }
        return teacher
    }
}