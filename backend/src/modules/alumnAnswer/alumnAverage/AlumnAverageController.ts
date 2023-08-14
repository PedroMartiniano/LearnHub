import { Request, Response } from "express";
import { GetTestsModuleByOrderUseCase } from "../../modules-tests/getTestsModuleByOrder/GetTestsModuleByOrderUseCase";

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
        const AlumnDontEndedTests = await getTestsModulesByOrder.execute(id_module, id_user)

        if (AlumnDontEndedTests) {
            return res.status(400).json({
                success: false,
                message: "Alumn didn't ended his tasks of this modules"
            })
        }
    }
}