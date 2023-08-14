import { Response } from "express";
import { prisma } from "../../../lib/prisma";

export class GetCoursesUseCase {
    async execute(res: Response) {
        try {
            const courses = await prisma.course.findMany({
                where: {
                    status: 1
                }
            })

            return res.status(200).json(courses)
        } catch {
            return res.status(400).json(null)
        }
    }
}