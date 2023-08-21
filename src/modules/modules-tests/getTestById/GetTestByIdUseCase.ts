import { prisma } from "../../../lib/prisma";

export class GetTestByIdUseCase {
    async execute(id: string) {
        try {
            const test = await prisma.test.findUnique({
                where: {
                    id,
                    status: 1
                }
            })

            if(test){
                return test
            }

            return null
        } catch {
            return null
        }
    }
}