import { Request, Response } from "express";
import { AppError } from "../../../error/AppError";
import { CreateAlumnUseCase } from "./CreateAlumnUseCase";
import { GetAlumnByCpfUseCase } from "../getAlumnByCpf/GetAlumnByCpfUseCase";
import { CreateUserAlumnUseCase } from "../../users/createUser/CreateUserAlumnUseCase";
import { z } from "zod";

export class CreateAlumnController {
    async handle(req: Request, res: Response) {

        const alumnSchema = z.object({
            first_name: z.string(),
            last_name: z.string(),
            cpf: z.string().length(11),
            email: z.string().email(),
            password: z.string().min(6)
        })

        const alumnData = alumnSchema.safeParse(req.body)

        if(!alumnData.success) {
            return res.status(400).json({
                success: false,
                message: alumnData.error
            })
        }

        const { first_name, last_name, cpf, email, password } = alumnData.data

        // if (!first_name || typeof first_name !== "string") {
        //     return res.status(400).json({
        //         success: false,
        //         message: "missing first_name body param"
        //     })
        // }

        // if (!last_name || typeof last_name !== "string") {
        //     return res.status(400).json({
        //         success: false,
        //         message: "missing last_name body param"
        //     })
        // }

        // if (!cpf || typeof cpf !== "string") {
        //     return res.status(400).json({
        //         success: false,
        //         message: "missing cpf body param"
        //     })
        // }

        // if (!email || typeof email !== "string") {
        //     return res.status(400).json({
        //         success: false,
        //         message: "missing email body param"
        //     })
        // }

        // if (!password || typeof password !== "string") {
        //     return res.status(400).json({
        //         success: false,
        //         message: "missing password body param"
        //     })
        // }

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

        if (result) {
            const createUserAlumn = new CreateUserAlumnUseCase
            const user = await createUserAlumn.execute({ email, password, id_alumn: result.id })

            if (user.success) {
                return res.status(201).json(user.message)
            }
            
            return res.status(400).json(user.message)
        }

        return res.status(400).json('something went wrong')
    }
}