import { prisma } from "../../../lib/prisma";

export class DeleteAlumnUseCase {
    async execute(id: string) {
        try {
            await prisma.alumn.update({
                where: {
                    id
                },
                data: {
                    status: 0
                }
            })

            return ({
                success: true,
                message: "Alumn successfully deleted"
            })
        } catch {
            return ({
                success: false,
                message: "something went wrong"
            })
        }
    }
}