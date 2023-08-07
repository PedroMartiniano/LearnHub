import { Request, Response } from "express";
import { GetCourseByIdUseCase } from "../getCourseById/GetCourseByIdUseCase";
import { DeleteCourseUseCase } from "./DeleteCourseUseCase";
import { DeleteModuleUseCase } from "../../course-modules/deleteModule/DeleteModuleUseCase";

export class DeleteCourseController {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Missing id params"
            })
        }

        const getCourse = new GetCourseByIdUseCase
        const courseStatus = await getCourse.execute(id)

        if (courseStatus?.status === 0) {
            return res.status(400).json({
                success: false,
                message: "Course already disabled"
            })
        }

        const deleteCourse = new DeleteCourseUseCase
        const course = await deleteCourse.execute(id)

        if(!course.success) {
            return res.status(400).json(course.message)
        }

        const deleteModulesFromCourse = new DeleteModuleUseCase
        const deletedModules = await deleteModulesFromCourse.execute(id)

        if(!deletedModules.success){
            return res.status(400).json(deletedModules.message)
        }

        return res.status(200).json(deletedModules.message)
    }
}