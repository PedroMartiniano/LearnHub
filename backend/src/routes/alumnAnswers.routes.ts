import { Router } from "express";
import { RegisterAlumnAnswerController } from "../modules/alumnAnswer/registerAlumnAnswer/RegisterAlumnAnswerController";
import { GetAnswersUseCase } from "../modules/alumnAnswer/getAnswers/GetAnswersUseCase";
import { GetTestsModuleByOrderController } from "../modules/modules-tests/getTestsModuleByOrder/GetTestsModuleByOrderController";

export const alumnAnswerRoutes = Router()

const registerAlumnAnswer = new RegisterAlumnAnswerController
const getAnswers = new GetAnswersUseCase
const getTestsModuleByOrder = new GetTestsModuleByOrderController

alumnAnswerRoutes.post('/answers/register/:id_test', (req, res) => {
    registerAlumnAnswer.handle(req, res)
})

alumnAnswerRoutes.get('/answers/all', (req, res) => {
    getAnswers.execute(res)
})

alumnAnswerRoutes.get('/answers/get-order/:id_module', (req, res) => {
    getTestsModuleByOrder.handle(req, res)
})