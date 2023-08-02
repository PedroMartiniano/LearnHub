import { prisma } from "../../../lib/prisma";
import { Staff } from "../../../types/staff-data";

export class CreateStaffUseCase {
    async execute(staff: Staff) {
        try {
            const { first_name, last_name, cpf } = staff
            const regis_date = new Date()

            await prisma.staff.create({
                data: {
                    first_name,
                    last_name,
                    cpf,
                    regis_date
                }
            })

            return ({
                success: true,
                message: "Staff successfully created"
            })

        } catch {
            return ({
                success: false,
                message: "something went wrong"
            })
        }

    }
}