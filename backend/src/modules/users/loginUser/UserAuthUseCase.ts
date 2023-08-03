import { UserLogin } from "../../../types/user-login-data";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import "dotenv";

export class UserAuthUseCase {
    async execute(user: UserLogin) {
        try {
            const { id, hashPassword, password } = user

            const isPasswordCorrect = await compare(password, hashPassword)

            if (!isPasswordCorrect) {
                return ({
                    success: false
                })
            }

            const key: string | undefined = process.env.tokenkey

            if (!key) {
                return ({
                    success: false
                })
            }

            const token = sign({ id }, key, { expiresIn: '1d' })

            return ({
                token,
                success: true
            })
        } catch {
            return ({
                success: false
            })
        }
    }
}