import { Request, Response } from "express";
import { GetCourseUseCase } from "../../course/getCourse/getCourseUseCase";
import { GetAlumnByIdUseCase } from "../../alumn/getAlumnById/GetAlumnByIdUseCase";
import { GetAlCuPurchaseUseCase } from "../getAlumnCoursePurchase/GetAlCuPurchaseUseCase";
import { CancelPurchaseUseCase } from "./CancelPurchaseUseCase";

export class CancelPurchaseController {
    async handle(req: Request, res: Response) {
        const { id_user } = req.body
        const { id_course } = req.params

        if (!id_user) {
            return res.status(400).json({
                success: false,
                message: "Missing id_user param"
            })
        }

        if (!id_course) {
            return res.status(400).json({
                success: false,
                message: "Missing id_course param"
            })
        }

        const getAlumn = new GetAlumnByIdUseCase
        const alumn = await getAlumn.execute(id_user)

        if (!alumn || alumn.status === 0) {
            return res.status(400).json({
                success: false,
                message: "Alumn account disabled"
            })
        }

        const getCourse = new GetCourseUseCase
        const course = await getCourse.execute(id_course)

        if (!course || course.status === 0) {
            return res.status(400).json({
                success: false,
                message: "Course disabled"
            })
        }

        const getAlumnAndCourse = new GetAlCuPurchaseUseCase
        const purchase = await getAlumnAndCourse.execute(id_user, id_course)

        if (!purchase.success || purchase.purchase?.status === 0) {
            return res.status(400).json({
                success: false,
                message: "Something is wrong in your purchase"
            })
        }

        const cancelPurchase = new CancelPurchaseUseCase
        const purchaseCanceled = await cancelPurchase.execute(id_user, id_course)

        if(!purchaseCanceled.success){
            return res.status(400).json(purchaseCanceled.message)
        }
        return res.status(200).json(purchaseCanceled.message)
    }
}