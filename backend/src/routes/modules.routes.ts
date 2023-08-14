import { Router } from "express";
import { CreateModuleController } from "../modules/course-modules/createModule/CreateModuleController";
import { GetModulesWithCourseUseCase } from "../modules/course-modules/getModules/getModulesWithCourseUseCase";
import { EditModuleController } from "../modules/course-modules/editModule/EditModuleController";
import { GetCourseModulesUseCase } from "../modules/course-modules/getCourseModules/GetCourseModulesUseCase";
import { GetModuleByIdUseCase } from "../modules/course-modules/getModuleById/GetModuleByIdUseCase";

export const modulesRouter = Router()

const createModule = new CreateModuleController
const getModules = new GetModulesWithCourseUseCase
const editModule = new EditModuleController
const getCourseModules = new GetCourseModulesUseCase
const getModuleById = new GetModuleByIdUseCase

modulesRouter.post('/module/create/:id_course', (req, res) => {
    createModule.handle(req, res)
})

modulesRouter.get('/module/all', (req, res) => {
    getModules.execute(res)
})

modulesRouter.get('/module/:id_course', (req, res) => {
    getCourseModules.execute(req, res)
})

modulesRouter.get('/module/get/:id', (req, res) => {
    getModuleById.execute(req, res)
})

modulesRouter.put('/module/update/:id', (req, res) => {
    editModule.handle(req, res)
})