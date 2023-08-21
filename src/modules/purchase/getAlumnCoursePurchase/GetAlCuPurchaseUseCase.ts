import { AppError } from "../../../error/AppError";
import { prisma } from "../../../lib/prisma";

export class GetAlCuPurchaseUseCase {
    async execute(id_alumn: string, id_course: string) {
        try {
            const purchase = await prisma.purchase.findMany({
                where: {
                    id_alumn,
                    id_course,
                    status: 1
                }
            })



            if (purchase[0]) {
                return ({
                    success: true,
                    purchase: purchase[0]
                })
            }

            return ({
                success: false
            })
        } catch {
            throw new AppError('something went wrong', 400)
        }
    }
}