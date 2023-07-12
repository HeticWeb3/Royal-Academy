import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../prisma";

export class Ranks {
    constructor(private prismaService: PrismaClient['rank'] = prismaClient.rank) {}

    execute(service = this.prismaService) {
        return Object.assign(service, {

        })
    }

    static exclude<Rank, Key extends keyof Rank>(rank: Rank, keys: Key[]): Omit<Rank, Key> {
        for (let key of keys) {
            delete rank[key]
        }
        return rank
    }
}