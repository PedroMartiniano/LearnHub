import { prisma } from "../../../lib/prisma";
import { Course_data } from "../../../types/course-data";

export class EditCourseUseCase {
    async execute(course: Course_data, id: string) {
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