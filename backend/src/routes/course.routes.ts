import { Router } from "express";
import { CreateCourseController } from "../modules/course/createCourse/CreateCourseController";
import { GetCoursesUseCase } from "../modules/course/getCourses/getCoursesUseCase";
import { EditCourseController } from "../modules/course/editCourse/EditCourseController";
import { DeleteCourseController } from "../modules/course/deleteCourse/DeleteCourseController";
import { SearchCourseController } from "../modules/course/searchCourse/SearchCourseController";
import { GetCourseByIdUseCase } from "../modules/course/getCourseById/GetCourseByIdUseCase";
import { ensureAuthStaff } from "../middleware/ensureAuthStaff";
import { GetCoursePurchaseUseCase } from "../modules/purchase/getCoursePurchase/GetCoursePurchaseUseCase";

export const courseRouter = Router()

const createCourse = new CreateCourseController
const getCourses = new GetCoursesUseCase
const editCourse = new EditCourseController
const deleteCourse = new DeleteCourseController
const searchCourse = new SearchCourseController
const getCourseById = new GetCourseByIdUseCase
const getCoursePurchases = new GetCoursePurchaseUseCase

courseRouter.get('/all', (req, res) => {
    getCourses.execute(res)
})

courseRouter.get('/get/:id', (req, res) => {
    getCourseById.execute(req, res)
})

courseRouter.get('/search', (req, res) => {
    searchCourse.handle(req, res)
})

courseRouter.use(ensureAuthStaff)

courseRouter.post('/create', (req, res) => {
    createCourse.handle(req, res)
})

courseRouter.put('/update/:id', (req, res) => {
    editCourse.handle(req, res)
})

courseRouter.delete('/delete/:id', (req, res) => {
    deleteCourse.handle(req, res)
})

courseRouter.get('/purchase/course/:id_course', (req, res) => {
    getCoursePurchases.execute(req, res)
})