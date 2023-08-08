import { prisma } from "../../../lib/prisma";

export class DeleteTestUseCase {
    async execute(id: string) {
        try {
            await prisma.test.update({
                where: {
                    id
                },
                data: {
                    status: 0
                }
            })

            return ({
                success: true,
                message: "test successfully deleted"
            })
        } catch {
            return ({
                success: false,
                message: "Something went wrong"
            })
        }
    }
}