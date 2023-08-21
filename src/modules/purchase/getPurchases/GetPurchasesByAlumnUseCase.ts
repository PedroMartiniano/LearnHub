import { prisma } from "../../../lib/prisma";

export class GetPurchaseByAlumnUseCase {
    async execute(id_user: string) {
        try {
            const alumnPurchases = await prisma.$queryRaw`
                SELECT A.first_name, A.last_name, C.name, C.description, C.price, P.status status_purchase
                FROM Purchase P
                INNER JOIN Alumn A ON P.id_alumn = A.id
                INNER JOIN Course C ON P.id_course = C.id
                WHERE P.id_alumn = ${id_user}
            `

            return alumnPurchases
        } catch {
            return null
        }
    }
}