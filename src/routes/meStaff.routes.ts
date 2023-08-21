import { Router } from "express";
import { GetMeByIdController } from "../modules/users/getMeById/getMeByIdController";
import { ensureAuthStaff } from "../middleware/ensureAuthStaff";

export const getMeStaffRouter = Router()

const getUser = new GetMeByIdController

getMeStaffRouter.use(ensureAuthStaff)

getMeStaffRouter.get('/', (req, res) => {
    getUser.handle(req, res)
})