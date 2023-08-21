import { prisma } from "../../../lib/prisma";

type AlumnAnswers = {
    is_right: boolean
}

export class AlumnAverageUseCase {
    async execute(id_module: string, id_user: string) {
        try {
            const alumnAnswers: AlumnAnswers[] = await prisma.$queryRaw`
                SELECT a.is_right
                FROM alumnanswer a
                INNER JOIN test t ON a.id_test = t.id
                WHERE t.id_module = ${id_module} AND a.id_alumn = ${id_user}
            `

            let cont = 0
            alumnAnswers.forEach((answer) => (answer.is_right) && (cont++))

            return cont
        } catch {
            return null
        }
    }
}