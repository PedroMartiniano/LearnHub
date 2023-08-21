import { prisma } from "../../../lib/prisma";
import { UserAlumn } from "../../../types/user-alumn-data";
import { hash } from "bcrypt"


export class CreateUserAlumnUseCase {
    async execute(user: UserAlumn) {
        try {
            const { email, password, id_alumn } = user
            const hashPassword = await hash(password, 6)

            await prisma.users.create({
                data: {
                    email,
                    password: hashPassword,
                    id_alumn
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