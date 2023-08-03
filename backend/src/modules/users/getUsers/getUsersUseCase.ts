import { Response } from "express";
import { prisma } from "../../../lib/prisma";

export class GetUsersUseCase {
    async execute(res: Response) {
        try {
            const users = await prisma.users.findMany()

            return res.status(200).json(users)

        } catch {
            return res.status(400).json('something went wrong')
        }
    }
}