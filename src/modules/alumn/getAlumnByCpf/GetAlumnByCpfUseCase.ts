import { prisma } from "../../../lib/prisma";

export class GetAlumnByCpfUseCase {
    async execute(cpf: string) {
        try {

            const alumn = await prisma.alumn.findUnique({
                where: {
                    cpf
                }
            })

            return alumn
        } catch {
            return null
        }
    }
}