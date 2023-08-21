import { Request, Response } from "express";
import { CreateCourseUseCase } from "./CreateCourseUseCase";

export class CreateCourseController {
    async handle(req: Request, res: Response) {
        const { name, description, image, price } = req.body

        if (!name || typeof name !== 'string') {
            return res.status(400).json({
                success: false,
                message: "Missing name body param"
            })
        }

        if (!description || typeof description !== 'string') {
            return res.status(400).json({
                success: false,
                message: "Missing description body param"
            })
        }

        if (!image || typeof image !== 'string') {
            return res.status(400).json({
                success: false,
                message: "Missing image body param"
            })
        }

        if (!price || typeof price !== 'number') {
            return res.status(400).json({
                success: false,
                message: "Missing price body param"
            })
        }

        const createCourse = new CreateCourseUseCase
        const course = await createCourse.execute({ name, description, image, price })

        if (!course.success) {
            return res.status(400).json(course.message)
        }

        return res.status(201).json(course.message)
    }
}