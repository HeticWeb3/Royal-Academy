import { NextResponse } from 'next/server';
import { headers } from 'next/headers'
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken"

import {Users} from "../../../../../prisma/repository/user/user";


export async function POST(request: Request){
    let tokenUser;

    const users: Users = new Users()
    const headersList = headers()
    const authorization: string | null = headersList.get('Authorization')

    if (authorization == null){
        return redirect('/login')
    }

    const token = authorization.replace('Bearer ', "")

    try {
        tokenUser = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    } catch(e){
        return redirect('/login')
    }

    const user = await users.execute().findUnique({
        where: {
            id: tokenUser.id
        }
    })

    return NextResponse.json(Users.exclude(user, ['password']), {status: 200});
}