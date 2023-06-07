import { PrismaClient, Utilisateur } from '@prisma/client'

type Signup = {
    email: string,
    prenom: string,
    nom: string,
    password: string
}

export class Utilisateurs {
    constructor(private prisma: PrismaClient['utilisateur'] = new PrismaClient().utilisateur) {}

    execute(prismaUtilisateur = this.prisma) {
        return Object.assign(prismaUtilisateur, {

            async signup(data: Signup): Promise<Utilisateur> {
                return prismaUtilisateur.create({ data })
            },
        })
    }

    static exclude<Utilisateur, Key extends keyof Utilisateur>(utilisateur: Utilisateur, keys: Key[]): Omit<Utilisateur, Key> {
        for (let key of keys) {
            delete utilisateur[key]
        }
        return utilisateur
    }
}