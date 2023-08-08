import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export class SearchCourseUseCase {
    async execute(name: string) {
        try {
            const courses = await prisma.course.findMany({
                where: {
                    name: {
                        contains: name
                    }
                }
            })

            return courses
        } catch {
            return null
        }
    }
}