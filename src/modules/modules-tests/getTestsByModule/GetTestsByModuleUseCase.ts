import { prisma } from "../../../lib/prisma";

export class GetTestsByModuleUseCase {
    async execute(id_module: string){
        try {
            const tests = await prisma.test.findMany({
                where: {
                    id_module
                }
            })

            return tests
        } catch {
            return null
        }
    }
}