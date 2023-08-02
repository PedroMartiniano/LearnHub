import { Request, Response } from "express";
import { GetStaffByCpfUseCase } from "../getStaffByCpf/GetStaffByCpfUseCase";
import { CreateStaffUseCase } from "./CreateStaffUseCase";

export class CreateStaffController {
    async handle(req: Request, res: Response) {
        const {first_name, last_name, cpf} = req.body

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

        if(staffCpf){
            return res.status(400).json({
                success: false,
                message: "Cpf already exist"
            })
        }

        const createStaff = new CreateStaffUseCase
        const staff = await createStaff.execute({first_name, last_name, cpf})

        if(!staff.success){
            return res.status(400).json(staff.message)
        }

        return res.status(201).json(staff.message)
    }
}