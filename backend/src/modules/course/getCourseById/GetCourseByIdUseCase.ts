import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export class GetCourseByIdUseCase {
    async execute(req: Request, res: Response) {
        try {
            const { id } = req.params
            const course = await prisma.course.findUnique({
                where: {
                    id
                }
            })

            return res.status(200).json(course)
        } catch {
            return res.status(400).json(null)
        }
    }
}