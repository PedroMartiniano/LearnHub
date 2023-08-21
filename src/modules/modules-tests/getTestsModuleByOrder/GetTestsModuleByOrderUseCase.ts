import { prisma } from "../../../lib/prisma";

type AnswersTests = {
    id: string,
    question: string,
    answers: string,
    right_answer: string,
    id_module: string,
    createdAt: Date,
    status: number
}

export class GetTestsModuleByOrderUseCase {
    async execute(id_module: string, id_user: string) {
        try {
            const tests = await prisma.test.findMany({
                where: {
                    id_module
                },
                orderBy: {
                    createdAt: 'asc'
                }
            })

            const alumnAnswers: AnswersTests[] = await prisma.$queryRaw`
                SELECT t.id id_test, t.question, t.answers, t.right_answer, t.id_module, t.createdAt, t.status status_test
                FROM test t
                INNER JOIN alumnanswer a ON t.id = a.id_test
                WHERE t.id_module = ${id_module} AND a.id_alumn = ${id_user}
            `
            if (tests[alumnAnswers.length]) {
                return tests[alumnAnswers.length]
            }
            return null
        } catch {
            return null
        }
    }
}