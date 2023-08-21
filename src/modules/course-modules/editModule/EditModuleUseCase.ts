import { prisma } from "../../../lib/prisma";
import { ModuleData } from "../../../types/module-data";

export class EditModuleUseCase {
    async execute(name: string, description: string, id: string) {
        try {
            await prisma.module.update({
                where: {
                    id
                },
                data: {
                    name,
                    description
                }
            })

            return ({
                success: true,
                message: "Module successfully edited"
            })
        } catch {
            return ({
                success: false,
                message: "Something went wrong"
            })
        }
    }
}