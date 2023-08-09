import { UserLogin } from "../../../types/user-login-data";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import "dotenv";
import { GetAlumnByIdUseCase } from "../../alumn/getAlumnById/GetAlumnByIdUseCase";

export class UserAuthUseCase {
    async execute(user: UserLogin) {
        try {
            const { id, hashPassword, password, id_user } = user

            const isPasswordCorrect = await compare(password, hashPassword)

            if (!isPasswordCorrect) {
                return ({
                    success: false
                })
            }

            const getAlumn = new GetAlumnByIdUseCase
            const isAlumn = await getAlumn.execute(id_user)

            let key: string | undefined = ''
            if (!isAlumn) {
                key = process.env.tokenKeyStaff
            } else {
                key = process.env.tokenKeyAlumn
            }

            if (!key) {
                return ({
                    success: false
                })
            }

            const token = sign({ id, id_user }, key, { expiresIn: '1d' })

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