import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export class GetModuleByIdUseCase {
    async execute(req: Request, res: Response) {
        try {
            const { id } = req.params
            const moduleFromId = await prisma.module.findUnique({
                where: {
                    id
                }
            })

            return res.status(200).json(moduleFromId)
        } catch {   
            return res.status(400).json(null)
        }
    }
}