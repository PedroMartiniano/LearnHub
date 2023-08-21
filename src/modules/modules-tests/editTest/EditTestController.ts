import { Request, Response } from "express";
import { EditTestUseCase } from "./EditTestUseCase";

export class EditTestController {
    async handle(req: Request, res: Response) {
        const { question, answers, right_answer } = req.body
        const { id } = req.params

        if (!question || typeof question !== 'string') {
            return res.status(400).json({
                success: false,
                message: "missigin question body param"
            })
        }

        if (!answers || typeof answers !== 'string') {
            return res.status(400).json({
                success: false,
                message: "missigin answers body param"
            })
        }

        if (!right_answer || typeof right_answer !== 'string') {
            return res.status(400).json({
                success: false,
                message: "missigin right_answer body param"
            })
        }

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "missing id param"
            })
        }

        const editTest = new EditTestUseCase
        const test = await editTest.execute({ question, answers, right_answer, id })

        if (!test.success) {
            return res.status(400).json(test.message)
        }

        return res.status(200).json(test.message)
    }
}