import { prisma } from "../../../lib/prisma";

export class GetModuleOrderUseCase {
    async execute(order: number, id_course: string) {
        try {
            const moduleOrder = await prisma.module.findMany({
                where: {
                    order,
                    id_course
                }
            })

            if(!moduleOrder[0]){
                return false
            }

            return true
        } catch {
            return false
        }
    }
}