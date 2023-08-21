import { prisma } from "../../../lib/prisma";
import { Staff } from "../../../types/staff-data";

export class EditStaffUseCase {
    async execute(staff: Staff, id: string) {
        try {
            const { first_name, last_name, cpf } = staff

            await prisma.staff.update({
                where: {
                    id
                },
                data: {
                    first_name,
                    last_name,
                    cpf
                }
            })

            return ({
                success: true,
                message: "Staff successfully edited"
            })
        } catch {
            return ({
                success: false,
                message: "Something went wrong"
            })
        }
    }
}