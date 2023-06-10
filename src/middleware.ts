import { headers } from 'next/headers'
import { redirect } from "next/navigation";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {isLogged} from "@/app/api/shared/api/auth";

export async function middleware(request: NextRequest) {
    let user
    const requestHeaders = new Headers(request.headers)
    const authorization: string | null = requestHeaders.get('Authorization')

    try {
        user = await isLogged(authorization)
    } catch(e: any) {
        return  NextResponse.json({"error": {"type": e.name}}, {status: e.status,});
    }

    requestHeaders.set('userID', user.id)

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })
}

export const config = {
    matcher: ['/api/user/:path*'],
}