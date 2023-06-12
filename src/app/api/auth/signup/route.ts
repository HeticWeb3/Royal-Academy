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
        return NextResponse.json({"error": {"message": e.message, "error": e.name}}, {status: e.status,});
    }

    const users: Users = new Users()
    const user: User = await users.execute().signup(
        {
            email: res.email,
            firstname: res.firstname,
            lastname: res.lastname,
            phoneNumber: res.phoneNumber,
            password: hashedPassword,
            dateCreation: res.dateCreation
        }
    )
    return NextResponse.json({"res": Users.exclude(user, ['password'])}, {status: 200,});
}