import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import * as jose from "jose"

import {generateTokens} from "@/app/api/shared/api/auth";
import {getFutureDate} from "@/app/api/shared/utils";
import type {JWTVerifyResult} from "jose";

/**
 * Actualise le token d'un utilisateur
 *
 * @param request
 * @constructor
 * @return Promise<NextResponse> (Access token et refresh cookie dans l'header de la requête)
 */
export async function GET(request: Request){
    let jwt: JWTVerifyResult

    const cookieStore = cookies()
    const refreshToken = cookieStore.get('refreshToken')

    if (refreshToken == undefined){
        return NextResponse.json({'error': {'type': 'TokenError'}}, {status: 400})
    }

    const refreshSecret = new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET)

    try {
        jwt = await jose.jwtVerify(refreshToken.value, refreshSecret)
    } catch(e){
        return NextResponse.json({'error': {'type': 'TokenError'}}, {status: 400})
    }

    const [accessToken, newRefreshToken] = await generateTokens(jwt.payload.id, {'expireAccess': '8h', 'expireRefresh': '30d'})

    const expireDate: string = getFutureDate(30)

    return NextResponse.json(
        {'accessToken': accessToken},
        {status: 200, headers: {'Set-Cookie': `refreshToken=${newRefreshToken};Domain=${process.env.HOST};Path=/api/auth/refreshtoken;Expires=${expireDate};HttpOnly;SameSite=Strict`}}
    );
}