import { Request, Response } from "express";
import { GetUserByEmailUseCase } from "../getUserByEmail/GetUserByEmailUseCase";
import { UserAuthUseCase } from "./UserAuthUseCase";

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

        const userAuth = new UserAuthUseCase
        const result = await userAuth.execute({id: user.id, hashPassword: user.password, password: password})

        if(!result.success){
            return res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }

        return res.status(200).json({token: result.token})
    }
}