import { MockContext, Context, createMockContext } from '../../sharedTests/configTests/context'
import { createUser, updateUsername } from '../../sharedTests/sharedTestUser'
import {Course, Instrument, Style} from ".prisma/client";
import {getTeacher} from "@/app/sharedTests/sharedTestTeacher";

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
})

test('get teacher information', async () => {
    const teacher = {
        id: 2,
        email: 'test@test',
        lastName: 'Pierrot',
        firstName: 'Plasma',
        description: 'Ouais je suis prof et je suis vraiment fort',
        school: 'Ecole 144',
        dateOfBirth: '2003-07-01',
        titleWin: 'Je suis le boss',
        diploma: 'diplome du bg',
        career: 'jai fais ça et ça',
        course: 1,
        instrument: 4,
        style: 3,
    }
    // @ts-ignore
    mockCtx.prisma.teacher.get.mockResolvedValue(teacher)

    await expect(getTeacher(teacher, ctx)).resolves.toEqual({
            id: 2,
            email: 'test@test',
            lastName: 'Pierrot',
            firstName: 'Plasma',
            description: 'Ouais je suis prof et je suis vraiment fort',
            school: 'Ecole 144',
            dateOfBirth: '2003-07-01',
            titleWin: 'Je suis le boss',
            diploma: 'diplome du bg',
            career: 'jai fais ça et ça',
            course: 1,
            instrument: 4,
            style: 3,
    })
})