import { prisma } from "../../../lib/prisma";

export class GetTestsModuleByOrderUseCase {
    async execute(id_module: string) {
        try {
            const tests = await prisma.test.findMany({
                where: {
                    id_module
                },
                orderBy: {
                    id: 'desc'
                }
            })

            return tests[0]
        } catch {
            return null
        }
    }
}