import {POST as loginAPI} from "@/app/api/auth/login/route";

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`
export const mockRequest = (url: string,
                            method: string = 'GET',
                            body: {} | null = null,
                            token: string | null = null,
                            cookie: string | null = null) => {

    const request = new Request(BASE_URL+url, {
        method: method,
        body: method != 'GET' ? JSON.stringify(body) : null,
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if(token){
        request.headers.append('Authorization', `Bearer ${token}`)
    }

    if(cookie){
        request.headers.append('Cookie', cookie)
    }

    return request
}

export const getLogged = async (email: string, password: string) => {
    const request = mockRequest("/api/auth/login", 'POST', {
        loginEmail: email,
        loginPassword: password,
    })

    const login = await loginAPI(request)
    const data = await login.json()

    return [data.accessToken, login.cookies.get('refreshToken')?.value]
}
