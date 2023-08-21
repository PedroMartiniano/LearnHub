import { prisma } from "../../../lib/prisma";
import { Id_user } from "../../../types/id-user-data";

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

            const id_user: Id_user[] = await prisma.$queryRaw`
                SELECT u.id
                FROM users u
                INNER JOIN staff s ON u.id_staff = s.id
                WHERE s.id = ${id}
            `

            const id_user_data: string = id_user[0].id

            await prisma.users.update({
                where: {
                    id: id_user_data
                },
                data: {
                    status: 0
                }
            })

            return ({
                success: true,
                message: "User successfully deleted"
            })
        } catch {
            return ({
                success: false,
                message: "Something went wrong"
            })
        }
    }
}