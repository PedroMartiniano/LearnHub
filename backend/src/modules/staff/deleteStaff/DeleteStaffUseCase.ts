import { prisma } from "../../../lib/prisma";

export class DeleteStaffUseCase {
    async execute(id: string) {
        try {
            await prisma.staff.update({
                where: {
                    id
                },
                data: {
                    status: 0
                }
            })

            return ({
                success: true,
                message: "Staff successfully deleted"
            })
        } catch {
            return ({
                success: false,
                message: "Something went wrong"
            })
        }
    }
}