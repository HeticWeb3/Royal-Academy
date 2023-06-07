import { NextResponse } from 'next/server';
import {Utilisateurs} from "../../../../../prisma/repository/utilisateur/utilisateur";
import {passwordValidation} from "@/app/api/shared/utilisateur/validations";
import {Utilisateur} from "@prisma/client";

export async function POST(request: Request) {
    const res = await request.json()

    const hashedPassword: string = await passwordValidation(res.password, res.confirmPassword)

    const utilisateurs: Utilisateurs = new Utilisateurs()
    const utilisateur: Utilisateur = await utilisateurs.execute().signup(
        {
            email: res.email,
            prenom: res.prenom,
            nom: res.nom,
            password: hashedPassword
        }
    )

    return NextResponse.json({"res": Utilisateurs.exclude(utilisateur, ['password'])}, {status: 200,});
}