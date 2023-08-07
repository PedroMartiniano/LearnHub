import { Request, Response } from "express";
import { GetStatusModuleUseCase } from "../getStatusModule/GetStatusModuleUseCase";
import { DeleteModuleUseCase } from "./DeleteModuleUseCase";

export class DeleteModuleController {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Missing id param"
            })
        }

        const getStatusModule = new GetStatusModuleUseCase
        const status = await getStatusModule.execute(id)

        if (!status) {
            return res.status(400).json({
                success: false,
                message: "Something went wrong"
            })
        }

        if (status.status === 0) {
            return res.status(400).json({
                success: false,
                message: "Module already deleted"
            })
        }

        const deleteModule = new DeleteModuleUseCase
        const moduleDeleted = await deleteModule.execute(id)

        if (!moduleDeleted.success) {
            return res.status(400).json(moduleDeleted.message)
        }
        return res.status(200).json(moduleDeleted.message)
    }
}