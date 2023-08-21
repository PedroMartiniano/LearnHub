import { prisma } from "../../../lib/prisma";
import { Alumn } from "../../../types/alumn-data";

export class EditAlumnUseCase {
    async execute(alumn: Alumn, id: string) {
        try {
            const { first_name, last_name, cpf } = alumn

            await prisma.alumn.update({
                where: {
                    id
                },
                data: {
                    first_name,
                    last_name,
                    cpf
                }
            })

            return ({
                success: true,
                message: "alumn successfully edited"
            })

        } catch {
            return ({
                success: false,
                message: "something went wrong"
            })
        }
    }
}