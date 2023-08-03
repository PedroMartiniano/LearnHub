import { prisma } from "../../../lib/prisma";

export class GetUserByIdUseCase {
    async execute(id: string) {
        try {
            const user = await prisma.users.findUnique({
                where: {
                    id
                }
            })

            return user

        } catch {
            return null
        }
    }
}