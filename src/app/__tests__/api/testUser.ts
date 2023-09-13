import {headers} from "next/headers";
import {User} from "@prisma/client";

import {GET as meGET, PATCH as mePATCH} from "../../api/user/me/route";
import {DELETE as userDELETE} from "../../api/user/delete/route";
import {GET as userGET} from "../../api/user/[userId]/route"

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

        const res = await meGET(request)

        if(res){
            const data = await res.json()
            expect(data).toEqual(expect.objectContaining(user))
        }
    })

    test('Should update the logged user\'s informations', async ()=> {
        const mockHeaders = headers as jest.Mock
        mockHeaders.mockImplementation(() => ({
            get: jest.fn().mockReturnValue(user.id)
        }))

        const [accessToken, refreshToken]= await getLogged('user@user.com', 'mdppass')

        const request = mockRequest("/api/user/me", 'PATCH', {firstName: "new firstname", addInstrument: [], delInstrument: []}, accessToken, `refreshToken=${refreshToken}`)

        const res = await mePATCH(request)

        if(res){
            const data = await res.json()
            expect(data).toEqual(expect.objectContaining({firstName: "new firstname"}))
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
                Instruments: [],
                school: null,
                Styles: [],
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

    describe('/api/user/delete', ()=> {
        test('Should delete a user', async () => {
            const userDelete = await userGenerator('user@delete.com')

            const mockHeaders = headers as jest.Mock
            mockHeaders.mockImplementation(() => ({
                get: jest.fn().mockReturnValue(userDelete.id)
            }))



            const [accessToken, refreshToken]= await getLogged('user@delete.com', 'mdppass')

            const request = mockRequest(`/api/user/delete`,'DELETE', null, accessToken)

            const res = await userDELETE(request)

            if(res){
                const data = await res.json()
                expect(data).toEqual(expect.objectContaining(userDelete))
            }
        })
    })
})