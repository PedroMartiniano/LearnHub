import { prisma } from "../../../lib/prisma";

export class GetStaffByIdUseCase {
    async execute(id: string) {
        try {
            const staff = await prisma.staff.findUnique({
                where: {
                    id
                }
            })

            return staff

        } catch {
            return null
        }
    }
}