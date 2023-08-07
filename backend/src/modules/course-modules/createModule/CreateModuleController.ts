import { Request, Response } from "express";
import { CreateModuleUseCase } from "./CreateModuleUseCase";
import { GetModuleOrderUseCase } from "../getModuleOrder/getModuleOrderUseCase";

export class CreateModuleController {
    async handle(req: Request, res: Response) {
        const { name, description, order } = req.body
        const { id_course } = req.params

        if (!name || typeof name !== 'string') {
            return res.status(400).json({
                success: false,
                message: "missing name body param"
            })
        }

        if (!description || typeof description !== 'string') {
            return res.status(400).json({
                success: false,
                message: "missing description body param"
            })
        }

        if (!order || typeof order !== 'number' || order <= 0) {
            return res.status(400).json({
                success: false,
                message: "missing order body param"
            })
        }

        if (!id_course || typeof id_course !== 'string') {
            return res.status(400).json({
                success: false,
                message: "missing id_course param"
            })
        }   

        const findOrderModule = new GetModuleOrderUseCase
        const isOrderExist = await findOrderModule.execute(order, id_course)

        if(isOrderExist) {
            return res.status(400).json({
                success: false,
                message: "Order already exist"
            })
        }

        const createModule = new CreateModuleUseCase
        const modules = await createModule.execute({ name, description, order, id_course })

        if(!modules.success){
            return res.status(400).json(modules.message)
        }
        
        return res.status(201).json(modules.message)
    }
}