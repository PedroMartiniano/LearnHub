import { Request, Response } from "express";
import { CreateTestUseCase } from "./CreateTestUseCase";

export class CreateTestController {
    async handle(req: Request, res: Response) {
        const { question, answers, right_answer } = req.body
        const { id_module } = req.params

        if(!question || typeof question !== 'string'){
            return res.status(400).json({
                success: false,
                message: "missing question body param"
            })
        }

        if(!answers || typeof answers !== 'string'){
            return res.status(400).json({
                success: false,
                message: "missing answers body param"
            })
        }

        if(!right_answer || typeof right_answer !== 'string'){
            return res.status(400).json({
                success: false,
                message: "missing right_answer body param"
            })
        }

        if(!id_module){
            return res.status(400).json({
                success: false,
                message: "missing id_module param"
            })
        }

        const createTest = new CreateTestUseCase
        const test = await createTest.execute({question, answers, right_answer, id_module})

        if(!test.success){
            return res.status(400).json(test.message)
        }
        
        return res.status(201).json(test.message)
    }
}