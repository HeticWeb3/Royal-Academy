import { NextResponse } from 'next/server';
import {Users} from "../../../../../prisma/repository/user/user";
import {passwordValidation} from "@/app/api/shared/user/validations";
import {User, Prisma} from "@prisma/client";

/**
 * Enregistre un utilisateur dans la base de donnée
 *
 * @param request
 * @constructor
 * @return Promise<NextResponse> (Données de l'utilisateur enregistré)
 */
export async function POST(request: Request) {
    let user: User
    let hashedPassword: string = ''
    const res = await request.json()

    try {
        hashedPassword = await passwordValidation(res.password, res.confirmPassword)
    } catch(e: any){
        return NextResponse.json({"error": {"type": e.name}}, {status: e.status,});
    }

    const users: Users = new Users()
    try {
        user = await users.execute().signup(
            {
                email: res.email,
                firstName: res.firstName,
                lastName: res.lastName,
                phoneNumber: res.phoneNumber,
                password: hashedPassword,
                birthDate: res.birthDate,
                dateCreation: new Date().toJSON()
            }
        )
        return NextResponse.json(Users.exclude(user, ['password']), {status: 200,});
    } catch (e: any) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                return NextResponse.json({'error': {"type": "ValidationEmailError"}}, {status: 401,});
            }
        }
    }

}