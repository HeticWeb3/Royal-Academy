import bcrypt from 'bcrypt'
import {ValidationError} from "@/app/api/shared/api/apiError";

export async function passwordValidation(password: string, confirmPassword: string): Promise<string> {
    if(password == confirmPassword){
        return await bcrypt.hash(password, 10)
    } else {
        throw new ValidationError('Les mots de passe ne correspondent pas, veuillez réessayer.')
    }
}
