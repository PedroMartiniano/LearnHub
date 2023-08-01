import { Router } from "express"
import { CreateAlumnController } from "../modules/alumn/createAlumn/CreateAlumnController"
import { GetAlumnUseCase } from "../modules/alumn/getAlumn/GetAlumnUseCase"

export const alumnRouter = Router()

const createAlumn = new CreateAlumnController
const getAlumn = new GetAlumnUseCase

alumnRouter.post('/create', (req, res) => {
    createAlumn.handle(req, res)
})

alumnRouter.get('/all', (req, res) => {
    getAlumn.execute(res)
})