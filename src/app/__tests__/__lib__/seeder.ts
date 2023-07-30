import {mockRequest} from "@/app/__tests__/__lib__/request";
import {POST as signupAPI} from "@/app/api/auth/signup/route";

export const userGenerator = async (email: string) => {
    const request = mockRequest("/api/auth/signup", 'POST', {
        firstName: 'James',
        lastName: 'Test',
        birthDate: '1998-07-10T07:42:33.544Z',
        phoneNumber: '0787989834',
        email: email,
        password: 'mdppass',
        confirmPassword: 'mdppass',
    })

    const signup = await signupAPI(request)

    if(signup){
        return await signup.json()
    }
}