import { prisma } from "../../../lib/prisma";
import { EditTestData } from "../../../types/edit-test-data";

export class EditTestUseCase {
    async execute(test: EditTestData) {
        try {
            const { question, answers, right_answer, id } = test

            await prisma.test.update({
                where: {
                    id
                },
                data: {
                    question,
                    answers,
                    right_answer
                }
            })

            return ({
                success: true,
                message: "Test successfully edited"
            })
        } catch {
            return ({
                success: false,
                message: "Something went wrong"
            })
        }
    }
}