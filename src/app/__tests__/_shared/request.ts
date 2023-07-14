import {POST as loginAPI} from "@/app/api/auth/login/route";

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`
export const mockRequest = (url: string, method: string = 'GET', body: {} | null = null) => {

    return new Request(BASE_URL+url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

export const getLogged = async (email: string, password: string) => {
    const request = mockRequest("/api/auth/login", 'POST', {
        loginEmail: email,
        loginPassword: password,
    })

    const login = await loginAPI(request)
    const data = await login.json()

    return [data.accessToken, login.cookies.get('refreshToken')]
}
