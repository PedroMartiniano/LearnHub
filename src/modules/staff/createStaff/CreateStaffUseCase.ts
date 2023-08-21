import { prisma } from "../../../lib/prisma";
import { Staff } from "../../../types/staff-data";

export class CreateStaffUseCase {
    async execute(staff: Staff) {
        try {
            const { first_name, last_name, cpf } = staff
            const regis_date = new Date()

            const staffData = await prisma.staff.create({
                data: {
                    first_name,
                    last_name,
                    cpf,
                    regis_date
                }
            })

            return staffData

        } catch {
            return null
        }
    }
}