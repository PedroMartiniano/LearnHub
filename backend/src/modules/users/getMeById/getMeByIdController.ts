import { Request, Response } from "express";
import { GetUserByIdUseCase } from "../getUserById/GetUserByIdUseCase";

export class GetMeByIdController {
    async handle(req: Request, res: Response) {
        const {id} = req.body

        if(!id){
            return res.status(400).json({
                success: false,
                message: "Missing id body param"
            })
        }

        const getUser = new GetUserByIdUseCase
        const user = await getUser.execute(id)

        if(user){
            return res.status(200).json({id: user.id, email: user.email, id_account: user.id_alumn || user.id_staff})
        }

        return res.status(400).json('No user found')
    }
}