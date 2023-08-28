import {PrismaClient} from "@prisma/client";
import {prismaClient} from "../../prisma";

export class Course {
    constructor(private prismaService: PrismaClient['course'] = prismaClient.course) {}

    execute(service = this.prismaService) {
        return Object.assign(service, {

        })
    }

    static exclude<Course, Key extends keyof Course>(course: Course, keys: Key[]): Omit<Course, Key> {
        for (let key of keys) {
            delete course[key]
        }
        return course
    }
}
