import { prisma } from "../../../lib/prisma";

export class CancelPurchaseUseCase {
    async execute(id_alumn: string, id_course: string) {
        try {
            await prisma.purchase.updateMany({
                where: {
                    id_alumn,
                    id_course
                },
                data: {
                    status: 0
                }
            })

            return ({
                success: true,
                message: "Purchase canceled successfully"
            })
        } catch {
            return ({
                success: false,
                message: "Something went wrong"
            })
        }
    }
}