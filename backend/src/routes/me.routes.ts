import { Router } from "express";
import { ensureAuth } from "../middleware/ensureAuth";
import { GetMeByIdController } from "../modules/users/getMeById/getMeByIdController";

export const getMeRouter = Router()

const getUser = new GetMeByIdController

getMeRouter.use(ensureAuth)

getMeRouter.get('/get-me', (req, res) => {
    getUser.handle(req, res)
})