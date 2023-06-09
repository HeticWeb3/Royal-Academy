import { NextResponse } from 'next/server';
import { Users } from "../../../../../prisma/repository/user/user";
import bcrypt from "bcrypt";
import {generateToken} from "@/app/api/shared/api/jwt";

export async function POST(request: Request){
    const res = await request.json()
    const users: Users = new Users()


    const user = await users.execute().findUnique({
        where: {
            email: res.email
        }
    })

    if(bcrypt.compareSync(res.password, user.password)){
        const userExclude = Users.exclude(user, ["password"])

        const accessToken = generateToken(userExclude, process.env.ACCESS_TOKEN_SECRET, '8h')
        const refreshToken = generateToken(userExclude, process.env.REFRESH_TOKEN_SECRET, '30d')

        const today: Date = new Date()
        const expireDate: string = new Date(new Date().setDate(today.getDate() + 30)).toUTCString()

            return NextResponse.json(
                {'accessToken': accessToken},
                {status: 200, headers: {'Set-Cookie': `refreshToken=${refreshToken};Domain=${process.env.HOST};Path=/api/auth/refreshtoken;Expires=${expireDate};HttpOnly;SameSite=Strict`}}
            );
    }
}