import { prisma } from "../../../lib/prisma";
import { CourseData } from "../../../types/course-data";

export class CreateCourseUseCase {
    async execute(course: CourseData) {
        try {
            const { name, description, image, price } = course
            
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