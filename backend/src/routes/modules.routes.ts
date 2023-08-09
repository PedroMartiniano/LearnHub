import { Router } from "express";
import { CreateModuleController } from "../modules/course-modules/createModule/CreateModuleController";
import { GetModulesWithCourseUseCase } from "../modules/course-modules/getModules/getModulesWithCourseUseCase";
import { EditModuleController } from "../modules/course-modules/editModule/EditModuleController";
import { ensureAuthStaff } from "../middleware/ensureAuthStaff";

export const modulesRouter = Router()

const createModule = new CreateModuleController
const getCourseModules = new GetModulesWithCourseUseCase
const editModule = new EditModuleController


modulesRouter.post('/module/create/:id_course', (req, res) => {
    createModule.handle(req, res)
})

modulesRouter.get('/module/all', (req, res) => {
    getCourseModules.execute(res)
})

modulesRouter.put('/module/update/:id', (req, res) => {
    editModule.handle(req, res)
})