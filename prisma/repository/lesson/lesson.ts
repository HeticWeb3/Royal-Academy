import {PrismaClient} from "@prisma/client";
import {prismaClient} from "../../prisma";

export class Lesson {
    constructor(private prismaService: PrismaClient['lesson'] = prismaClient.lesson) {}

    execute(service = this.prismaService) {
        return Object.assign(service, {

        })
    }

    static exclude<Lesson, Key extends keyof Lesson>(lesson: Lesson, keys: Key[]): Omit<Lesson, Key> {
        for (let key of keys) {
            delete lesson[key]
        }
        return lesson
    }
}
