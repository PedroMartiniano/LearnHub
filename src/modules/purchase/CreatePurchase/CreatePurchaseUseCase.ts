import { prisma } from "../../../lib/prisma";
import { PurchaseData } from "../../../types/purchase-data";

export class CreatePurchaseUseCase {
    async execute(purchase: PurchaseData) {
        try {
            const { id_user, id_course } = purchase

            const purchase_date = new Date()

            await prisma.purchase.create({
                data: {
                    id_alumn: id_user,
                    id_course,
                    purchase_date
                }
            })

            return ({
                success: true,
                message: "Purchasse completed"
            })
        } catch {
            return ({
                success: false,
                message: "Purchasse failed"
            })

        }
    }
}