import { NextResponse } from 'next/server';
import {Users} from "../../../../../prisma/repository/user/user";
import {passwordValidation} from "@/app/api/shared/user/validations";
import {User} from "@prisma/client";

export async function POST(request: Request) {
    let hashedPassword: string = ''
    const res = await request.json()

    try {
        hashedPassword = await passwordValidation(res.password, res.confirmPassword)
    } catch(e: any){
        return NextResponse.json({"error": {"type": e.name}}, {status: e.status,});
    }

    const users: Users = new Users()
    const user: User = await users.execute().signup(
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
}