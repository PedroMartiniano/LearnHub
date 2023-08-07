import { prisma } from "../../../lib/prisma";

export class DeleteModuleUseCase {
    async execute(id: string) {
        try {
            await prisma.module.update({
                where: {
                    id
                },
                data: {
                    status: 0
                }
            })

            return ({
                success: true,
                message: "Module successfully deleted"
            })
        } catch {
            return ({
                success: false,
                message: "something went wrong"
            })
        }
    }
}