import { Request, Response } from "express";
import { GetPurchaseByAlumnUseCase } from "./GetPurchasesByAlumnUseCase";

export class GetPurchasesByAlumnController {
    async handle(req: Request, res: Response) {
        const { id_user } = req.body

        if(!id_user){
            return res.status(400).json({
                success: false,
                message: "Something went wrong"
            })
        }

        const getPurchaseByAlumn = new GetPurchaseByAlumnUseCase
        const alumnPurchases = await getPurchaseByAlumn.execute(id_user)

        return res.json(alumnPurchases)
    }
}