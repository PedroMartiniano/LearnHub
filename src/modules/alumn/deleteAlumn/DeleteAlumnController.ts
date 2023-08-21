import { Request, Response } from "express";
import { DeleteAlumnUseCase } from "./DeleteAlumnUseCase";
import { GetAlumnByIdUseCase } from "../getAlumnById/GetAlumnByIdUseCase";

export class DeleteAlumnController {
    async handle(req: Request, res: Response) {
        const { id_user } = req.body

        if (!id_user) {
            return res.status(400).json({
                success: false,
                message: "missing id_user body param"
            })
        }

        const getAlumn = new GetAlumnByIdUseCase
        const alumnStatus = await getAlumn.execute(id_user)

        if(alumnStatus?.status === 0) {
            return res.status(400).json({
                success: false,
                message: "Alumn account already disabled"
            })
        }

        const deleteAlumn = new DeleteAlumnUseCase
        const deleted = await deleteAlumn.execute(id_user)

        if (!deleted.success) {
            return res.status(400).json(deleted.message)
        }

        return res.status(200).json(deleted.message)
    }
}