import { Alumn } from "../../../types/alumn-data";
import { prisma } from "../../../lib/prisma";
import { AppError } from "../../../error/AppError";

export class CreateAlumnUseCase {
    async execute(alumn: Alumn) {
        try {
            const { first_name, last_name, cpf } = alumn
            const regis_date = new Date()

            const AlumnData = await prisma.alumn.create({
                data: {
                    first_name,
                    last_name,
                    cpf,
                    regis_date
                }
            })

            return AlumnData

        } catch {
            return null
        }
    }
}