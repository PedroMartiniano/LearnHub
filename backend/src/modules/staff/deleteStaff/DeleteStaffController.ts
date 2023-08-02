import { Request, Response } from "express";
import { DeleteStaffUseCase } from "./DeleteStaffUseCase";
import { GetStaffByIdUseCase } from "../getStaffById/GetStaffByIdUseCase";

export class DeleteStaffController {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Missing id params"
            })
        }

        const getStaff = new GetStaffByIdUseCase
        const staffStatus = await getStaff.execute(id)

        if (staffStatus?.status === 0) {
            return res.status(400).json({
                success: false,
                message: "Staff account already disabled"
            })
        }

        const deleteStaff = new DeleteStaffUseCase
        const staff = await deleteStaff.execute(id)

        if (!staff.success) {
            return res.status(400).json(staff.message)
        }

        return res.status(200).json(staff.message)
    }
}