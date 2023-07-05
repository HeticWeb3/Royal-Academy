import { PrismaClient, User } from '@prisma/client'
import { prismaClient } from "../../prisma";

type Signup = {
    email: string,
    firstName: string,
    lastName: string,
    birthDate: string,
    phoneNumber: string,
    password: string,
    dateCreation: string
}

export class Users{
    constructor(private prismaService: PrismaClient['user'] = prismaClient.user) {}

    /**
     * Fonction qui execute l'inscription d'un utilisateur
     * @param service
     * @return user (data)
     */
    execute(service = this.prismaService) {
        return Object.assign(service, {

            async signup(data: Signup): Promise<User> {
                return service.create({ data })
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