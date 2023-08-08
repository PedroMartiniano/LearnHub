import { Request, Response } from "express";
import { SearchCourseUseCase } from "./SearchCourseUseCase";

export class SearchCourseController {
    async handle(req: Request, res: Response) {
        const { name } = req.query


        if (!name) {
            return res.status(400).json({
                success: false,
                message: 'Missing name query'
            })
        }

        const searchCourse = new SearchCourseUseCase
        const courses = await searchCourse.execute(name.toString())

        if(!courses){
            return res.status(400).json(null)
        }
        
        return res.status(200).json(courses)
    }
}