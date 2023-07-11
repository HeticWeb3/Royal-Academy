import {POST as signupPost} from "@/app/api/auth/signup/route"



const URL = `http://${process.env.HOST}:${process.env.PORT}`
const mockRequest = (method: string = 'GET', body: {} | null = null) => {

    return new Request(`${URL}/api/auth/signup`, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
}

test('should create a new user', async () => {
    const request = mockRequest('POST', {
        firstName: 'James',
        lastName: 'Test',
        birthDate: '1998-07-10T07:42:33.544Z',
        phoneNumber: '0787989834',
        email: 'test1@prisma.io',
        password: 'mdppass',
        confirmPassword: 'mdppass',
    })


    let signup = await signupPost(request)
    signup.json().then(res => console.log(res))

/*
    await expect(user).resolves.toEqual({
        id: 3,
        firstName: 'James',
        lastName: 'Test',
        birthDate: '2003-07-01',
        phoneNumber: '0787989834',
        email: 'hellotest@prisma.io',
        password: 'mdppass',
        dateCreation: '2023-07-03',
    })*/
})

/*
test('should update a users name ', async () => {
    const user = {
        id: 3,
        firstName: 'James',
        lastName: 'Boss',
        birthDate: '2003-07-01',
        phoneNumber: '0787989834',
        email: 'JamesBoss@prisma.io',
        password: 'mdppass',
    }
    // @ts-ignore
    mockCtx.prisma.user.update.mockResolvedValue(user)

    await expect(updateUsername(user, ctx)).resolves.toEqual({
        id: 3,
        firstName: 'James',
        lastName: 'Boss',
        birthDate: '2003-07-01',
        phoneNumber: '0787989834',
        email: 'JamesBoss@prisma.io',
        password: 'mdppass',
    })
})*/
