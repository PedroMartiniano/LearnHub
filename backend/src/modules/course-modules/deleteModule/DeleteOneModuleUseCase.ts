import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export class DeleteOneModuleUseCase {
    async execute(req: Request, res: Response) {
        try {
            const { id } = req.params

            await prisma.module.update({
                where: {
                    id
                },
                data: {
                    status: 0
                }
            })

            return res.status(200).json({ message: "Module successfully deleted" })
        } catch {
            return res.status(400).json(null)
        }
    }
}