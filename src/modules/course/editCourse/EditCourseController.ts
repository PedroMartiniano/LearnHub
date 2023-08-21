import { Request, Response } from "express";
import { EditCourseUseCase } from "./EditCourseUseCase";

export class EditCourseController {
    async handle(req: Request, res: Response) {
        const { name, description, image, price } = req.body
        const { id } = req.params

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

        const editCourse = new EditCourseUseCase
        const course = await editCourse.execute({ name, description, image, price }, id)

        if (!course.success) {
            return res.status(400).json(course.message)
        }

        return res.status(200).json(course.message)

    }
}