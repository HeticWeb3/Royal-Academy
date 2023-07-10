import type { NextRequest } from 'next/server'
import {middlewareLoginCheck, routeMatcher} from "./app/api/shared/api/middleware";

export async function middleware(request: NextRequest) {

    if(routeMatcher(request.nextUrl.pathname, protectedAPIRoutes)){
        return await middlewareLoginCheck(request)
    }
}

const protectedAPIRoutes = [
    '/api/user/.*', '/api/course',
]