import * as jose from "jose"
import {TokenError} from "@/app/api/shared/api/apiError";

export const generateTokens = async (userID: unknown, expires: {'expireAccess': string, 'expireRefresh': string}) => {
    const accessSecret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
    const refreshSecret = new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET)
    const alg = 'HS256'

    const accessToken: string = await new jose.SignJWT({'id': userID})
        .setProtectedHeader({ alg })
        .setExpirationTime(expires.expireAccess)
        .sign(accessSecret)

    const refreshToken: string = await new jose.SignJWT({'id': userID})
        .setProtectedHeader({ alg })
        .setExpirationTime(expires.expireRefresh)
        .sign(refreshSecret)

    return [accessToken, refreshToken]
}

export const isLogged = async (token: string | null) => {
    let jwt;
    const accessSecret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)

    if(token == null){
        throw new TokenError("User not authenticated")
    }

    token = token.replace('Bearer ', "")

    try {
        jwt = await jose.jwtVerify(token, accessSecret)
    } catch(e){
        throw new TokenError("User not authenticated")
    }

    return jwt.payload
}