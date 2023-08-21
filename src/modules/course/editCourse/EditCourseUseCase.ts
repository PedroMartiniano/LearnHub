import { prisma } from "../../../lib/prisma";
import { CourseData } from "../../../types/course-data";

export class EditCourseUseCase {
    async execute(course: CourseData, id: string) {
        try {
            const { name, description, image, price } = course

            await prisma.course.update({
                where: {
                    id
                },
                data: {
                    name,
                    description,
                    image,
                    price
                }
            })

            return ({
                success: true,
                message: "Course successfully edited"
            })

        } catch {
            return ({
                success: false,
                message: "Something went wrong"
            })
        }
    }
}