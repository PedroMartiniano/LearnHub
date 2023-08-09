import { Request, Response } from "express";
import { GetUserByEmailUseCase } from "../getUserByEmail/GetUserByEmailUseCase";
import { UserAuthUseCase } from "./UserAuthUseCase";
import { GetUserStatusUseCase } from "../getUserStatus/getUserStatusUseCase";

export class UserAuthController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }

        const getUser = new GetUserByEmailUseCase
        const user = await getUser.execute(email)

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }

        let id_user: string = ''

        if (user.id_alumn) {
            id_user = user.id_alumn
        }
        if (user.id_staff) {
            id_user = user.id_staff
        }

        const getUserStatus = new GetUserStatusUseCase
        const status = await getUserStatus.execute(user.id)

        if (!status) {
            return res.status(400).json({
                success: false,
                message: "deactivated account"
            })
        }

        const userAuth = new UserAuthUseCase
        const result = await userAuth.execute({ id: user.id, hashPassword: user.password, password: password, id_user: id_user })

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }

        return res.status(200).json({ token: result.token })
    }
}