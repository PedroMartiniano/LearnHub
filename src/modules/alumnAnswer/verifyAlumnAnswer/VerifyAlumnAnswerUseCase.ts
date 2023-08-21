import { prisma } from "../../../lib/prisma";

export class VerifyAlumnAnswerUseCase {
    async execute(id: string, right_answer: string) {
        try {
            const test = await prisma.test.findUnique({
                where: {
                    id,
                    right_answer
                }
            })

            if(test){
                return true
            }

            return false
        } catch {
            return false
        }
    }
}