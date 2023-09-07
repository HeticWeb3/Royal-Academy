import {PrismaClient} from "@prisma/client";
import {prismaClient} from "../../prisma";
import {Badge, Instrument, Level, Style, Teacher, Course} from ".prisma/client";

type CreationCourse = {
    name: string,
    description: string,
    level: Level,
    style: Style,
    instrument: Instrument,
    // lessons: Lesson[]
    teacher: Teacher,
    badge: Badge,
}

export class Courses {
    constructor(private prismaService: PrismaClient['course'] = prismaClient.course) {
    }

    execute(service = this.prismaService) {
        return Object.assign(service, {

            async createCourse(data: CreationCourse): Promise<Course> {
               return service.create({ data })
            },
        })
    }

    static exclude<Course, Key extends keyof Course>(course: Course, keys: Key[]): Omit<Course, Key> {
        for (let key of keys) {
            delete course[key]
        }
        return course
    }
}
