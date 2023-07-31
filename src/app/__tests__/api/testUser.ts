import {headers} from "next/headers";
import {User} from "@prisma/client";

import {GET as meAPI} from "../../api/user/me/route";

import {GET as userGET, PATCH as userPATCH, DELETE as userDELETE} from "../../api/user/[userId]/route"

import {getLogged, mockRequest} from "../__lib__/request";
import {userGenerator} from "../__lib__/seeder";


let user: User

jest.mock('next/headers')

beforeAll(async () => {
    user = await userGenerator('user@user.com')
})

afterEach(() => {
    jest.resetAllMocks();
});

describe('/api/user/me', () => {
    test('Should return the logged user informations', async ()=> {
        const mockHeaders = headers as jest.Mock

        mockHeaders.mockImplementation(() => ({
            get: jest.fn().mockReturnValue(user.id)
        }))

        const [accessToken, refreshToken]= await getLogged('user@user.com', 'mdppass')

        const request = mockRequest("/api/user/me", 'GET', null, accessToken, `refreshToken=${refreshToken}`)

        const res = await meAPI(request)

        if(res){
            const data = await res.json()
            expect(data).toEqual(user)
        }
    })
})

describe('/api/user/[userId]', () => {
    test('Should return the informations of a user', async ()=> {
        const request = mockRequest(`/api/user/${user.id}`)

        const res = await userGET(request,{'params': {'userId': user.id}})

        if(res){
            const data = await res.json()
            expect(data).toEqual(expect.objectContaining({
                lastLesson: null,
                instrument: [],
                school: null,
                style: null,
            }))
        }
    })

    test('Should return an error', async ()=> {
        const request = mockRequest(`/api/user/8090`)

        const res = await userGET(request,{'params': {'userId': 8090}})

        if(res){
            const data = await res.json()
            expect(data).toEqual({'error': {"type": "UserNotFound"}})
        }
    })
})