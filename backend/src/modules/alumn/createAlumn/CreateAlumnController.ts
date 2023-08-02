import { Request, Response } from "express";
import { AppError } from "../../../error/AppError";
import { CreateAlumnUseCase } from "./CreateAlumnUseCase";
import { GetAlumnByCpfUseCase } from "../getAlumnByCpf/GetAlumnByCpfUseCase";

export class CreateAlumnController {
    async handle(req: Request, res: Response) {
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

        const getAlumnByCpf = new GetAlumnByCpfUseCase
        const alumn = await getAlumnByCpf.execute(cpf)

        if (alumn) {
            return res.status(400).json({
                success: false,
                message: "Cpf already exists"
            })
        }

        const createAlumnUseCase = new CreateAlumnUseCase
        const result = await createAlumnUseCase.execute({ first_name, last_name, cpf })

        if (!result.success) {
            return res.status(400).json(result.message)
        }

        return res.status(201).json(result.message)
    }
}