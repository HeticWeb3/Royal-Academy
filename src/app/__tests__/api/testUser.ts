import {headers} from "next/headers";

import {getLogged, mockRequest} from "../__lib__/request";
import {GET as meAPI} from "../../api/user/me/route";
import {userGenerator} from "../__lib__/seeder";
import {User} from "@prisma/client";

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