import { Request, Response } from "express";
import { GetAlumnByIdUseCase } from "../../alumn/getAlumnById/GetAlumnByIdUseCase";
import { GetTestByIdUseCase } from "../../modules-tests/getTestById/GetTestByIdUseCase";
import { VerifyAlumnAnswerUseCase } from "../verifyAlumnAnswer/VerifyAlumnAnswerUseCase";
import { RegisterAlumnAnswerUseCase } from "./RegisterAlumnAnswerUseCase";

export class RegisterAlumnAnswerController {
    async handle(req: Request, res: Response) {
        const { id_user, alumn_answer } = req.body
        const { id_test } = req.params

        if (!alumn_answer) {
            return res.status(400).json({
                success: false,
                message: "missing alumn_answer body param"
            })
        }

        if (!id_user) {
            return res.status(400).json({
                success: false,
                message: "missing id_user body param"
            })
        }

        if (!id_test) {
            return res.status(400).json({
                success: false,
                message: "missing id_test param"
            })
        }

        const getAlumn = new GetAlumnByIdUseCase
        const alumn = await getAlumn.execute(id_user)

        if (!alumn) {
            return res.status(400).json({
                success: false,
                message: "Alumn Not Found"
            })
        }

        const getTestById = new GetTestByIdUseCase
        const test = await getTestById.execute(id_test)

        if (!test) {
            return res.status(400).json({
                success: false,
                message: "Something went wrong with your test"
            })
        }

        const verifyAnswer = new VerifyAlumnAnswerUseCase
        const is_right = await verifyAnswer.execute(id_test, alumn_answer)

        const registerAlumnAnswer = new RegisterAlumnAnswerUseCase
        const alumnAnswer = await registerAlumnAnswer.execute({ id_user, id_test, alumn_answer, is_right })

        if (!alumnAnswer.success) {
            return res.status(400).json(alumnAnswer.message)
        }
        return res.status(200).json(alumnAnswer.message)
    }
}