import bcrypt from 'bcrypt'

export async function passwordValidation(password: string, confirmPassword: string): Promise<string> {
    if(password == confirmPassword){
        return await bcrypt.hash(password, 10)
    }

    return false
}
