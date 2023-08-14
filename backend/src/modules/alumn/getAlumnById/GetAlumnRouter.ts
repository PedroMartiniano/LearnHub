import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export class GetAlumnByIdRouter {
    async execute(req: Request, res: Response) {
        try {
            const { id } = req.params
            const alumn = await prisma.alumn.findUnique({
                where: {
                    id
                }
            })

            return res.status(200).json(alumn)
        } catch {
            return res.status(400).json(null)
        }
    }
}