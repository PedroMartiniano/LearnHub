import { Request, Response } from "express";
import { GetTestsModuleByOrderUseCase } from "./GetTestsModuleByOrderUseCase";

export class GetTestsModuleByOrderController {
    async handle(req: Request, res: Response) {
        const { id_user } = req.body
        const { id_module } = req.params

        if(!id_user){
            return res.status(400).json({
                sucess: false,
                message: "Missing id user body param"
            })
        }

        if(!id_module){
            return res.status(400).json({
                sucess: false,
                message: "Missing id module param"
            })
        }

        const getTestsModuleByOrder = new GetTestsModuleByOrderUseCase
        const testModule = await getTestsModuleByOrder.execute(id_module, id_user)

        return res.json(testModule)
    }
}