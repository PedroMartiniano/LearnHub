import { prisma } from "../../../lib/prisma";

export class GetModuleByIdCourseUseCase {
    async execute(id: string){
        try {
            const modules = await prisma.module.findMany({
                where:{
                    id_course: id,
                    status: 1
                }
            })

            return modules
        } catch{
            return null
        }
    }
}