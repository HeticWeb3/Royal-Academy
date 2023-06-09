import type {User} from "@prisma/client";
import jwt from "jsonwebtoken"

export const generateToken = (user: Omit<User | null, never>, tokenSecret: string, expires: string) => {
    return jwt.sign(user, tokenSecret, {expiresIn: expires})
}