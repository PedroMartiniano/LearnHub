import { Router } from "express"
import { CreateAlumnController } from "../modules/alumn/createAlumn/CreateAlumnController"
import { GetAlumnsUseCase } from "../modules/alumn/getAlumns/GetAlumnsUseCase"
import { DeleteAlumnController } from "../modules/alumn/deleteAlumn/DeleteAlumnController"
import { EditAlumnController } from "../modules/alumn/editAlumn/EditAlumnController"
import { ensureAuthAlumn } from "../middleware/ensureAuthAlumn"

export const alumnRouter = Router()

const createAlumn = new CreateAlumnController
const getAlumn = new GetAlumnsUseCase
const deleteAlumn = new DeleteAlumnController
const editAlumn = new EditAlumnController

alumnRouter.post('/create', (req, res) => {
    createAlumn.handle(req, res)
})

alumnRouter.use(ensureAuthAlumn)

alumnRouter.get('/all', (req, res) => {
    getAlumn.execute(res)
})

alumnRouter.delete('/delete', (req, res) => {
    deleteAlumn.handle(req, res)
})

alumnRouter.put('/update', (req, res) => {
    editAlumn.handle(req, res)
})
