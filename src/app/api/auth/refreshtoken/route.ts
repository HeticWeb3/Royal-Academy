import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken"

import {generateToken} from "@/app/api/shared/api/jwt";
import {Users} from "../../../../../prisma/repository/user/user";


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

    const accessToken = generateToken(user, process.env.ACCESS_TOKEN_SECRET, '8h')
    const newRefreshToken = generateToken(user, process.env.REFRESH_TOKEN_SECRET, '30d')

    const today: Date = new Date()
    const expireDate: string = new Date(new Date().setDate(today.getDate() + 30)).toUTCString()

    return NextResponse.json(
        {'accessToken': accessToken},
        {status: 200, headers: {'Set-Cookie': `refreshToken=${newRefreshToken};Domain=${process.env.HOST};Path=/api/auth/refreshtoken;Expires=${expireDate};HttpOnly;SameSite=Strict`}}
    );
}