import { prisma } from "../../../lib/prisma";
import { TestData } from "../../../types/test-data";

export class CreateTestUseCase {
    async execute(test: TestData) {
        try {
            const { question, answers, right_answer, id_module } = test

            await prisma.test.create({
                data: {
                    question,
                    answers,
                    right_answer,
                    id_module
                }
            })

            return ({
                success: true,
                message: "Test created successfully"
            })
        }catch {
            return ({
                success: false,
                message: "Something went wrong"
            })
        }
    }
}