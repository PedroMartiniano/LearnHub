import { Request, Response } from "express";
import { DeleteTestUseCase } from "./DeleteTestUseCase";

export class DeleteTestController {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "missing id param"
            })
        }

        const deleteTest = new DeleteTestUseCase
        const test = await deleteTest.execute(id)

        if (!test.success) {
            return res.status(400).json(test.message)
        }
        
        return res.status(200).json(test.message)

    }
}