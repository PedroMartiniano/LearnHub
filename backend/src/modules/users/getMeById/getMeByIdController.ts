import { Request, Response } from "express";
import { GetUserByIdUseCase } from "../getUserById/GetUserByIdUseCase";
import { GetAlumnByIdUseCase } from "../../alumn/getAlumnById/GetAlumnByIdUseCase";
import { GetStaffByIdUseCase } from "../../staff/getStaffById/GetStaffByIdUseCase";

export class GetMeByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.body

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Missing id body param"
            })
        }

        const getUser = new GetUserByIdUseCase
        const user = await getUser.execute(id)


        if (user) {
            if (user.id_alumn) {
                const getAlumn = new GetAlumnByIdUseCase
                const alumn = await getAlumn.execute(user.id_alumn)
                return res.status(200).json({ id_user: user.id, id_alumn: alumn?.id, email: user.email, first_name: alumn?.first_name, last_name: alumn?.last_name })
            }
            if (user.id_staff) {
                const getStaff = new GetStaffByIdUseCase
                const staff = await getStaff.execute(user.id_staff)
                return res.status(200).json({ id_user: user.id, id_staff: staff?.id, email: user.email, first_name: staff?.first_name, last_name: staff?.last_name })
            }
        }

        return res.status(400).json('No user found')
    }
}