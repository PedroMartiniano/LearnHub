import { prisma } from "../../../lib/prisma";

export class GetAlumnAnswersUseCase {
    async execute(id_test: string, id_alumn: string) {
        try {
            const alumnAnswer = await prisma.alumnAnswer.findMany({
                where: {
                    id_alumn,
                    id_test
                }
            })

            if (alumnAnswer[0]) {
                return true
            }

            return false
        } catch {
            return false
        }
    }
}