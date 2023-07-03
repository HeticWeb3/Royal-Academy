import { PrismaClient, User } from '@prisma/client'

type Signup = {
    email: string,
    firstName: string,
    lastName: string,
    birthDate: string,
    phoneNumber: string,
    password: string,
    dateCreation: string
}

export class Users {
    constructor(private prisma: PrismaClient['user'] = new PrismaClient().user) {}

    /**
     * Fonction qui execute l'inscription d'un utilisateur
     * @param prismaUser
     * @return user (data)
     */
    execute(prismaUser = this.prisma) {
        return Object.assign(prismaUser, {

            async signup(data: Signup): Promise<User> {
                return prismaUser.create({ data })
            },
        })
    }

    /**
     *
     * @param user
     * @param keys
     * @return user
     */
    static exclude<User, Key extends keyof User>(user: User, keys: string[]): Omit<User, Key> {
        for (let key of keys) {
            delete user[key as keyof User]
        }
        return user
    }
}