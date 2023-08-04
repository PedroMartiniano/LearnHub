import { prisma } from "../../../lib/prisma";

export class GetUserStatusUseCase {
    async execute(id: string) {
        const status = await prisma.users.findUnique({
            where: {
                id
            }
        })

        if(status?.status === 1){
            return 1
        }

        return 0
    }
}