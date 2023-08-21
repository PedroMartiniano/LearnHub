import { Response } from "express";
import { prisma } from "../../../lib/prisma";

export class GetModulesWithCourseUseCase {
    async execute(res: Response) {
        try {
            const course_modules = await prisma.$queryRaw`
                SELECT C.name course_name, C.description course_description, C.image, C.price, M.name module_name, M.description module_description, M.order, M.status status_module, M.id_course, M.id id_module
                FROM Module M
                INNER JOIN Course C ON M.id_course = C.id
                WHERE M.id_course = C.id AND C.status = 1
            `
            
            return res.status(200).json(course_modules)
        } catch {
            return res.status(400).json(null)
        }
    }
}