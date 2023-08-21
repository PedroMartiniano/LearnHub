import { prisma } from "../../../lib/prisma";

export class DeleteModuleUseCase {
    async execute(id: string) {
        try {
            await prisma.module.updateMany({
                where: {
                    id_course: id
                },
                data: {
                    status: 0
                }
            })

            return ({
                success: true,
                message: "Modules successfully deleted"
            })
        } catch {
            return ({
                success: false,
                message: "something went wrong"
            })
        }
    }
}