import { Router } from "express"
import { CreateAlumnController } from "../modules/alumn/createAlumn/CreateAlumnController"
import { GetAlumnsUseCase } from "../modules/alumn/getAlumns/GetAlumnsUseCase"
import { DeleteAlumnController } from "../modules/alumn/deleteAlumn/DeleteAlumnController"
import { EditAlumnController } from "../modules/alumn/editAlumn/EditAlumnController"

export const alumnRouter = Router()

const createAlumn = new CreateAlumnController
const getAlumn = new GetAlumnsUseCase
const deleteAlumn = new DeleteAlumnController
const editAlumn = new EditAlumnController

alumnRouter.post('/create', (req, res) => {
    createAlumn.handle(req, res)
})

alumnRouter.get('/all', (req, res) => {
    getAlumn.execute(res)
})

alumnRouter.delete('/delete/:id', (req, res) => {
    deleteAlumn.handle(req, res)
})

alumnRouter.put('/update/:id', (req, res) => {
    editAlumn.handle(req, res)
})