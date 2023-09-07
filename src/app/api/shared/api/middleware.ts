import {JWTPayload} from "jose";
import {isLogged} from "@/app/api/shared/api/auth";
import {NextRequest, NextResponse} from "next/server";

/**
 * Vérifie si un utilisateur est connecté sur une route protégée
 * @param request
 */
export const middlewareLoginCheck = async (request: NextRequest) => {
    let user: JWTPayload
    const requestHeaders = new Headers(request.headers)
    const authorization: string | null = requestHeaders.get('Authorization')

    try {
        user = await isLogged(authorization)
    } catch(e: any) {
        return  NextResponse.json({"error": {"type": e.name}}, {status: e.status,});
    }

    requestHeaders.set('userID', <string>user.id)

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })
}

/**
 * Vérifie si url match une route
 * @param pathname URL actuel
 * @param routes Liste de routes
 */
export const routeMatcher = (pathname: string, routes: string[]): boolean => {
    for (const route of routes) {
        if(pathname.match(route)){
            return true
        }
    }
    return false
}