import { NextResponse } from 'next/server';
import { Users } from "../../../../../prisma/repository/user/user";
import bcrypt from "bcrypt";
import {generateTokens} from "@/app/api/shared/api/jwt";
import {getFutureDate} from "@/app/api/shared/utils";

export async function POST(request: Request){
    const res = await request.json()
    const users: Users = new Users()


    const user = await users.execute().findUnique({
        where: {
            email: res.email
        }
    })

    if(bcrypt.compareSync(res.password, user.password)){
        const [accessToken, refreshToken] = generateTokens(user.id, {'expireAccess': '8h', 'expireRefresh': '30d'})

        const expireDate: string = getFutureDate(30)

            return NextResponse.json(
                {'accessToken': accessToken},
                {status: 200, headers: {'Set-Cookie': `refreshToken=${refreshToken};Domain=${process.env.HOST};Path=/api/auth/refreshtoken;Expires=${expireDate};HttpOnly;SameSite=Strict`}}
            );
    }
}