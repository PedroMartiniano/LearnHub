import { Router } from "express";
import { GetMeByIdController } from "../modules/users/getMeById/getMeByIdController";
import { ensureAuthAlumn } from "../middleware/ensureAuthAlumn";

export const getMeAlumnRouter = Router()

const getUser = new GetMeByIdController

getMeAlumnRouter.use(ensureAuthAlumn)

getMeAlumnRouter.get('/', (req, res) => {
    getUser.handle(req, res)
})