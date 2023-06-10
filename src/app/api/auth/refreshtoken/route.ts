import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import * as jose from "jose"

import {generateTokens} from "@/app/api/shared/api/auth";
import {getFutureDate} from "@/app/api/shared/utils";


export async function GET(request: Request){
    let jwt

    const cookieStore = cookies()
    const refreshToken = cookieStore.get('refreshToken')

    if (refreshToken == undefined){
        return redirect('/login')
    }

    const refreshSecret = new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET)

    try {
        jwt = await jose.jwtVerify(refreshToken.value, refreshSecret)
    } catch(e){
        return redirect('/login')
    }

    const [accessToken, newRefreshToken] = await generateTokens(jwt.payload.id, {'expireAccess': '8h', 'expireRefresh': '30d'})

    const expireDate: string = getFutureDate(30)

    return NextResponse.json(
        {'accessToken': accessToken},
        {status: 200, headers: {'Set-Cookie': `refreshToken=${newRefreshToken};Domain=${process.env.HOST};Path=/api/auth/refreshtoken;Expires=${expireDate};HttpOnly;SameSite=Strict`}}
    );
}