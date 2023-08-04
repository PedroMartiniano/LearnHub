import { prisma } from "../../../lib/prisma";

export class GetCourseByIdUseCase {
    async execute(id: string) {
        try {
            const course = await prisma.course.findUnique({
                where: {
                    id
                }
            })

            return course
        } catch {
            return null
        }
    }
}