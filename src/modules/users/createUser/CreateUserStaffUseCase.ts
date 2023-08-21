import { prisma } from "../../../lib/prisma";
import { UserStaff } from "../../../types/user-staff-data";
import { hash } from "bcrypt"


export class CreateUserStaffUseCase {
    async execute(user: UserStaff) {
        try {
            const { email, password, id_staff } = user
            const hashPassword = await hash(password, 6)

            await prisma.users.create({
                data: {
                    email,
                    password: hashPassword,
                    id_staff
                }
            })

            return ({
                success: true,
                message: "User successfully created"
            })
        } catch {
            return ({
                success: false,
                message: "Something went wrong"
            })
        }
    }
}