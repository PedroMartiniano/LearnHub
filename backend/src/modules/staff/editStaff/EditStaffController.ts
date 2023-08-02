import { Request, Response } from "express";
import { GetStaffByCpfUseCase } from "../getStaffByCpf/GetStaffByCpfUseCase";
import { EditStaffUseCase } from "./EditStaffUseCase";

export class EditStaffController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { first_name, last_name, cpf } = req.body

        if (!first_name || typeof first_name !== "string") {
            return res.status(400).json({
                success: false,
                message: "missing first_name body param"
            })
        }

        if (!last_name || typeof last_name !== "string") {
            return res.status(400).json({
                success: false,
                message: "missing last_name body param"
            })
        }

        if (!cpf || typeof cpf !== "string") {
            return res.status(400).json({
                success: false,
                message: "missing cpf body param"
            })
        }

        const getStaffByCpf = new GetStaffByCpfUseCase
        const staffCpf = await getStaffByCpf.execute(cpf)

        if (staffCpf) {
            if (staffCpf.id !== id) {
                return res.status(400).json({
                    success: false,
                    message: "Cpf already exists"
                })
            }
        }

        const editStaff = new EditStaffUseCase
        const staff = await editStaff.execute({ first_name, last_name, cpf }, id)

        if (!staff.success) {
            return res.status(400).json(staff.message)
        }

        return res.status(200).json(staff.message)

    }
}