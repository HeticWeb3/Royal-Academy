import { PrismaClient, User } from '@prisma/client'

type Signup = {
    email: string,
    firstname: string,
    lastname: string,
    phoneNumber: string,
    password: string,
    dateCreation: string
}

export class Users {
    constructor(private prisma: PrismaClient['user'] = new PrismaClient().user) {}

    execute(prismaUser = this.prisma) {
        return Object.assign(prismaUser, {

            async signup(data: Signup): Promise<User> {
                return prismaUser.create({ data })
            },
        })
    }

    static exclude<User, Key extends keyof User>(user: User, keys: Key[]): Omit<User, Key> {
        for (let key of keys) {
            delete user[key]
        }
        return user
    }
}