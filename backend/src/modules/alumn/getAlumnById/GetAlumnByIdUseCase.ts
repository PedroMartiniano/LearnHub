import { prisma } from "../../../lib/prisma";

export class GetAlumnByIdUseCase {
    async execute(id: string) {
        try {

            const alumn = await prisma.alumn.findUnique({
                where: {
                    id
                }
            })

            return alumn

        } catch {
            return null
        }



    }
}