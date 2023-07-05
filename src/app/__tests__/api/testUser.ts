import { MockContext, Context, createMockContext } from '../../sharedTests/context'
import { createUser, updateUsername } from '../../sharedTests/sharedTestUser'

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
})

test('should create new user ', async () => {
    const user = {
        id: 3,
        firstName: 'James',
        lastName: 'Test',
        birthDate: '2003-07-01',
        phoneNumber: '0787989834',
        email: 'hellotest@prisma.io',
        password: 'mdppass',
        dateCreation: '2023-07-03',
    }
    // @ts-ignore
    mockCtx.prisma.user.create.mockResolvedValue(user)

    await expect(createUser(user, ctx)).resolves.toEqual({
        id: 3,
        firstName: 'James',
        lastName: 'Test',
        birthDate: '2003-07-01',
        phoneNumber: '0787989834',
        email: 'hellotest@prisma.io',
        password: 'mdppass',
        dateCreation: '2023-07-03',
    })
})

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
})
