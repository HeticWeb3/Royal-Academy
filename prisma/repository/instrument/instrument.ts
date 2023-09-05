import {PrismaClient} from "@prisma/client";
import {prismaClient} from "../../prisma";

export class Instrument {
    constructor(private prismaService: PrismaClient['instrument'] = prismaClient.instrument) {}

    execute(service = this.prismaService) {
        return Object.assign(service, {

        })
    }

    static exclude<Instrument, Key extends keyof Instrument>(instrument: Instrument, keys: Key[]): Omit<Instrument, Key> {
        for (let key of keys) {
            delete instrument[key]
        }
        return instrument
    }
}
