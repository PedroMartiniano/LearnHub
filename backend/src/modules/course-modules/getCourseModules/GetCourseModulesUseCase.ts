import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export class GetCourseModulesUseCase {
    async execute(req: Request, res: Response) {
        try {
            const { id_course } = req.params

            const courseModules = await prisma.module.findMany({
                where: {
                    id_course,
                    status: 1
                }
            })

            return res.status(200).json(courseModules)
        } catch {
            return res.status(400).json(null)
        }
    }
}