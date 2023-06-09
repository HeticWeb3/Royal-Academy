import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken"

import {generateTokens} from "@/app/api/shared/api/jwt";
import {Users} from "../../../../../prisma/repository/user/user";
import {getFutureDate} from "@/app/api/shared/utils";


export async function GET(request: Request){
    let user

    const cookieStore = cookies()
    const refreshToken = cookieStore.get('refreshToken')

    if (refreshToken == undefined){
        return redirect('/login')
    }

    try {
        user = jwt.verify(refreshToken.value, process.env.REFRESH_TOKEN_SECRET)
    } catch(e){
        return redirect('/login')
    }

    delete user.iat;
    delete user.exp;

    const [accessToken, newRefreshToken] = generateTokens(user.id, {'expireAccess': '8h', 'expireRefresh': '30d'})

    const expireDate: string = getFutureDate(30)

    return NextResponse.json(
        {'accessToken': accessToken},
        {status: 200, headers: {'Set-Cookie': `refreshToken=${newRefreshToken};Domain=${process.env.HOST};Path=/api/auth/refreshtoken;Expires=${expireDate};HttpOnly;SameSite=Strict`}}
    );
}