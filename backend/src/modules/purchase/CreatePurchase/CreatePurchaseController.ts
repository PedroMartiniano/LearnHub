import { Request, Response } from "express";
import { GetAlumnByIdUseCase } from "../../alumn/getAlumnById/GetAlumnByIdUseCase";
import { CreatePurchaseUseCase } from "./CreatePurchaseUseCase";

export class CreatePurchaseController {
    async handle(req: Request, res: Response) {
        const { id_user } = req.body
        const { id_course } = req.params

        if (!id_user) {
            return res.status(400).json({
                success: false,
                message: "Missing id_user param"
            })
        }

        if (!id_course) {
            return res.status(400).json({
                success: false,
                message: "Missing id_course param"
            })
        }

        const getAlumn = new GetAlumnByIdUseCase
        const alumn = await getAlumn.execute(id_user)

        if (alumn?.status === 0) {
            return res.status(400).json({
                success: false,
                message: "Alumn account disabled"
            })
        }

        const createPurchase = new CreatePurchaseUseCase
        const purchase = await createPurchase.execute({ id_user, id_course })

        if (!purchase.success) {
            return res.status(400).json(purchase.message)
        }
        return res.status(201).json(purchase.message)
    }
}