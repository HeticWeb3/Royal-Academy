import {PrismaClient} from "@prisma/client";

export class Competition {
    constructor(private prisma: PrismaClient['competition'] = new PrismaClient().competition) {}

    execute(prismaCompetition = this.prisma) {
        return Object.assign(prismaCompetition, {

        })
    }

    static exclude<Competition, Key extends keyof Competition>(competition: Competition, keys: Key[]): Omit<Competition, Key> {
        for (let key of keys) {
            delete competition[key]
        }
        return competition
    }
}