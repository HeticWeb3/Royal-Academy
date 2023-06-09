import jwt from "jsonwebtoken"

export const generateTokens = (userID: number, expires: {'expireAccess': string, 'expireRefresh': string}) => {
    const accessToken: string =  jwt.sign({id: userID}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: expires.expireAccess})
    const refreshToken: string =  jwt.sign({id: userID}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: expires.expireAccess})
    return [accessToken, refreshToken]
}