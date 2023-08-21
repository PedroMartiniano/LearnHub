import { Response } from "express";
import { prisma } from "../../../lib/prisma";

export class GetAnswersUseCase {
    async execute(res: Response){
        try {
            const answers = await prisma.alumnAnswer.findMany()

            return res.status(200).json(answers)
        } catch {
            return res.status(400).json(null)
        }
    }
}