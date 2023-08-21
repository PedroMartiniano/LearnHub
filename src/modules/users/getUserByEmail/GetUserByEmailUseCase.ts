import { prisma } from "../../../lib/prisma";

export class GetUserByEmailUseCase {
    async execute(email: string) {
        try {
            const user = await prisma.users.findUnique({
                where: {
                    email
                }
            })

            return user

        } catch {
            return null
        }
    }
}