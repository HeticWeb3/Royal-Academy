import {POST as signupPost} from "@/app/api/auth/signup/route"


const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`
const mockRequest = (url: string, method: string = 'GET', body: {} | null = null) => {

    return new Request(BASE_URL+url, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
}

describe('api/auth/signup', () => {

    test('Should create a user', async () => {
        const request = mockRequest("/api/auth/signup", 'POST', {
            firstName: 'James',
            lastName: 'Test',
            birthDate: '1998-07-10T07:42:33.544Z',
            phoneNumber: '0787989834',
            email: 'test1@prisma.io',
            password: 'mdppass',
            confirmPassword: 'mdppass',
        })


        let signup = await signupPost(request)
        if (signup) {
            const data = await signup.json()
            expect(data).toEqual(expect.objectContaining({id: 1, instrumentId: null}))
        }
    })

    test('Should return an error', async () => {
        const request = mockRequest("/api/auth/signup", 'POST', {
            firstName: 'James',
            lastName: 'Test',
            birthDate: '1998-07-10T07:42:33.544Z',
            phoneNumber: '0787989834',
            email: 'test1@prisma.io',
            password: 'mdppass',
            confirmPassword: 'mdppass',
        })


        let signup = await signupPost(request)
        if (signup) {
            const data = await signup.json()
            expect(data).toMatchObject({error: {type: "ValidationEmailError"}})
        }
    })
})
