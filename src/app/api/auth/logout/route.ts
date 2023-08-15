import { NextResponse } from 'next/server';

import {cookies} from "next/headers";

/**
 * Supprime le refresh token de l'utilisateur connecté
 *
 * @param request
 * @constructor
 * @return Promise<NextResponse>
 */
export async function POST(request: Request){

    return NextResponse.json({'success': 'Vous êtes déconnecté'},{status: 200, headers: {'Set-Cookie': `refreshToken='';Domain=${process.env.HOST};Path=/api/auth/refreshtoken;Expires=0;HttpOnly;SameSite=Strict;Max-Age=0`}});
}