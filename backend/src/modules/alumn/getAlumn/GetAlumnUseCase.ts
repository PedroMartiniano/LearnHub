import { Response } from "express";
import { prisma } from "../../../lib/prisma";
import { AppError } from "../../../error/AppError";

export class GetAlumnUseCase {
    async execute(res: Response){
        try {
            const result = await prisma.alumn.findMany()
                .catch(() => {throw new AppError("something went wrong", 401)})

            return res.status(200).json(result)

        } catch{
            throw new AppError("something went wrong", 401)
        }
    }
}