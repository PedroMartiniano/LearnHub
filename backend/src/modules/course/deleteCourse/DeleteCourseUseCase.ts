import { prisma } from "../../../lib/prisma";

export class DeleteCourseUseCase {
    async execute(id: string) {
        try {
            await prisma.course.update({
                where: {
                    id
                },
                data: {
                    status: 0
                }
            })

            return ({
                success: true,
                message: "Course successfully deleted"
            })
        } catch {
            return ({
                success: false,
                message: "something went wrong"
            })
        }
    }
}