import {PrismaClient} from "@prisma/client";
import {prismaClient} from "../../prisma";

export class School {
    constructor(private prismaService: PrismaClient['school'] = prismaClient.school) {}

    execute(service = this.prismaService) {
        return Object.assign(service, {

        })
    }

    static exclude<School, Key extends keyof School>(school: School, keys: Key[]): Omit<School, Key> {
        for (let key of keys) {
            delete school[key]
        }
        return school
    }
}
