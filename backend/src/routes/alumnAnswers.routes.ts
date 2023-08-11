import { Router } from "express";
import { RegisterAlumnAnswerController } from "../modules/alumnAnswer/registerAlumnAnswer/RegisterAlumnAnswerController";
import { GetAnswersUseCase } from "../modules/alumnAnswer/getAnswers/GetAnswersUseCase";

export const alumnAnswerRoutes = Router()

const registerAlumnAnswer = new RegisterAlumnAnswerController
const getAnswers = new GetAnswersUseCase

alumnAnswerRoutes.post('/answers/register/:id_test', (req, res) => {
    registerAlumnAnswer.handle(req, res)
})

alumnAnswerRoutes.get('/answers/all', (req, res) => {
    getAnswers.execute(res)
})