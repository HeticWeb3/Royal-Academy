import {NextResponse} from "next/server";
import {Users} from "../../../../prisma/repository/user/user";
import {Ranks} from "../../../../prisma/repository/rank/rank";


export async function GET(request: Request) {
    const users = new Users()
    const userList = await users.execute().findMany({
        include: {
            badge: true
        },
    });


    const test = (user) => {
        let totalPoints = 0;
        for (const badge of user.badge) {

            totalPoints += badge.point;

        }
        user.totalPoint = totalPoints;
        return user
    }

    const userL = userList.map(user => test(user))


    return NextResponse.json(userL, {status: 200,})

    const ranks = new Ranks()
    const rank = await ranks.execute().update()

}