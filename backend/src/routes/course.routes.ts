import { Router } from "express";
import { CreateCourseController } from "../modules/course/createCourse/CreateCourseController";
import { GetCoursesUseCase } from "../modules/course/getCourses/getCoursesUseCase";
import { EditCourseController } from "../modules/course/editCourse/EditCourseController";
import { DeleteCourseController } from "../modules/course/deleteCourse/DeleteCourseController";
import { ensureAuth } from "../middleware/ensureAuth";

export const courseRouter = Router()

const createCourse = new CreateCourseController
const getCourses = new GetCoursesUseCase
const editCourse = new EditCourseController
const deleteCourse = new DeleteCourseController

courseRouter.use(ensureAuth)

courseRouter.post('/create', (req, res) => {
    createCourse.handle(req, res)
})

courseRouter.get('/all', (req, res) => {
    getCourses.execute(res)
})

courseRouter.put('/update/:id', (req, res) => {
    editCourse.handle(req, res)
})

courseRouter.delete('/delete/:id', (req, res) => {
    deleteCourse.handle(req, res)
})