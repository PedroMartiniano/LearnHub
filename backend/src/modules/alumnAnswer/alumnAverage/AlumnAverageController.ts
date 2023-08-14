import { Request, Response } from "express";
import { GetTestsModuleByOrderUseCase } from "../../modules-tests/getTestsModuleByOrder/GetTestsModuleByOrderUseCase";
import { AlumnAverageUseCase } from "./AlumnAverageUseCase";
import { GetTestsByModuleController } from "../../modules-tests/getTestsByModule/GetTestsByModuleController";
import { GetTestsByModuleUseCase } from "../../modules-tests/getTestsByModule/GetTestsByModuleUseCase";

export class AlumnAverageController {
    async handle(req: Request, res: Response) {
        const { id_user } = req.body
        const { id_module } = req.params

        if (!id_user) {
            return res.status(400).json({
                sucess: false,
                message: "Missing id user body param"
            })
        }

        if (!id_module) {
            return res.status(400).json({
                sucess: false,
                message: "Missing id module param"
            })
        }

        const getTestsModulesByOrder = new GetTestsModuleByOrderUseCase
        const alumnDontEndedTests = await getTestsModulesByOrder.execute(id_module, id_user)

        if (alumnDontEndedTests) {
            return res.status(400).json({
                success: false,
                message: "Alumn didn't ended his tasks of this modules"
            })
        }

        const alumnAverageUseCase = new AlumnAverageUseCase
        const alumnAverage = await alumnAverageUseCase.execute(id_module, id_user)

        const getTestsByModule = new GetTestsByModuleUseCase
        const moduleTests = await getTestsByModule.execute(id_module)

        if(alumnAverage && moduleTests) {
            return res.status(200).json({Alumn_Average: `${alumnAverage}/${moduleTests.length}`})
        }
        return res.status(400).json({message: "Something went wrong"})
    }
}