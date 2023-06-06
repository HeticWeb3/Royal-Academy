import { PrismaClient, Utilisateur } from '@prisma/client'

type Signup = {
    email: string,
    prenom: string,
    nom: string,
}

export class Utilisateurs {
    constructor(private prisma: PrismaClient['utilisateur'] = new PrismaClient().utilisateur) {

    }

    execute(prismaUtilisateur = this.prisma) {
        return Object.assign(prismaUtilisateur, {

            async signup(data: Signup): Promise<Utilisateur> {
                return prismaUtilisateur.create({ data })
            },
        })
    }
}