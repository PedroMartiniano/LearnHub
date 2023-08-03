import { Router } from "express";
import { GetUsersUseCase } from "../modules/users/getUsers/getUsersUseCase";
import { ensureAuth } from "../middleware/ensureAuth";
import { UserAuthController } from "../modules/users/loginUser/UserAuthController";

export const usersRouter = Router()

const getUsers = new GetUsersUseCase
const authLogin = new UserAuthController

usersRouter.get('/all', (req, res) => {
    getUsers.execute(res)
})

usersRouter.post('/login', (req, res) => {
    authLogin.handle(req, res)
})