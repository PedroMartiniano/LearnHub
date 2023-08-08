import { Request, Response } from "express";
import { GetTestsByModuleUseCase } from "./GetTestsByModuleUseCase";

export class GetTestsByModuleController {
    async handle(req: Request, res: Response) {
        const { id_module } = req.params

        if(!id_module){
            return res.status(400).json({
                success: false,
                message: "Missing id_module body param"
            })
        }

        const getTestsByModule = new GetTestsByModuleUseCase
        const test = await getTestsByModule.execute(id_module)

        if(!test){
            return res.status(400).json('No tests in this Module')
        }

        return res.status(200).json(test)
    }
}