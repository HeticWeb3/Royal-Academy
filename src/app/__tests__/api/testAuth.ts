import {cookies} from 'next/headers';

import {POST as signupAPI} from "@/app/api/auth/signup/route"
import {POST as loginAPI} from "@/app/api/auth/login/route"
import {GET as refreshAPI} from "@/app/api/auth/refreshtoken/route"

import {getLogged, mockRequest} from "@/app/__tests__/__lib__/request";


jest.mock('next/headers')

afterEach(() => {
    jest.resetAllMocks();
});

describe('/api/auth/signup', () => {
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

        const signup = await signupAPI(request)

        if (signup) {
            const data = await signup.json()
            expect(data).toEqual(expect.objectContaining({id: expect.any(Number), instrumentId: null}))
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

        const signup = await signupAPI(request)

        if (signup) {
            const data = await signup.json()
            expect(data).toMatchObject({error: {type: "ValidationEmailError"}})
        }
    })
})


describe("/api/auth/login", () => {

    test("Should return an access token and a refresh token", async () => {
        const request = mockRequest("/api/auth/login", 'POST', {
            loginEmail: 'test1@prisma.io',
            loginPassword: 'mdppass',
        })
        const login = await loginAPI(request)

        if(login){
            const data = await login.json()
            expect(data).toEqual(expect.objectContaining({accessToken: expect.any(String)}))
            expect(login.cookies.get('refreshToken')?.value).toEqual(expect.any(String))
        }
    })


    test("Should return an error", async () => {
        const request = mockRequest("/api/auth/login", 'POST', {
            loginEmail: 'test1@prisma.io',
            loginPassword: 'mdppass!',
        })
        const login = await loginAPI(request)

        if(login){
            const data = await login.json()
            expect(data).toMatchObject({error: "Authentication error"})
        }
    })
})

describe('/api/auth/refreshtoken', () => {
    test('Should return a new access token', async ()=> {
        const mockCookies = cookies as jest.Mock

        const [accessToken, refreshToken] = await getLogged('test1@prisma.io', 'mdppass')

        mockCookies.mockImplementation(() => ({
            get: jest.fn().mockReturnValue({"value": refreshToken})
        }))

        const request =  mockRequest("/api/auth/refreshtoken", 'GET', null, null, `refreshToken=${refreshToken}`)

        const refresh = await refreshAPI(request)

        if(refresh){
            const data = await refresh.json()
            expect(data).toEqual(expect.objectContaining({accessToken: expect.any(String)}))
        }
    })

    test('Should return an error', async ()=> {
        const mockCookies = cookies as jest.Mock;

        const [accessToken, refreshToken] = await getLogged('test1@prisma.io', 'mdppass')

        mockCookies.mockImplementation(() => ({
            get: jest.fn().mockReturnValue(undefined)
        }))

        const request =  mockRequest("/api/auth/refreshtoken", 'GET', null, null, `refreshToken=${refreshToken}`)

        const refresh = await refreshAPI(request)

        if(refresh){
            const data = await refresh.json()
            expect(data).toEqual({'error': {'type': 'TokenError'}})
        }
    })
})
