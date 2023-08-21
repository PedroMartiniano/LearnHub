import { Response } from "express";
import { prisma } from "../../../lib/prisma";

export class GetAlumnsUseCase {
    async execute(res: Response){
        try {
            const result = await prisma.alumn.findMany()

            return res.status(200).json(result)

        } catch{
            return res.status(400).json(null)
        }
    }
}