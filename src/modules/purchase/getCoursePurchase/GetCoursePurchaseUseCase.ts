import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export class GetCoursePurchaseUseCase {
    async execute(req: Request, res: Response) {
        try {
            const { id_course } = req.params

            const coursePurchases = await prisma.purchase.findMany({
                where: {
                    id_course,
                }
            })

            return res.status(200).json(coursePurchases)

        } catch {
            return res.status(400).json(null)
        }
    }
}