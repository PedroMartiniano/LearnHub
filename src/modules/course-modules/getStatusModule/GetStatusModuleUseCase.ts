import { prisma } from "../../../lib/prisma";

export class GetStatusModuleUseCase {
    async execute(id: string){
        try {
            const statusModule = await prisma.module.findUnique({
                where: {
                    id
                }
            })

            return statusModule
            
        } catch{
            return null
        }
    }
}