import { prisma } from "../../../lib/prisma";
import { Course_data } from "../../../types/course-data";

export class CreateCourseUseCase {
    async execute(course: Course_data) {
        const { name, description, image, price } = course
        try {
            await prisma.course.create({
                data: {
                    name,
                    description,
                    rating: 0,
                    image,
                    price
                }
            })

            return ({
                success: true,
                message: "Course created successfully",
            })
        } catch {
            return ({
                success: false,
                message: "Something went wrong"
            })
        }
    }
}