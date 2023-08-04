import { Router } from "express";
import { CreateStaffController } from "../modules/staff/createStaff/CreateStaffController";
import { GetStaffsUseCase } from "../modules/staff/getStaffs/getStaffsUseCase";
import { DeleteStaffController } from "../modules/staff/deleteStaff/DeleteStaffController";
import { EditStaffController } from "../modules/staff/editStaff/EditStaffController";
import { ensureAuth } from "../middleware/ensureAuth";

export const staffRouter = Router()

const createStaff = new CreateStaffController
const getStaffs = new GetStaffsUseCase
const deleteStaff = new DeleteStaffController
const editStaff = new EditStaffController

staffRouter.use(ensureAuth)

staffRouter.post('/create', (req, res) => {
    createStaff.handle(req, res)
})

staffRouter.get('/all', (req, res) => {
    getStaffs.execute(res)
})

staffRouter.delete('/delete', (req, res) => {
    deleteStaff.handle(req, res)
})

staffRouter.put('/update', (req, res) => {
    editStaff.handle(req, res)
})