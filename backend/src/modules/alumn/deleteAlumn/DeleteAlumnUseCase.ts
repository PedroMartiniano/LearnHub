import { prisma } from "../../../lib/prisma";
import { Id_user } from "../../../types/id-user-data";


export class DeleteAlumnUseCase {
    async execute(id: string) {
        try {
            await prisma.alumn.update({
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
                INNER JOIN alumn a ON u.id_alumn = a.id
                WHERE a.id = ${id}
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
                message: "something went wrong"
            })
        }
    }
}