import { prisma } from "../../../lib/prisma";

export class GetStaffByCpfUseCase {
    async execute(cpf: string) {
        try {
            const staff = await prisma.staff.findUnique({
                where: {
                    cpf
                }
            })

            return staff
        } catch {
            return null
        }
    }
}