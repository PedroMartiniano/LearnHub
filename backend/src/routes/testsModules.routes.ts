import { Router } from "express";
import { CreateTestController } from "../modules/modules-tests/createTests/CreateTestController";
import { GetTestsByModuleController } from "../modules/modules-tests/getTestsByModule/GetTestsByModuleController";
import { EditTestController } from "../modules/modules-tests/editTest/EditTestController";

export const testsRouter = Router()

const createTest = new CreateTestController
const getTestsByModule = new GetTestsByModuleController
const editTest = new EditTestController

testsRouter.post('/module/test/create/:id_module', (req, res) => {
    createTest.handle(req, res)
})

testsRouter.get('/module/test/all/:id_module', (req, res) => {
    getTestsByModule.handle(req, res)
})

testsRouter.put('/module/test/update/:id', (req, res) => {
    editTest.handle(req, res)
})