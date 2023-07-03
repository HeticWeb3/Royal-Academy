import {Context} from "vm";

interface CreateUser {
    email: string,
    firstName: string,
    lastName: string,
    birthDate: string,
    phoneNumber: string,
    password: string,
    dateCreation: string
}

export async function createUser(user: CreateUser, ctx: Context) {
        return await ctx.prisma.user.create({
            data: user,
        })

}

interface UpdateUser {
    id: number
    firstName: string,
    lastName: string,
    birthDate: string,
    password: string,
    email: string
}

export async function updateUsername(user: UpdateUser, ctx: Context) {
    return await ctx.prisma.user.update({
        where: { id: user.id },
        data: user,
    })
}