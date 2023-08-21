import { prisma } from "../../../lib/prisma";
import { AlumnAnswerData } from "../../../types/alumn-answer-data";

export class RegisterAlumnAnswerUseCase {
    async execute(alumnAnswer: AlumnAnswerData) {
        try {
            const { id_user, id_test, alumn_answer, is_right } = alumnAnswer

            await prisma.alumnAnswer.create({
                data: {
                    id_alumn: id_user,
                    id_test,
                    alumn_answer,
                    is_right
                }
            })

            return ({
                success: true,
                message: "Answer successfully registered"
            })
        } catch {
            return ({
                success: false,
                message: "Something went wrong"
            })

        }
    }
}