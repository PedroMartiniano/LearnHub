import { prisma } from "../../../lib/prisma";
import { ModuleData } from "../../../types/module-data";

export class CreateModuleUseCase {
    async execute(modules: ModuleData) {
        try {
            const { name, description, order, id_course } = modules

            await prisma.module.create({
                data: {
                    name,
                    description,
                    order,
                    id_course
                }
            })

            return ({
                success: true,
                message: "Module successfully created"
            })
        } catch {
            return ({
                success: false,
                message: "Something went wrong"
            })
        }
    }
}