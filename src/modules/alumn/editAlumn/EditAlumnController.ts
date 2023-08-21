import { Request, Response } from "express";
import { GetAlumnByCpfUseCase } from "../getAlumnByCpf/GetAlumnByCpfUseCase";
import { GetAlumnByIdUseCase } from "../getAlumnById/GetAlumnByIdUseCase";
import { EditAlumnUseCase } from "./EditAlumnUseCase";

export class EditAlumnController {
    async handle(req: Request, res: Response) {
        const { first_name, last_name, cpf, id_user } = req.body

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

        const getALumn = new GetAlumnByCpfUseCase
        const AlumnCpf = await getALumn.execute(cpf)

        if (AlumnCpf) {
            if (AlumnCpf.id !== id_user) {
                return res.status(400).json({
                    success: false,
                    message: "Cpf Already exists"
                })
            }
        }

        const editAlumn = new EditAlumnUseCase
        const alumn = await editAlumn.execute({first_name, last_name, cpf}, id_user)

        if(!alumn.success){
            return res.status(400).json(alumn.message)
        }

        return res.status(200).json(alumn.message)

    }
}