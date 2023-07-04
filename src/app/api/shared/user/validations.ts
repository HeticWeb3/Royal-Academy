import bcrypt from 'bcrypt'
import {ValidationError} from "@/app/api/shared/api/apiError";

/**
 *
 * @param password
 * @param confirmPassword
 * @return Promise<string> (le mot de passe vérifié)
 */
export async function passwordValidation(password: string, confirmPassword: string): Promise<string> {
    if(password == confirmPassword){
        return await bcrypt.hash(password, 10)
    } else {
        throw new ValidationError('Les mots de passe ne correspondent pas, veuillez réessayer.')
    }
}
