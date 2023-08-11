import { Request, Response } from "express";
import { EditModuleUseCase } from "./EditModuleUseCase";

export class EditModuleController {
    async handle(req: Request, res: Response) {
        const { name, description } = req.body
        const { id } = req.params

        if (!name || typeof name !== 'string') {
            return res.status(400).json({
                success: false,
                message: "Missing name body param"
            })
        }

        if (!description || typeof description !== 'string') {
            return res.status(400).json({
                success: false,
                message: "Missing description body param"
            })
        }

        if (!id || typeof id !== 'string') {
            return res.status(400).json({
                success: false,
                message: "Missing id param"
            })
        }

        const editModule = new EditModuleUseCase
        const modules = await editModule.execute(name, description, id)

        if (!modules.success) {
            return res.status(400).json(modules.message)
        }

        return res.status(200).json(modules.message)
    }
}